<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BrokerRank extends Model
{
    //
    protected $fillable = ['rank', 'name'];
    public function brokers()
    {
        return $this->hasMany(Broker::class, 'rank_id');
    }
}
