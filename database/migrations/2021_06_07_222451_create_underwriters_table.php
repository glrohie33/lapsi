<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnderwritersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('underwriters')) {
            Schema::create('underwriters', function (Blueprint $table) {
                $table->id();
                $table->integer('year');
                $table->string('registered_name');
                $table->string('rc_number');
                $table->string('address');
                $table->string('city');
                $table->string('state')->nullable();
                $table->integer('zip')->nullable();
                $table->string('ceo');
                $table->integer('phone');
                $table->string('email');
                $table->tinyInteger('status')->default(0);
                $table->integer('rank_id');
                $table->integer('parent_id')->nullable();
                $table->string('rel')->default('[]');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('underwriters');
    }
}
