<?php

namespace App\Imports;

use App\Asset;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class AssetImport implements ToModel, WithHeadingRow
{
    public $agency_id = "";
    public $asset_type_id = "";
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        $data['asset_type_id'] = $this->asset_type_id;
        $data['agency_id'] = $this->agency_id;
        $data['asset_details'] = json_encode($row);
        Asset::create($data);
    }
}
