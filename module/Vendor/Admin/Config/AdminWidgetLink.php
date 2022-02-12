<?php


namespace Module\Vendor\Admin\Config;


class AdminWidgetLink
{
    private static $list = [];

    public static function register($closure)
    {
        self::$list[] = $closure;
    }

    public static function get()
    {
        $results = [];
        foreach (self::$list as $item) {
            if ($item instanceof \Closure) {
                $result = call_user_func($item);
                if (!empty($result)) {
                    if (isset($result['title']) && isset($result['list'])) {
                        $results[] = $result;
                    } else {
                        $results = array_merge($results, $result);
                    }
                }
            }
        }
        return $results;
    }

    public static function build($groupName, $titleLinks)
    {
        if (empty($titleLinks)) {
            return null;
        }
        return [
            'title' => $groupName,
            'list' => array_filter(array_map(function ($item) {
                return $item ? [
                    'title' => $item[0],
                    'link' => $item[1],
                ] : null;
            }, $titleLinks))
        ];
    }
}