<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InsuranceClass extends Model
{
    //
    protected $fillable = ['name', 'type', 'code'];

    public function type()
    {
        return $this->belongsTo(InsuranceType::class, 'type');
    }

    public function policies()
    {
        return $this->hasMany(Policy::class, 'insurance_class');
    }

    public function businesses()
    {
        return $this->hasMany(Business::class, 'business_type');
    }
}
