<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    protected $table = 'agency';
    //
    protected $fillable = ['name', 'parent_id', 'phone', 'email', 'agency_type', 'slug'];

    public function type()
    {
        return $this->belongsTo(AgencyType::class, 'agency_type');
    }

    public function parent()
    {
        return  $this->belongsTo(Agency::class, 'parent_id');
    }

    public function assets()
    {
        return $this->hasMany(Asset::class, 'agency_id');
    }
}
