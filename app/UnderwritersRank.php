<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UnderwritersRank extends Model
{
    //
    protected $fillable = ['rank', 'name'];

    public function underwriters()
    {
        return $this->hasMany(Underwriter::class, 'rank_id');
    }
}
