<?php

namespace App\Http\Controllers;

use App\Agency;
use App\AgencyType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Mockery\Undefined;

class AgencyController extends Controller
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
        $parent = DB::table('agency');
        $agencies = DB::table('agency')
            ->leftJoin('agency_type', 'agency_type.id', '=', 'agency.agency_type')
            ->leftJoin('brokers_allocations', 'agency.id', '=', 'brokers_allocations.agency_id')
            ->leftJoin('brokers', 'brokers_allocations.broker_id', '=', 'brokers.id')
            ->leftjoinSub($parent, 'parent', function ($join) {
                $join->on('agency.parent_id', 'parent.id');
            })->offset($offset)->limit($request->limit);
        if ($request->sort != 'undefined') {
            $order = ($request->desc) ? 'desc' : 'asc';
            $roles = $agencies->orderBy($request->sort, $order);
        }

        $agencies = $agencies->select('agency.*', 'agency_type.name as agencytype', 'parent.name as parent', 'brokers.id as broker_id', 'brokers.registered_name')->get();
        $total = Agency::count();
        return response()->json(compact('agencies', 'total'));
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

    public function agencyType()
    {
        $types = AgencyType::select('id', 'name')->get();
        return response()->json(compact('types'));
    }

    public function parents()
    {
        $parents = Agency::select('id', 'name')->get();
        return response()->json(compact('parents'));
    }

    public function children(Request $request)
    {
        $agency = DB::table('agency');
        if ($request->parent_id != 'undefined' && !empty($request->parent_id)) {
            $agency = $agency->where('parent_id', '=', $request->parent_id);
        } else {
            $agency = $agency->where('parent_id', '=', 0);
        }
        $agencies = $agency->get();
        return response()->json(compact('agencies'));
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
        $errors = "";
        $rules = ['name' => 'Required', 'agency_type' => 'required', 'phone' => 'Required', 'email' => 'Required'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $slug = slug($request->name);
            $count = Agency::where('slug', 'like', "%$slug%")->count();
            if ($count > 0) {
                $slug .= "_" . $count + 1;
            }
            $input['slug'] = $slug;
            $name = Agency::create($input);
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
        $agency = Agency::find($id);
        if ($agency) {
            $input = $request->all();
            $rules = ['name' => 'Required', 'agency_type' => 'required', 'phone' => 'required', 'email' => 'required'];

            $validator = Validator::make($input, $rules);
            if ($validator->fails()) {
                $status = false;
                $errors = $validator->errors();
            } else {
                if ($agency->name != $request->name) {
                    $slug = slug($request->name);
                    $count = Agency::where('slug', 'like', "%$slug%")->count();
                    if ($count > 0) {
                        $slug .= "_" . $count + 1;
                    }
                    $input['slug'] = $slug;
                }

                $name = $agency->update($input);
                $status = true;
            }
        } else {
            $status = false;
            $errors['response'] = 'Agency does not exist';
        }


        return response()->json(compact('status', 'errors'));
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
        $agency = Agency::find($id);
        if ($agency) {
            $agency->delete();
            $status = true;
        } else {
            $status = false;
            $errors['response'] = 'Agency does not exist';
        }
        return response()->json(compact('status', 'errors'));
    }
}
