<?php

namespace App\Http\Controllers;

use App\InsuranceClass;
use App\InsuranceType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class InsuranceClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $insuranceclass = DB::table('insurance_classes');
        if (!empty($request->page) && !empty($request->limit)) {
            $offset = ($request->page * $request->limit) - $request->limit;
            $insuranceclass = $insuranceclass->offset($offset)->limit($request->limit);
        }
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $insuranceclass = $insuranceclass->orderBy($request->sort, $order);
        }
        $insuranceclass = $insuranceclass
            ->leftJoin('insurance_types', 'insurance_types.id', "=", "insurance_classes.type")
            ->leftJoin('underwriters_allocations', 'insurance_classes.id', '=', 'underwriters_allocations.insurance_class_id')
            ->leftJoin('underwriters AS T', DB::raw("JSON_CONTAINS(underwriters_allocations.underwriters,`T`.`id`)"), "=", DB::raw(1))
            ->leftJoin('underwriters_ranks as U', 'T.rank_id', '=', 'U.id')
            ->select('insurance_classes.*', 'insurance_types.name as type_name', 'underwriters_allocations.id as allocation_id', 'underwriters_allocations.insurance_class_id', 'underwriters_allocations.underwriters_allocations', DB::raw("JSON_ARRAYAGG(JSON_OBJECT('id',`T`.`id`,'name',`T`.`registered_name`,'rank',`U`.`name`)) as underwriters_details"));
        if ($request->filter > -1) {
            if ($request->filter > 0) {
                $insuranceclass = $insuranceclass->whereNotNull('underwriters_allocations.id');
            } else {
                $insuranceclass = $insuranceclass->where('underwriters_allocations.id');
            }
        }

        $insuranceclass = $insuranceclass->groupBy('insurance_classes.id', 'underwriters_allocations.id')
            ->get();


        $total = InsuranceClass::count();
        return response()->json(compact('insuranceclass', 'total'));
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
        $rules = ['name' => 'Required', 'type' => "required", 'code' => "required"];
        $messages = ['type.required', 'Please select the type for insurance class', 'code.required' => 'insurance code is required'];
        $validator = Validator::make($input, $rules, $messages);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $input['code'] = strtoupper($input['code']);
            $name = InsuranceClass::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\InsuranceClass  $insuranceClass
     * @return \Illuminate\Http\Response
     */
    public function show(InsuranceClass $insuranceClass)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\InsuranceClass  $insuranceClass
     * @return \Illuminate\Http\Response
     */
    public function edit(InsuranceClass $insuranceClass)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\InsuranceClass  $insuranceClass
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        //
        $input = $request->all();
        $rules = ['name' => 'Required', 'type' => "required", 'code' => "required"];
        $messages = ['type.required', 'Please select the type for insurance class', 'code.required' => 'insurance code is required'];
        $validator = Validator::make($input, $rules, $messages);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            if ($class = InsuranceClass::find($id)) {
                $name = $class->update($input);
                $status = true;
            }
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\InsuranceClass  $insuranceClass
     * @return \Illuminate\Http\Response
     */
    public function destroy(InsuranceClass $insuranceClass)
    {
        //
    }
}
