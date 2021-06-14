<?php

namespace App;

use Laravel\Passport\HasApiTokens;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Concerns\HasAttributes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'oracle', 'title', 'password', 'surname', 'username', 'role_id', 'agency_id', 'firstname', 'middlename', 'sex', 'phone', 'state', 'designation', 'grade', 'dateofbirth', 'dateof1stapp', 'dateofpreapp', 'dateoflastdep','dateofdeath','retirementdate','beneficiaries', 'signature', 'office', 'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function agency()
    {
        $agency  = json_decode($this->agency_id);
        return Agency::whereIn('id', [])->get();
    }

    public function actions()
    {
        return $this->hasMany(ActionLog::class, 'action_on');
    }

    public function files()
    {
        return $this->hasMany(File::class, 'user_id');
    }
}
