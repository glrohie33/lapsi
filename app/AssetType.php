<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AssetType extends Model
{
    //

    protected $fillable = ['name', 'insurance_classes', 'fields', 'unique_field'];

    public function assets()
    {
        return $this->hasMany(Asset::class, 'asset_type_id');
    }
}
