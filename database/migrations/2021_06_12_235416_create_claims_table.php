<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClaimsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('claims')) {
            Schema::create('claims', function (Blueprint $table) {
                $table->id();
                $table->bigInteger('agency');
                $table->bigInteger('policy_id')->nullable();
                $table->bigInteger('business_id')->nullable();
                $table->bigInteger('claim_type');
                $table->bigInteger('claim_class');
                $table->bigInteger('asset_type');
                $table->bigInteger('asset')->nullable();
                $table->string('claimant_name');
                $table->string('claimant_phone');
                $table->string('claimant_email');
                $table->string('contact_phone');
                $table->string('contact_email');
                $table->string('contact_name');
                $table->text('claim_description')->nullable();
                $table->integer('status')->default(0);
                $table->text('files')->nullable();
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
        Schema::dropIfExists('claims');
    }
}
