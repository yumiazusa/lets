<?php

namespace ModStart\Core\Env;

class EnvUtil
{
    public static function all($file = null)
    {
        if (null === $file) {
            $file = base_path('.env');
        }
        $all = [];
        if (file_exists($file)) {
            foreach (explode("\n", file_get_contents($file)) as $line) {
                if ($line = trim($line)) {
                    if (substr($line, 0, 1) === '#') {
                        continue;
                    }
                    list($k, $v) = explode('=', $line);
                    $k = trim($k);
                    $v = trim($v);
                    switch (strtolower($v)) {
                        case 'true':
                        case '(true)':
                            $v = true;
                            break;
                        case 'false':
                        case '(false)':
                            $v = false;
                            break;
                        case 'empty':
                        case '(empty)':
                            $v = '';
                            break;
                        case 'null':
                        case '(null)':
                            $v = null;
                            break;
                    }
                    $all[$k] = $v;
                }
            }
        }
        return $all;
    }
}