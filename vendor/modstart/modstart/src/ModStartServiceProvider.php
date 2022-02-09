<?php


namespace ModStart;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use ModStart\Admin\ModStartAdmin;
use ModStart\App\Api\ModStartApi;
use ModStart\App\OpenApi\ModStartOpenApi;
use ModStart\App\Web\ModStartWeb;
use ModStart\Core\Facades\ModStart;
use ModStart\Module\ModuleManager;

/**
 * Class ModStartServiceProvider
 * @package ModStart
 */
class ModStartServiceProvider extends ServiceProvider
{
    protected $commands = [
        \ModStart\Command\ModuleInstallCommand::class,
        \ModStart\Command\ModuleUninstallCommand::class,
        \ModStart\Command\ModuleEnableCommand::class,
        \ModStart\Command\ModuleDisableCommand::class,
        \ModStart\Command\ModuleInstallAllCommand::class,
    ];

    protected $routeMiddleware = [
        'admin.bootstrap' => \ModStart\Admin\Middleware\BootstrapMiddleware::class,
        'admin.auth' => \ModStart\Admin\Middleware\AuthMiddleware::class,
        'web.bootstrap' => \ModStart\App\Web\Middleware\BootstrapMiddleware::class,
        'api.bootstrap' => \ModStart\App\Api\Middleware\BootstrapMiddleware::class,
        'api.session' => \ModStart\App\Api\Middleware\SessionMiddleware::class,
        'openApi.bootstrap' => \ModStart\App\OpenApi\Middleware\BootstrapMiddleware::class,
    ];

    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../views', 'modstart');
        $this->loadViewsFrom(base_path('module'), 'module');
        $this->loadTranslationsFrom(__DIR__ . '/../lang/', 'modstart');


        $this->publishes([__DIR__ . '/../asset' => public_path('asset')], 'modstart');
        $this->publishes([__DIR__ . '/../resources/lang' => base_path('resources/lang')], 'modstart');

        $this->registerModuleServiceProviders();

