<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    //
    protected $fillable = ['agency', 'insured_name', 'insured_phone', 'insured_email', 'business_type', 'business_description', 'business_value', 'business_class','business_location', 'contact_name', 'contact_phone', 'email', 'policy_id', 'assets'];

    public function policy()
    {
        return $this->hasOne(Policy::class, 'business_id');
    }
}
