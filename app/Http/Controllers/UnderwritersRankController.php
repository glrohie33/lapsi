<?php

namespace App\Http\Controllers;

use App\UnderwritersRank;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UnderwritersRankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $rank = DB::table('underwriters_ranks');
        if (!empty($request->page) && !empty($request->limit)) {
            $offset = ($request->page * $request->limit) - $request->limit;
            $rank = $rank->offset($offset)->limit($request->limit);
        }
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $rank = $rank->orderBy($request->sort, $order);
        }
        $rank = $rank->get();
        $total = UnderwritersRank::count();
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
            $count = UnderwritersRank::count();
            $input['rank'] = $count + 1;
            $name = UnderwritersRank::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UnderwritersRank  $underwritersRank
     * @return \Illuminate\Http\Response
     */
    public function show(UnderwritersRank $underwritersRank)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UnderwritersRank  $underwritersRank
     * @return \Illuminate\Http\Response
     */
    public function edit(UnderwritersRank $underwritersRank)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UnderwritersRank  $underwritersRank
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
            $brokerRank = UnderwritersRank::findOrFail($id);
            $brokerRank->update($input);
            $status = true;
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UnderwritersRank  $underwritersRank
     * @return \Illuminate\Http\Response
     */
    public function destroy(UnderwritersRank $underwritersRank)
    {
        //
    }


    public function rankWithUser(Request $Request)
    {
        $rank = UnderwritersRank::findOrFail($Request->id);
        $underwriters = $rank->underwriters;
        $status = true;
        return \response()->json(compact('status', 'underwriters'));
    }
}
