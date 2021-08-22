<?php

namespace App\Http\Controllers;

use App\Claim;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ClaimController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $offset = ($request->page * $request->limit) - $request->limit;
        $parent = DB::table('claims');
        $offset = ($request->page * $request->limit) - $request->limit;
        $claims = DB::table('claims')
            ->leftJoin('agency', 'claims.agency', '=', 'agency.id')
            ->leftJoin('policies', 'claims.policy_id', '=', 'policies.policy_number')
            ->leftJoin('asset_types', 'claims.asset_type', '=', "asset_types.id")
            ->leftJoin('insurance_classes', 'claims.claim_class', '=', 'insurance_classes.id')
            ->leftJoin('insurance_types', 'claims.claim_type', '=', 'insurance_types.id');
        if (!empty($offset) && $offset != 'undefined') {
            $claims = $claims->offset($offset)->limit($request->limit);
        }
        if (!empty($request->sort) && $request->sort != 'undefined') {
            $order = ($request->desc) ? 'desc' : 'asc';
            $claims = $claims->orderBy($request->sort, $order);
        }

        $claims = $claims->select('claims.*', 'policies.id as policy', 'agency.name as agency_name', 'insurance_classes.name as claim_class_name', 'insurance_types.name as claim_type_name', 'asset_types.name as asset_type_name')->groupBy('claims.id', 'policies.id')->get();
        $total = Claim::count();
        return response()->json(compact('claims', 'total'));
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
        $rules = ['agency' => 'Required', 'claimant_name' => 'required', 'claimant_phone' => 'Required', 'claimant_email' => 'Required', 'claim_type' => 'Required', 'claim_class' => 'Required', 'claim_description' => 'Required',  'contact_name' => 'Required', 'contact_phone' => 'Required', 'files' => 'Required'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $claim = Claim::create($input);
            $status = true;
        }

        return response()->json(compact('errors', 'status'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Claim  $claim
     * @return \Illuminate\Http\Response
     */
    public function show(Claim $claim)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Claim  $claim
     * @return \Illuminate\Http\Response
     */
    public function edit(Claim $claim)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Claim  $claim
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Claim $claim)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Claim  $claim
     * @return \Illuminate\Http\Response
     */
    public function destroy(Claim $claim)
    {
        //
    }
}
