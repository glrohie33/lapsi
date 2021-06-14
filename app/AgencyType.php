<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AgencyType extends Model
{
    //
    protected $table = 'agency_type';
    protected $fillable = ['name', 'slug'];

    public function agencies()
    {
        return  $this->hasMany(Agency::class, 'agency_type');
    }

    
}
