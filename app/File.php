<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    //
    protected $fillable = ['user_id', 'file_type', 'url', 'filename'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
