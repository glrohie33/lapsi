<?php

namespace App\Http\Controllers;

use App\AssetInsurance;
use App\Business;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BusinessController extends Controller
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
        $parent = DB::table('businesses');
        $businesses = DB::table('businesses')
            ->leftJoin('policies', 'businesses.policy_id', '=', 'policies.business_id')
            ->leftJoin('asset_insurances', 'businesses.id', '=', 'asset_insurances.business_id')
            ->leftJoin('agency', 'businesses.agency', '=', 'agency.id')
            ->leftJoin('insurance_classes', 'businesses.business_class', '=', 'insurance_classes.id')
            ->leftJoin('insurance_types', 'businesses.business_type', '=', 'insurance_types.id')
            ->offset($offset)->limit($request->limit);
        if ($request->sort != 'undefined') {
            $order = ($request->desc) ? 'desc' : 'asc';
            $businesses = $businesses->orderBy($request->sort, $order);
        }

        $businesses = $businesses->select('businesses.*', 'policies.id as policy', DB::raw("COUNT(`asset_insurances`.`id`) AS insured_assets"), 'agency.name as agency_name', 'insurance_classes.name as business_class_name', 'insurance_types.name as business_type_name')->groupBy('businesses.id', 'policies.id')->get();
        $total = Business::count();
        return response()->json(compact('businesses', 'total'));
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
        $rules = ['agency' => 'Required', 'insured_name' => 'required', 'insured_phone' => 'Required', 'insured_email' => 'Required', 'business_type' => 'Required', 'business_class' => 'Required', 'business_description' => 'Required', 'business_value' => 'Required', 'business_location' => 'Required', 'contact_name' => 'Required', 'contact_phone' => 'Required'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $business = Business::create($input);
            $assets = json_decode($input['assets'], true);
            foreach ($assets as $asset) {
                $input = ['business_id' => $business->id, 'insurance_class_id' => $business->business_class, 'asset_id' => $asset['id']];
                if (!empty($business->policy_id)) {
                    $input['policy_id'] = $business->policy_id;
                }
                AssetInsurance::create($input);
            }
            $status = true;
        }

        return response()->json(compact('errors', 'status'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function show(Business $business)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function edit(Business $business)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Business $business)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Business  $business
     * @return \Illuminate\Http\Response
     */
    public function destroy(Business $business)
    {
        //
    }
}
