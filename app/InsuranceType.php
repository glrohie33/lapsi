<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InsuranceType extends Model
{
    //
    protected $fillable = ['name'];

    public function insurance()
    {
        return $this->hasMany(InsuranceClass::class, 'type');
    }
}
