<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class ModifyMemberUserAddStatus extends Migration
{
    
    public function up()
    {
        Schema::table('member_user', function (Blueprint $table) {

            $table->tinyInteger('status')->nullable()->comment('');

        });
        \ModStart\Core\Dao\ModelUtil::updateAll('member_user', ['status' => \Module\Member\Type\MemberStatus::NORMAL]);
    }

    
    public function down()
    {

    }
}
