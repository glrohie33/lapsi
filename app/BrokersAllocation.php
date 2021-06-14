<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Maatwebsite\Excel\Events\AfterSheet;

class BrokersAllocation extends Model
{
    //
    protected $fillable = ['agency_id', 'broker_id'];

    function broker()
    {
        return $this->belongsTo(Broker::class, 'broker_id');
    }

    function agency()
    {
        return $this->belongsTo(Agency::class, 'agency_id');
    }
}
