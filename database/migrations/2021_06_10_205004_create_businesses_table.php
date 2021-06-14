<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('businesses')) {
            Schema::create('businesses', function (Blueprint $table) {
                $table->id();
                $table->bigInteger('agency')->unsigned();
                $table->string('insured_name');
                $table->string('insured_phone');
                $table->string('insured_email');
                $table->string('business_type');
                $table->text('business_description')->nullable();
                $table->bigInteger('business_value')->nullable();
                $table->string('business_location')->nullable();
                $table->string('contact_name')->nullable();
                $table->bigInteger('contact_phone')->nullable();
                $table->string('email');
                $table->bigInteger('policy_id')->nullable();
                $table->text('assets')->nullable();
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
        Schema::dropIfExists('businesses');
    }
}
