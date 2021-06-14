<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssetInsurance extends Model
{
    //
    protected $fillable = ['policy_id', 'business_id', 'insurance_class_id', 'asset_id'];
}