        $basePath = \ModStart\Core\Input\Request::basePath();
        $adminPath = '/' . trim(config('modstart.admin.prefix'), '/');
        if ($adminPath === '/') {
            $adminPath = '';
        }
//         var_dump([$basePath, $adminPath]);exit();
        if (Str::startsWith($basePath, $adminPath . '/') || $basePath == $adminPath) {
            ModStartAdmin::registerAuthRoutes();
            ModStartAdmin::registerModuleRoutes();
        } else if (Str::startsWith($basePath, '/' . trim(config('modstart.api.prefix'), '/') . '/')) {
            ModStartApi::registerModuleRoutes();
        } else if (Str::startsWith($basePath, '/' . trim(config('modstart.openApi.prefix'), '/') . '/')) {
            ModStartOpenApi::registerModuleRoutes();
        } else {
            ModStartWeb::registerModuleRoutes();
        }
    }

    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/modstart.php', 'modstart');
        $this->mergeConfigFrom(__DIR__ . '/../config/env.php', 'env');
        $this->mergeConfigFrom(__DIR__ . '/../config/module.php', 'module');
        $this->mergeConfigFrom(__DIR__ . '/../config/data.php', 'data');

        if ($subdirUrl = config('modstart.subdirUrl')) {
            URL::forceRootUrl($subdirUrl);
        }
        if ($forceSchema = config('modstart.forceSchema')) {
            URL::forceSchema($forceSchema);
        }
        View::share('__msRoot', config('modstart.subdir'));

        $this->app->booting(function () {
            $loader = AliasLoader::getInstance();
            $loader->alias('ModStart', ModStart::class);
        });

        $this->app->singleton('modstartConfig', config('modstart.config.driver'));

        $this->registerRouteMiddleware();

        $this->commands($this->commands);

        $this->registerBladeDirectives();

        $this->registerRoutePattern();

        $this->setupMonitor();
    }

    private function listModuleServiceProviders()
    {
        $records = [];
        $modules = ModuleManager::listAllEnabledModules();
        foreach ($modules as $module => $_) {
            $provider = "\\Module\\$module\\Core\\ModuleServiceProvider";
            if (class_exists($provider)) {
                $records[] = $provider;
            }
            $basic = ModuleManager::getModuleBasic($module);
            if (empty($basic['providers'])) {
                continue;
            }
            $records = array_merge($records, $basic['providers']);
        }
        foreach (['Admin', 'Web', 'Api', 'OpenApi'] as $app) {
            $provider = "\\App\\$app\\Core\\ModuleServiceProvider";
            if (class_exists($provider)) {
                $records [] = $provider;
            }
        }
        return $records;
    }

    public function registerModuleServiceProviders()
    {
        if (config('env.APP_DEBUG')) {
            $providers = $this->listModuleServiceProviders();
        } else {
            $providers = Cache::rememberForever('ModStartServiceProviders', function () {
                return $this->listModuleServiceProviders();
            });
        }
        foreach ($providers as $provider) {
            if (class_exists($provider)) {
                $this->app->register($provider);
            }
        }
    }

    private function registerRoutePattern()
    {
        Route::pattern('id', '[0-9]+');
        Route::pattern('alias', '[a-zA-Z0-9]+');
        Route::pattern('alias_url', '[a-zA-Z0-9_]+');
    }

    private function setupMonitor()
    {
        static $queryCountPerRequest = 0;
        static $queryCountPerRequestSqls = [];

        Event::listen('router.after', function () use (&$queryCountPerRequest, &$queryCountPerRequestSqls) {
            $time = round((microtime(true) - LARAVEL_START) * 1000, 2);
            $param = json_encode(Request::input());
            $url = Request::url();
            $method = Request::getMethod();
            if ($time > 1000) {
                $param = json_encode(Request::input());
                $url = Request::url();
                $method = Request::getMethod();
                Log::warning("LONG_REQUEST $method [$url] ${time}ms $param");
            }
            if ($queryCountPerRequest > 10) {
                Log::warning("MASS_REQUEST_SQL $queryCountPerRequest $method [$url] $param -> " . json_encode($queryCountPerRequestSqls));
                // Log::warning("MASS_REQUEST_SQL $queryCountPerRequest $method [$url] $param");
            }
        });

        Event::listen('illuminate.query', function ($query, $bindings, $time, $connectionName) use (&$queryCountPerRequest, &$queryCountPerRequestSqls) {
            $queryCountPerRequest++;
            $queryCountPerRequestSqls[] = "$query, " . json_encode($bindings);
            // Log::info("SQL $query, " . json_encode($bindings));
            if ($time > 500) {
                $param = json_encode($bindings);
                Log::warning("LONG_SQL ${time}ms, $query, $param");
            }
        });
    }

    private function registerRouteMiddleware()
    {
        $router = app('router');
        foreach ($this->routeMiddleware as $key => $middleware) {
            if (PHP_VERSION_ID >= 80000) {
                $router->aliasMiddleware($key, $middleware);
            } else {
                $router->middleware($key, $middleware);
            }
        }
    }

    private function registerBladeDirectives()
    {
        $this->app->singleton('assetPathDriver', config('modstart.asset.driver'));

        Blade::directive('asset', function ($expression = '') use (&$assetBase) {
            if (empty($expression)) {
                return '';
            }
            if (PHP_VERSION_ID > 80000) {
                $regx = '/(.+)/i';
            } else {
                $regx = '/\\((.+)\\)/i';
            }
            if (preg_match($regx, $expression, $mat)) {
                $file = trim($mat[1], '\'" "');
                $driver = app('assetPathDriver');
                return $driver->getCDN($file) . $driver->getPathWithHash($file);
            } else {
                return '';
            }
        });
    }
}