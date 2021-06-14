<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgencyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('agency')) {
            Schema::create('agency', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('slug');
                $table->unsignedInteger('parent_id');
                $table->integer('position');
                $table->integer('children');
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
        Schema::drop('agency');
    }
}
