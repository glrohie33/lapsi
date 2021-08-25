<?php

namespace App\Http\Controllers;

use App\Agency;
use App\Imports\UsersImport;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;

// use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
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

        $users = DB::table('users');


        if (!empty($request->search)) {
            $users =  $users->where('oracle', 'like', "%$request->search%");
        }

        if (!empty($request->filter)) {
            $filter = $request->filter;
            if ($filter == 'verified') {
                $users = $users->where('status', '1');
            } else if ($filter == 'unverified') {
                $users = $users->where('status', '0');
            }
        }

        if ($admin->agency_id != '[]') {
            $id = str_replace(['[', ']'], "", $admin->agency_id);

            $users = $users->where('agency_id', 'like', "%$id%");
        }

        $total = $users->where('role_id', '=', "0")->count();

        if (!empty($request->page) && !empty($request->limit)) {

            $offset = ($request->page * $request->limit) - $request->limit;
            $users = $users->offset($offset)->limit($request->limit);
        }
        if ($request->sort != 'undefined' && !empty($request->sort)) {
            $order = ($request->desc) ? 'desc' : 'asc';
            $users = $users->orderBy($request->sort, $order);
        }
        $users =   $users->where('role_id', '=', 0)->get();


        return response()->json(compact('users', 'total'));
    }

    public function userFiles()
    {
    }

    public function userByAgency(Request $request)
    {
        if (!empty($request->agencyids)) {

            $ids = $request->agencyids;
            $users = DB::table('users');
            $i = 0;
            while ($i < count($ids)) {
                if ($i > 0) {
                    $users =  $users->orWhere(DB::raw("JSON_CONTAINS(`agency_id`,$ids[$i])"), '1');
                } else {
                    $users =  $users->where(DB::raw("JSON_CONTAINS(`agency_id`,$ids[$i])"), '1');
                }
                $i++;
            }
            $users = $users->get();
            return response()->json(compact('users'));
        }
    }

    public function userdata()
    {

        if (Auth::check()) {
            $user = Auth::User();
            $role = $user->role;
            $status = true;
        } else {
            $status = false;
        }
        return response()->json(compact('status', 'user', 'role'));
    }

    public function user_actions(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $actions = DB::table('action_log')->join('users', 'users.id', '=', 'action_log.action_by')
                ->where('action_on', '=', $user->id);
            if (!empty($request->get('limit')) && !empty($request->get('limit')) > 0) {
                $actions = $actions->limit($request->get('limit'));
            }
            $actions = $actions->select('action_log.*', 'users.firstname as userfirstname', 'users.firstname as userlastname');
            $actions = $actions->get();

            return response()->json(compact('actions'));
        }
    }


    public function add_action(Request $request)
    {
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
        $validator = Validator::make($input, ['agency_id' => 'required|not_in:[]', 'nominal' => 'required|file|mimes:xlsx,xls,csv,txt']);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $path = $request->file('nominal')->getRealPath();
            $user_import = new UsersImport();
            $user_import->agency_id = $input['agency_id'];
            $data = Excel::import($user_import, $path);
            $status = true;
            // if ($data->count() > 0) {
            //     $arr_data = $data->toArray();
            //     var_dump($arr_data);
            // }
        }
        return response()->json(compact('status', 'errors'));
    }

    public function user_agencies($agency_id)
    {
        $agencies = Agency::wherein('id', json_decode($agency_id))->get();
        return response()->json(compact('agencies'));
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

    public function addrole(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $input = $request->all();
        $user->role_id = $request->role_id;
        $user->save();
        $status = true;
        return response()->json(compact('status'));
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
        $input = $request->all();
        $rules = [
            'title' => 'required',
            'surname' => 'required',
            'firstname' => 'required',
            'middlename' => 'required',
            'sex' => 'required',
            'phone' => 'required',
            'state' => 'required',
            'designation' => 'required',
            'grade' => 'required',
            'dateofbirth' => 'required',
            'dateof1stapp' => 'required',
            'dateofpreapp' => 'required',
            'dateoflastdep' => 'required',
            'beneficiaries' => 'required',
            'signature' => 'required|boolean'
        ];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
            return response()->json(compact('status', 'errors'));
        } else {

            $bene = json_decode($request->beneficiaries, true);
            if (count($bene) > 0) {
                $status = true;
                $errors = [];
                $sum = 0;
                $i = 0;
                foreach ($bene as $ben) {
                    if (empty($ben['name'])) {
                        $errors["bene" . $i . "name"] = "name field is needed";
                        $status = false;
                    }
                    if (empty($ben['perc'])) {
                        $errors["bene" . $i . 'perc'] = "Please set beneficiary percentage";
                        $status = false;
                    }
                    if (empty($ben['phone'])) {
                        $status = false;
                        $errors["bene" . $i . 'phone'] = "Please set beneficiary Phone number";
                    }
                    if (empty($ben['addr'])) {
                        $status = false;
                        $errors["bene" . $i . 'addr'] = "Please set beneficiary Address";
                    }
                    if (empty($ben['rel'])) {
                        $status = false;
                        $errors["bene" . $i . 'rel'] = "Please state your relationship with beneficiary";
                    }
                    $i++;
                    $sum += (float) $ben['perc'];
                }
                if ($sum > 100 || $sum < 100) {
                    $status = false;
                    $errors['perc'] = "The total of Percentage must be hundred";
                }
                if ($status) {
                    $user = User::find($id);
                    $beneficiaries = json_decode($user->beneficiaries, true);
                    $input['status'] = 0;
                    $user->update($input);
                    return response()->json(compact('status', 'user'));
                } else {
                    return response()->json(compact('status', 'errors'));
                }
            } else {
                $status = false;
                $errors['beneLength'] = ['please add beneficiaries'];
                return response()->json(compact('status', 'errors'));
            }
        }
    }

    public function verifyUsers(Request $request)
    {
        if (Auth::check()) {
            $validator = Validator::make($request->all(), ['users' => 'required|not_in:[]']);
            if ($validator->fails()) {
                $status = false;
            } else {
                $admin =  Auth::User();
                $name = "$admin->surname $admin->firstname $admin->middlename";
                $status = $request->status;
                $data = ['status' => $status, 'verified_at' => date('Y-m-d H:i:s'), 'verified_by' => $name];
                DB::table('users')->whereIn('id', $request->users)->update($data);
                $status = true;
            }
            return response()->json(compact('status'));
        }
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
