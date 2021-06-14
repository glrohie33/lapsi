<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UnderwritersAllocation extends Model
{
    //
    protected $fillable = ['insurance_class_id', 'underwriters','underwriters_allocations'];
}
