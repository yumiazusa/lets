@extends('modstart::layout.frame')

@section('pageTitle'){{empty($pageTitle)?'':$pageTitle}}@endsection
@section('pageKeywords'){{empty($pageKeywords)?'':$pageKeywords}}@endsection
@section('pageDescription'){{empty($pageDescription)?'':$pageDescription}}@endsection
{!! \ModStart\ModStart::css('asset/theme/default/admin.css') !!}
{!! \ModStart\ModStart::js('asset/common/admin.js') !!}
{!! \ModStart\ModStart::js('asset/vendor/pinyin-match.js') !!}

@section('headAppend')
    @parent
    <script>
        window.__msAdminRoot = "{{modstart_admin_url(null)}}";
        window.__selectorDialogServer = "{{modstart_admin_url('data/file_manager')}}";
    </script>
    {!! \ModStart\Core\Hook\ModStartHook::fireInView('AdminPageHeadAppend'); !!}
@endsection

@section('bodyAppend')
    @parent
    {!! \ModStart\Core\Hook\ModStartHook::fireInView('AdminPageBodyAppend'); !!}
@endsection

@section('body')
    <div class="ub-panel-frame @if(Session::get('_adminFrameLeftToggle',false) && \ModStart\Core\Util\AgentUtil::isPC()) left-toggle @endif">
        <a href="javascript:;" class="left-menu-shrink"></a>
        <div class="left">
            <a class="logo" href="{{modstart_admin_url()}}">
                {!! modstart_admin_config('title','<i class="icon iconfont icon-pc"></i> <span class="text">'.L('Admin Panel').'</span>') !!}
            </a>
            <div class="menu">
                <div class="menu-search-container">
                    <input type="text" id="menuSearchKeywords" placeholder="{{L('Search')}}" />
                    <i class="iconfont icon-search"></i>
                </div>
                @foreach(\ModStart\Admin\Auth\AdminPermission::menu($_controllerMethod) as $_v1)
                    <div class="menu-item @if(!empty($_v1['_active'])) active @endif">
                        @if(empty($_v1['children']))
                            <a href="{{\ModStart\Admin\Auth\AdminPermission::urlToLink($_v1['url'])}}" class="title" data-keywords-item data-keywords-filter>
                                {!! empty($_v1['icon'])?'<i class="icon iconfont icon-list"></i>':$_v1['icon'] !!}
                                <span class="text">{{$_v1['title']}}</span>
                            </a>
                        @else
                            <a href="javascript:;" class="title @if(!empty($_v1['_active'])) open @endif" data-keywords-item onclick="$(this).toggleClass('open')">
                                <i class="arrow"></i>
                                {!! empty($_v1['icon'])?'<i class="icon iconfont icon-list"></i>':$_v1['icon'] !!}
                                <span class="text">{{$_v1['title']}}</span>
                            </a>
                            <div class="children" data-keywords-item>
                                @foreach($_v1['children'] as $_v2)
                                    <div class="menu-item @if(!empty($_v2['_active'])) active @endif">
                                        @if(empty($_v2['children']))
                                            <a href="{{\ModStart\Admin\Auth\AdminPermission::urlToLink($_v2['url'])}}" class="title" data-keywords-item data-keywords-filter>
                                                <span class="text">{{$_v2['title']}}</span>
                                            </a>
                                        @else
                                            <a href="javascript:;" data-keywords-item class="title @if(!empty($_v2['_active'])) open @endif" onclick="$(this).toggleClass('open')">
                                                <i class="arrow"></i>
                                                <span class="text">{{$_v2['title']}}</span>
                                            </a>
                                            <div class="children" data-keywords-item>
                                                @foreach($_v2['children'] as $_v3)
                                                    <div class="menu-item @if(!empty($_v3['_active'])) active @endif">
                                                        <a href="{{\ModStart\Admin\Auth\AdminPermission::urlToLink($_v3['url'])}}" class="title" data-keywords-filter>
                                                            <span class="text">{{$_v3['title']}}</span>
                                                        </a>
                                                    </div>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>
                                @endforeach
                            </div>
                        @endif
                    </div>
                @endforeach
            </div>
            <div class="toolbar">
                <a href="javascript:;" class="menu-expand-all" data-tip-popover="{{L('Expand All')}}">
                    <i class="iconfont icon-move"></i>
                </a>
            </div>
        </div>
        <div class="right">
            <div class="top">
                <a href="javascript:;" class="right-menu-trigger">
                    <i class="iconfont icon-list"></i>
                </a>
                <div class="menu-right">
                    <div class="menu-item">
                        <a class="title" href="{{modstart_web_url('')}}" target="_blank">{{L('Visit Home')}}</a>
                    </div>
                    @if(\ModStart\Admin\Auth\AdminPermission::permit('SystemManage'))
                        <div class="menu-item">
                            <a class="title" href="javascript:;">{{L('Quick Operate')}}</a>
                            <div class="dropdown">
                                @if(\ModStart\Admin\Auth\AdminPermission::permit('SystemManage'))
                                    <a class="dropdown-item" href="javascript:;" data-ajax-request-loading data-ajax-request="{{action('\ModStart\Admin\Controller\SystemController@clearCache')}}">{{L('Clear Cache')}}</a>
                                @endif
                            </div>
                        </div>
                    @endif
                    <div class="menu-item">
                        <a class="title admin-user" href="javascript:;">
                            <i class="iconfont icon-user"></i>
                            {{$_adminUser?$_adminUser['username']:''}}
                        </a>
                        <div class="dropdown">
                            @if(\ModStart\Admin\Auth\AdminPermission::permit('\ModStart\Admin\Controller\ProfileController@changePassword'))
                                <a class="dropdown-item" href="{{action('\ModStart\Admin\Controller\ProfileController@changePassword')}}">{{L('Change Password')}}</a>
                            @endif
                            <a class="dropdown-item" href="javascript:;" data-confirm="{{L('Confirm Logout ?')}}" data-href="{{action('\ModStart\Admin\Controller\AuthController@logout')}}">{{L('Logout')}}</a>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" class="left-trigger">
                    <i class="iconfont icon-list"></i>
                </a>
                <div class="menu">
                    @section('adminPageMenu')
                        <a href="javascript:;" class="active">
                            @section('pageTitle')
                                {{empty($pageTitle)?'':$pageTitle}}
                            @show
                        </a>
                    @show
                </div>
            </div>
            <div class="content fixed" style="background-image:url(https://modstart.com/license-logo.png);">
                @section('bodyContent')@show
            </div>
        </div>
    </div>
@endsection
