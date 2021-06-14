<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetInsurancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('asset_insurances')) {
            Schema::create('asset_insurances', function (Blueprint $table) {
                $table->id();
                $table->bigInteger('policy_id')->nullable();
                $table->bigInteger('business_id')->nullable();
                $table->bigInteger('insurance_class_id');
                $table->bigInteger('asset_id');
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
        Schema::dropIfExists('asset_insurances');
    }
}
