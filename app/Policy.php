<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Policy extends Model
{
    //
    protected $fillable = ['insurance_class', 'policy_number', 'sum_insured', 'premium', 'start_date', 'expiry_date', 'business_id', 'underwriters'];

    public function insurance()
    {
        return $this->belongsTo(InsuranceClass::class, 'insurance_class');
    }

    public function business()
    {
        return $this->belongsTo(Business::class, 'business_id');
    }
}
