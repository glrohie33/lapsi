<?php

namespace App\Http\Controllers;

use App\BrokerRank;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BrokerRankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $rank = DB::table('broker_ranks');
        if (!empty($request->page) && !empty($request->limit)) {
            $offset = ($request->page * $request->limit) - $request->limit;
            $rank = $rank->offset($offset)->limit($request->limit);
        }
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $rank = $rank->orderBy($request->sort, $order);
        }
        $rank = $rank->get();
        $total = BrokerRank::count();
        return response()->json(compact('rank', 'total'));
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
            $slug = slug($request->name);
            $count = BrokerRank::count();
            $input['rank'] = $count + 1;
            $name = BrokerRank::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BrokerRank  $brokerRank
     * @return \Illuminate\Http\Response
     */
    public function show(BrokerRank $brokerRank)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BrokerRank  $brokerRank
     * @return \Illuminate\Http\Response
     */
    public function edit(BrokerRank $brokerRank)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BrokerRank  $brokerRank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $input = $request->all();
        $rules = ['name' => 'Required'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $brokerRank = BrokerRank::findOrFail($id);
            $brokerRank->update($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BrokerRank  $brokerRank
     * @return \Illuminate\Http\Response
     */
    public function destroy(BrokerRank $brokerRank)
    {
        //
    }

    public function rankWithUser(Request $Request)
    {
        $rank = BrokerRank::findOrFail($Request->id);
        $brokers = $rank->brokers;
        $status = true;
        return \response()->json(compact('status', 'brokers'));
    }
}
