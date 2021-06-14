<?php

namespace App\Http\Controllers;

use App\AgencyType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AgencyTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
            $types = DB::table('agency_type');
            if (!empty($request->page) && !empty($request->limit)) {
                $offset = ($request->page * $request->limit) - $request->limit;
                $types = $types->offset($offset)->limit($request->limit);
            }
            if ($request->sort != 'undefined' && !empty($request->sort)) {
                $order = ($request->desc) ? 'desc' : 'asc';
                $types = $types->orderBy($request->sort, $order);
            }
            $types = $types->get();
            $total = AgencyType::count();
            return response()->json(compact('types', 'total'));
    }

    function agencyWithType()
    {
        $types = AgencyType::with('agencies')->get();
        return response()->json(compact('types', 'total'));
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
        $validator = Validator::make($input, ['name' => 'Required']);
        if ($validator->fails()) {
            $status = false;
            $error = $validator->errors();
        } else {
            $slug = slug($request->name);

            $count = AgencyType::where('slug', 'like', "%$slug%")->count();
            if ($count > 0) {
                $slug . "_" . $count + 1;
            }

            $input['slug'] = $slug;
            $agency_type = AgencyType::create($input);
            $status = true;
        }

        return response()->json(compact('status', 'error', 'agency_type'));
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
}
