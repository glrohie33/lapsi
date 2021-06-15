<?php

namespace App\Http\Controllers;

use App\InsuranceClass;
use App\Policy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PolicyController extends Controller
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
        $parent = DB::table('policies');
        $policies = DB::table('policies')
            ->leftJoin('businesses', 'policies.business_id', '=', 'businesses.policy_id')
            ->offset($offset)->limit($request->limit);
        if ($request->sort != 'undefined') {
            $order = ($request->desc) ? 'desc' : 'asc';
            $policies = $policies->orderBy($request->sort, $order);
        }

        $policies = $policies->select('policies.*', 'businesses.id as business')->get();
        $total = Policy::count();
        return response()->json(compact('policies', 'total'));
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
        $rules = ['policy_number' => 'Required', 'premium' => 'required', 'insurance_class' => 'required', 'sum_insured' => 'required', 'start_date' => 'required', 'expiry_date' => 'required', 'underwriters' => 'required',];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $name = Policy::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function newPolicyNumber(Request $request)
    {
        $insurance_class = $request->insuranceclass;
        $policy_number = "";
        if (!empty($insurance_class) && $insurance_class > 0) {
            $insurance = InsuranceClass::find($insurance_class);
            if ($insurance) {
                $count = Policy::count();
                $pad_length = 2;
                $pad_char = 0;
                $count = str_pad($count + 1, $pad_length, $pad_char, STR_PAD_LEFT);
                $year = date('Y');
                $policy_number = $insurance->code . "/LA/" . $count . "/" . $year;
            }
        }

        return response()->json(compact('policy_number'));
    }
}
