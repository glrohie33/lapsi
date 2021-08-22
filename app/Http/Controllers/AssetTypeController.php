<?php

namespace App\Http\Controllers;

use App\AssetType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AssetTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $type = DB::table('asset_types');
        if (!empty($request->page) && !empty($request->limit)) {
            $offset = ($request->page * $request->limit) - $request->limit;
            $type = $type->offset($offset)->limit($request->limit);
        }
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $type = $type->orderBy($request->sort, $order);
        }
        $type = $type->leftJoin('insurance_classes AS class', DB::raw("JSON_CONTAINS(asset_types.insurance_classes,`class`.`id`)"), "=", DB::raw(1))
            ->select('asset_types.*', DB::raw("GROUP_CONCAT(`class`.`name`) AS classes"))
            ->groupBy('asset_types.id')
            ->get();
        $total = AssetType::count();
        return response()->json(compact('type', 'total'));
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
        $validator = Validator::make($input, ['name' => 'Required', 'unique_field' => 'Required', 'fields' => 'Required']);
        if ($validator->fails()) {
            $status = false;
            $error = $validator->errors();
        } else {
            $asset_type = AssetType::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'error', 'asset_type'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AssetType  $assetType
     * @return \Illuminate\Http\Response
     */
    public function show(AssetType $assetType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AssetType  $assetType
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AssetType  $assetType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $input = $request->all();
        $validator = Validator::make($input, ['name' => 'Required', 'unique_field' => 'Required', 'fields' => 'Required']);
        if ($validator->fails()) {
            $status = false;
            $error = $validator->errors();
        } else {
            $assetType = AssetType::findOrFail($id);
            $asset_type = $assetType->Update($input);
            $status = true;
        }

        return response()->json(compact('status', 'error', 'asset_type'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AssetType  $assetType
     * @return \Illuminate\Http\Response
     */
    public function destroy(AssetType $assetType)
    {
        //
    }


    public function typeByClass(Request $request)
    {
        if (!empty($request->insuranceclass)) {
            $ins = $request->insuranceclass;
            $assettype = AssetType::where(DB::raw("JSON_CONTAINS(insurance_classes,$ins)"), '=', DB::raw(1))->get();
        }

        return response()->json(compact('assettype'));
    }
}
