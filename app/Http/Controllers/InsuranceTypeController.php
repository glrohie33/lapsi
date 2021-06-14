<?php

namespace App\Http\Controllers;

use App\InsuranceType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class InsuranceTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $type = DB::table('insurance_types');
        if (!empty($request->page) && !empty($request->limit)) {
            $offset = ($request->page * $request->limit) - $request->limit;
            $type = $type->offset($offset)->limit($request->limit);
        }
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $type = $type->orderBy($request->sort, $order);
        }
        $type = $type->get();
        $total = InsuranceType::count();
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
        $rules = ['name' => 'Required'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $name = InsuranceType::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\InsuranceType  $insuranceType
     * @return \Illuminate\Http\Response
     */
    public function show(InsuranceType $insuranceType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\InsuranceType  $insuranceType
     * @return \Illuminate\Http\Response
     */
    public function edit(InsuranceType $insuranceType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\InsuranceType  $insuranceType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InsuranceType $insuranceType)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\InsuranceType  $insuranceType
     * @return \Illuminate\Http\Response
     */
    public function destroy(InsuranceType $insuranceType)
    {
        //
    }
}
