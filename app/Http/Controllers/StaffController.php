<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $staffs = DB::table('users')->join('roles', function ($join) {
            $join->on('users.role_id', '=', 'roles.id');
        });
        if (!empty($request->offset) && !empty($request->limit)) {
            $offset = ($request->page * $request->limit) - $request->limit;
            $staffs = $staffs->offset($offset)->limit($request->limit);
        }

        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $staffs = $staffs->orderBy($request->sort, $order);
        }

        $staffs = $staffs->select('users.*', 'roles.name as rolename')->get();
        $total = User::count();
        return response()->json(compact('staffs', 'total'));
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
        $rules = ['surname' => 'required', 'firstname' => 'required', 'username' => 'required|unique:users', 'password' => 'required', 'confirm_password' => 'required|same:password'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $input['password'] = bcrypt($request->password);
            User::create($input);
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
        $staff = $staffs = DB::table('users')->join('roles', function ($join) {
            $join->on('users.role_id', '=', 'roles.id');
        })->where('users.id', $id)->get()->first();
        return response()->json(compact('staff'));
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
        $staff = User::findOrFail($id);
        $input = $request->all();
        $rules = ['surname' => 'required', 'firstname' => 'required', 'username' => 'required'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            if (!empty($request->password)) {
                $rules = ['confirm_password' => 'required|same:password'];
                $validator = Validator::make($input, $rules);
                if ($validator->fails()) {
                    $status = false;
                    $errors = $validator->errors();
                    return response()->json(compact('status', 'errors'));
                } else {
                    die($request->password);
                    // $input['password'] = bcrypt($request->password);
                }
            }
            $staff->update($input);
            $status = true;
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
    }
}
