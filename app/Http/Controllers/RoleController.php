<?php

namespace App\Http\Controllers;

use App\Permission;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $roles = DB::table('roles');
        if (!empty($request->offset) && !empty($request->limit)) {
            $offset = ($request->page * $request->limit) - $request->limit;
            $roles = $roles->offset($offset)->limit($request->limit);
        }

        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $roles = $roles->orderBy($request->sort, $order);
        }

        $roles = $roles->get();
        $total = Role::count();
        return response()->json(compact('roles', 'total'));
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

    public function permissions()
    {
        $permissions = Permission::select('permission')->get();
        return response()->json(compact('permissions'));
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

        $validator = Validator::make($input, ['name' => 'required', 'permissions' => 'required']);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
            return response()->json(compact('status', 'errors'));
        } else {
            $slug = slug($request->name);
            $count = Role::where('slug', 'like', "%$slug%")->count();
            if ($count > 0) {
                $slug .= "_" . $count + 1;
            }
            $input['slug'] = $slug;
            Role::create($input);
            $status = true;
            return response()->json(compact('status', 'error'));
        }
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
