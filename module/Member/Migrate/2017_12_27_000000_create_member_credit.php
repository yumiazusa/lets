<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemberCredit extends Migration
{
    
    public function up()
    {
        Schema::create('member_credit', function (Blueprint $table) {

            $table->increments('id');
            $table->timestamps();

            $table->integer('memberUserId')->nullable()->comment('用户ID');
            $table->integer('total')->nullable()->comment('数量');

            $table->unique(['memberUserId']);

        });

    }

    
    public function down()
    {

    }
}
