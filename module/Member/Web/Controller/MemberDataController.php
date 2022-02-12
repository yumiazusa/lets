<?php


namespace Module\Member\Web\Controller;

use Illuminate\Routing\Controller;
use ModStart\Core\Input\Request;
use ModStart\Data\FileManager;
use ModStart\Data\UeditorManager;
use Module\Member\Auth\MemberUser;
use Module\Member\Support\MemberLoginCheck;

class MemberDataController extends Controller implements MemberLoginCheck
{
    public function fileManager($category)
    {
        if (Request::isPost()) {
            return FileManager::handle(
                $category,
                'member_upload',
                'member_upload_category',
                MemberUser::id()
            );
        }
        return view('module::Member.View.pc.memberData.fileManager', [
            'category' => $category,
            'pageTitle' => L('Select ' . ucfirst($category)),
        ]);
    }

    public function ueditor()
    {
        return UeditorManager::handle('member_upload', 'member_upload_category', MemberUser::id());
    }
}