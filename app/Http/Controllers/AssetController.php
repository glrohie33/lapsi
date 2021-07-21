<?php

namespace App\Http\Controllers;

use App\Asset;
use App\Imports\AssetImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;


class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $insurance = $request->insurance;
        $filter = $request->filter;
        $this->ins = $insurance;
        $this->fil = $filter;
        $offset = ($request->page * $request->limit) - $request->limit;
        $assets = DB::table('assets')
            ->leftJoin('asset_types', 'asset_types.id', '=', 'assets.asset_type_id')
            ->leftJoin('agency', 'assets.agency_id', '=', 'agency.id')
            ->leftJoin('insurance_classes as insurance', DB::raw("`insurance`.`id` MEMBER OF(`asset_types`.`insurance_classes`)"), '=', DB::raw(1))
            ->leftJoin('asset_insurances as AI', function ($join) {
                $join = $join->on('assets.id', '=', 'AI.asset_id');
                if (!empty($this->ins)) {
                    $join->where('AI.insurance_class_id', '=', $this->ins);
                }
            });
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $assets = $assets->orderBy($request->sort, $order);
        }
        if (!empty($request->type)) {
            $assets = $assets->where('assets.asset_type_id', '=', $request->type);
        }

        $assets = $assets->select('assets.*', 'agency.name as agency', 'asset_types.name as assetstype', DB::raw("COUNT(`AI`.`id`) as number_of_insurances"), DB::raw("JSON_ARRAYAGG(JSON_OBJECT('id',`insurance`.`id`)) as insurances"), DB::raw("JSON_ARRAYAGG(JSON_OBJECT('id',`AI`.`id`,'insurance_class',`AI`.`insurance_class_id`)) as asset_insurances"));
        $assets =  $assets->groupBy('assets.id')->get();
        if ($filter > -1) {
            if ($filter > 0) {
                $assets = $assets->where('number_of_insurances', '>', 0);
            } else {
                $assets = $assets->where('number_of_insurances', '=', 0);
            }
        }


        $total = Asset::count();
        return response()->json(compact('assets', 'total'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $input = $request->all();
        
        $validator = Validator::make($input, ['agency_id' => 'required|not_in:[]', 'asset_details' => 'required|file|mimes:xlsx,xls,csv,txt', 'asset_type_id' => 'required'], ['asset_type_id.required' => 'Please select asset type', 'asset_details.required' => 'Please select assets']);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {

            $path = $request->file('asset_details')->getRealPath();
            $asset_import = new AssetImport();
            $asset_import->agency_id = $input['agency_id'];
            $asset_import->asset_type_id = $input['asset_type_id'];
            $data = Excel::import($asset_import, $path);
            $status = true;
            // if ($data->count() > 0) {
            //     $arr_data = $data->toArray();
            //     var_dump($arr_data);
            // }
        }
        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Asset  $asset
     * @return \Illuminate\Http\Response
     */
    public function show(Asset $asset)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Asset  $asset
     * @return \Illuminate\Http\Response
     */
    public function edit(Asset $asset)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Asset  $asset
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Asset $asset)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Asset  $asset
     * @return \Illuminate\Http\Response
     */
    public function destroy(Asset $asset)
    {
        //
    }
}
