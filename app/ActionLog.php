<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ActionLog extends Model
{
    //
    protected $fillable = ['action', 'action_details', 'action_on', 'action_by'];

    public function user()
    {
        return $this->belongsTo(User::class, 'action_on');
    }
}
