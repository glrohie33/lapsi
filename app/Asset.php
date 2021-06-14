<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    //
    protected $fillable = ['agency_id', 'asset_type_id', 'asset_details'];
    public function agency()
    {
        return $this->belongsTo(Agency::class, 'agency_id');
    }

    public function asssetType()
    {
        return $this->belongsTo(AssetType::class, 'asset_type_id');
    }
}
