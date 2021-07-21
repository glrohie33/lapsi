<?php

namespace App\Http\Controllers;

use App\BrokersAllocation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrokersAllocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $rules = ['agencies' => 'Required', 'broker' => 'required'];
        $message = ['broker.required' => 'please select a broker'];
        $errors = "";
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            if (count($request->agencies) > 0) {
                foreach ($request->agencies as $agency) {
                    BrokersAllocation::updateOrCreate(['agency_id' => $agency], ['broker_id' => $request->broker]);
                }
            }
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BrokersAllocation  $brokersAllocation
     * @return \Illuminate\Http\Response
     */
    public function show(BrokersAllocation $brokersAllocation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BrokersAllocation  $brokersAllocation
     * @return \Illuminate\Http\Response
     */
    public function edit(BrokersAllocation $brokersAllocation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BrokersAllocation  $brokersAllocation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BrokersAllocation $brokersAllocation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BrokersAllocation  $brokersAllocation
     * @return \Illuminate\Http\Response
     */
    public function destroy(BrokersAllocation $brokersAllocation)
    {
        //
    }
}
