<?php

namespace App\Http\Controllers;

use App\File;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $status = false;
        $user_id = $request->get('user_id');


        if (!empty($user_id)) {
            $user = User::findOrFail($user_id);
        } else {
            if (Auth::check()) {
                $user = Auth::user();
                $user_id = $user->id;
            }
        }

        if (!empty($user_id)) {
            if ($user->role_id == null) {
                $status = true;
                $files = $user->files;
            } else {
                $status = true;
                $files = File::with('user')->get();
            }
        }

        return response()->json(compact('status', 'files'));
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
        $status = false;
        $input = $request->all();
        $validator = Validator::make($input, ['user_id' => 'required', 'files' => 'required', 'files.*' => 'file|mimes:doc,pdf,docx,jpg,jpeg,png']);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            $files = [];

            if ($request->has('files')) {
                foreach ($request->file('files') as $file) {
                    switch ($file->extension()) {
                        case 'pdf':
                            $input['file_type'] = 'pdf';
                            break;
                        case 'doc':
                        case 'docx':
                            $input['file_type'] = 'document';
                            break;
                        case 'jpg':
                        case 'jpeg':
                        case 'png':
                            $input['file_type'] = 'image';
                            break;
                        default:
                            $input['file_type'] = 'other';
                            break;
                    }
                    $name = time() . $file->getClientOriginalName();
                    $base_url = App::make('url')->to('/') . "/";
                    $path = $file->move(public_path() . "/userfiles/", $name);
                    $input['url'] = $base_url . "public/userfiles/$name";
                    $input['filename'] = $file->getClientOriginalName();
                    $file = File::create($input);
                    $files[] = $file;
                }
                $status = true;
            }
        }
        return response()->json(compact('status', 'files'));
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
