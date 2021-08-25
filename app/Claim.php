<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Claim extends Model
{
    //
    protected $fillable = ['agency', 'policy_id', 'business_id', 'claim_type', 'claim_class', 'asset_type', 'claimant_name', 'claimant_phone', 'claimant_email', 'contact_phone', 'contact_email', 'contact_name', 'claim_description', 'files', 'asset', 'note', 'status', 'claim_value', 'claim_location'];
}
