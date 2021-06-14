<?php

namespace App\Http\Controllers;

use App\Broker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class BrokerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        //
        $admin = Auth::User();

        $brokers = DB::table('brokers');


        if (!empty($request->search)) {
            $brokers =  $brokers->where('rc_number', 'like', "%$request->search%");
        }

        if (!empty($request->filter)) {
            $filter = $request->filter;
            if ($filter == 'verified') {
                $brokers = $brokers->where('status', 1);
            } else if ($filter == 'unverified') {
                $brokers = $brokers->where('status', 0);
            }
        }
        $rank = $request->rank;
        if ($rank > -1) {
            $brokers = $brokers->where('rank_id', $rank);
        }

        // if ($admin->agency_id != '[]') {
        //     $id = str_replace(['[', ']'], "", $admin->agency_id);

        //     $brokers = $brokers->where('agency_id', 'like', "%$id%");
        // }

        $total = $brokers->count();

        if (!empty($request->page) && !empty($request->limit)) {

            $offset = ($request->page * $request->limit) - $request->limit;
            $brokers = $brokers->offset($offset)->limit($request->limit);
        }
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $brokers = $brokers->orderBy($request->sort, $order);
        }
        $brokers =   $brokers->leftJoin('broker_ranks', 'brokers.rank_id', '=', 'broker_ranks.id')->select('brokers.*', 'broker_ranks.name as rank')->get();
        return response()->json(compact('brokers', 'total'));
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
        $rules = ['registered_name' => 'Required', 'rc_number' => 'required', 'city' => 'required', 'state' => 'required', 'address' => 'required', 'phone' => 'required', 'email' => 'required', 'ceo' => 'required'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            // $slug = slug($request->name);
            // $count = Agency::where('slug', 'like', "%$slug%")->count();
            // if ($count > 0) {
            //     $slug .= "_" . $count + 1;
            // }
            // $input['slug'] = $slug;
            $input['year'] = date('Y');
            $name = Broker::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function show(Broker $broker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function edit(Broker $broker)
    {
        //
    }

    public function assignRank(Request $request)
    {
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Broker $broker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function destroy(Broker $broker)
    {
        //
    }

    public function brokerChildren(Request $request)
    {
        $id = $request->id;
        if (!empty($id)) {
            $brokers = Broker::where('parent_id', $id)->get();
            $status = true;
        }

        return \response()->json(compact('status', 'brokers'));
    }

    public function addRank(Request $request)
    {

        if (Auth::check()) {
            $validator = Validator::make($request->all(), ['rank_id' => 'required|not_in:[]'], ['rank_id.required' => 'Please select the rank the user belongs to']);
            if ($validator->fails()) {
                $status = false;
            } else {
                $admin =  Auth::User();
                $name = "$admin->surname $admin->firstname $admin->middlename";
                $status = $request->status;
                $data = ['rank_id' => $request->rank_id, 'rel' => $request->rel];
                if (!empty($request->parent_id)) {
                    $data['parent_id'] = $request->parent_id;
                }
                DB::table('brokers')->whereIn('id', $request->brokers)->update($data);
                $status = true;
            }
            return response()->json(compact('status'));
        }
    }

    public function verifyBroker(Request $request)
    {
        if (Auth::check()) {
            $validator = Validator::make($request->all(), ['brokers' => 'required|not_in:[]']);
            if ($validator->fails()) {
                $status = false;
            } else {
                $admin =  Auth::User();
                $name = "$admin->surname $admin->firstname $admin->middlename";
                $status = $request->status;
                $data = ['status' => $status, 'verified_at' => date('Y-m-d H:i:s'), 'verified_by' => $name];
                DB::table('brokers')->whereIn('id', $request->brokers)->update($data);
                $status = true;
            }
            return response()->json(compact('status'));
        }
    }
}
