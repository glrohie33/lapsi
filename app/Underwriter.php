<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Underwriter extends Model
{
    //
    protected $fillable = ['year', 'registered_name', 'rc_number', 'address', 'city', 'state', 'zip', 'ceo', 'phone', 'email'];

    public function rank()
    {
        return $this->belongsTo(Underwriter::class, 'rank_id');
    }
}
