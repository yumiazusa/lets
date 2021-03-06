<?php

namespace Module\AdminManager\Admin\Controller;

use App\Constant\AppConstant;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Artisan;
use ModStart\Admin\Auth\AdminPermission;
use ModStart\Core\Exception\BizException;
use ModStart\Core\Input\InputPackage;
use ModStart\Core\Input\Request;
use ModStart\Core\Input\Response;
use ModStart\Core\Util\FileUtil;
use ModStart\Module\ModuleManager;
use Module\AdminManager\Util\ModuleUtil;
use Module\AdminManager\Util\UpgradeUtil;
use Module\ModuleStore\Util\ModuleStoreUtil;

class UpgradeController extends Controller
{
    public static $PermitMethodMap = [
        'index' => '@SystemUpgrade',
        'info' => '@SystemUpgrade',
        'auth' => '@SystemUpgrade',
    ];

    private function doFinish($msgs, $logs = null)
    {
        return Response::generateSuccessData([
            'msg' => array_map(function ($item) {
                return '<i class="iconfont icon-hr"></i> ' . $item;
            }, $msgs),
            'logs' => $logs,
            'finish' => true,
        ]);
    }

    private function doNext($step, $msgs = [], $data = [])
    {
        $input = InputPackage::buildFromInput();
        $data = array_merge($input->getJsonAsInput('data')->all(), $data);
        return Response::generateSuccessData([
            'msg' => array_map(function ($item) {
                if (!starts_with($item, '<')) {
                    $item = "<span class='ub-text-default'>$item</span>";
                }
                return '<i class="iconfont icon-hr"></i> ' . $item;
            }, $msgs),
            'step' => $step,
            'data' => $data,
            'finish' => false,
        ]);
    }

    public function index()
    {
        if (Request::isPost()) {
            AdminPermission::demoCheck();
            $input = InputPackage::buildFromInput();
            $step = $input->getTrimString('step');
            $token = $input->getTrimString('token');
            $dataInput = $input->getJsonAsInput('data');
            $toVersion = $dataInput->getTrimString('toVersion');
            BizException::throwsIfEmpty('toVersion??????', $toVersion);
            switch ($step) {
                case 'upgradePackage':
                    $package = $dataInput->getTrimString('package');
                    $diffContentFile = $dataInput->getTrimString('diffContentFile');
                    BizException::throwsIfEmpty('package??????', $package);
                    BizException::throwsIfEmpty('diffContentFile??????', $diffContentFile);
                    $ret = UpgradeUtil::upgradePackage($package, $diffContentFile);
                    BizException::throwsIfResponseError($ret);
                    return $this->doFinish([
                        '<span class="ub-text-success">?????????????????? <a href="javascript:;" onclick="window.location.reload()">????????????</a> ??????????????????</span>',
                    ], $ret['data']['logs']);
                case 'downloadPackage':
                    $ret = UpgradeUtil::downloadPackage($token, AppConstant::APP, AppConstant::VERSION, $toVersion);
                    BizException::throwsIfResponseError($ret);
                    return $this->doNext('upgradePackage', [
                        '<span class="ub-text-success">?????????????????????????????? ' . FileUtil::formatByte($ret['data']['packageSize']) . '</span>',
                        '<span class="ub-text-default">????????????????????????...</span>'
                    ], [
                        'package' => $ret['data']['package'],
                        'diffContentFile' => $ret['data']['diffContentFile'],
                    ]);
                case 'checkPackage':
                    $exitCode = Artisan::call("migrate");
                    BizException::throwsIf("?????? php artisan ?????????????????????????????????", 0 != $exitCode);
                    return $this->doNext('downloadPackage', [
                        '<span class="ub-text-success">????????????</span>',
                        '<span class="ub-text-default">?????????????????????...</span>'
                    ]);
                    break;
                default:
                    return $this->doNext('checkPackage', [
                        '<span class="ub-text-success">???????????????????????? V' . AppConstant::VERSION . ' ??? V' . $toVersion . '</span>',
                        '<span class="ub-text-default">??????????????????...</span>'
                    ]);
            }
        }
        return view('module::AdminManager.View.admin.upgrade');
    }

    public function auth()
    {
        return view('module::AdminManager.View.admin.auth', [
            'modules' => ModuleUtil::modules(),
        ]);
    }

    public function info()
    {
        $latest = UpgradeUtil::latest();
        return Response::generateSuccessData([
            'version' => AppConstant::VERSION,
            'latestVersion' => $latest['latestVersion'],
            'autoUpgrade' => $latest['autoUpgrade'],
        ]);
    }

}
