<?php

namespace App\Imports;

use App\Asset;
use App\AssetType;
use Illuminate\Support\Facades\DB;
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
        $asset_type = AssetType::find($this->asset_type_id);
        $key = str_replace(" ", "_", trim(strtolower($asset_type->unique_field)));
        $asset = Asset::where(DB::raw("JSON_EXTRACT(`asset_details`,'$.$key')"), $row[$key]);
        $data['asset_type_id'] = $this->asset_type_id;
        $data['agency_id'] = $this->agency_id;
        $data['asset_details'] = json_encode($row);
        if ($asset->count() > 0) {
            $asset = $asset->take(1)->first();
            $asset->update($data);
        } else {
            Asset::create($data);
        }
    }
}
