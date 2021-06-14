<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Broker extends Model
{
    protected $fillable = ['year', 'registered_name', 'rc_number', 'address', 'city', 'state', 'zip', 'ceo', 'phone', 'email'];

    public function rank()
    {
        return $this->belongsTo(Broker::class, 'rank_id');
    }
    //
}
