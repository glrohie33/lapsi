<?php

namespace App\Imports;

use App\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class UsersImport implements ToModel, WithHeadingRow
{
    public $agency_id = "";
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        $row['agency_id'] = $this->agency_id;
        $user = User::where('oracle', '=', $row['oracle']);
        if ($user->count() > 0) {
            $user = $user->get()->first();
            $user->update($row);
        } else {
            $row['beneficiaries'] = '[]';
            User::create($row);
        }
    }
}
