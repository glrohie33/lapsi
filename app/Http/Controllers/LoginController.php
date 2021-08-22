<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Auth;
use Laravel\Passport\Client;
use phpDocumentor\Reflection\Types\Null_;
use App\services\Sms;

class LoginController extends Controller
{

    private $client;
    public function __construct()
    {
        $this->client = Client::find(2);
    }

    public function login(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, ['oracle_id' => 'required|not_in:0']);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
            return response()->json(compact('status', 'errors'));
        } else {
            $user = User::where('oracle', $request->oracle_id);
            if ($user->count() > 0) {
                $status = true;
                $user = $user->first();
                $pass = '';
                for ($i = 0; $i < 6; $i++) {
                    $pass .= mt_rand(0, 9);
                }
                $user->password = bcrypt($pass);
                $user->save();
                $number = "+234" . $user->phone;
                $sms = new Sms();
                $sms->sendSms($number, $pass);
                // $sms = sendToken($number, $user->surname, $pass);
                return response()->json(compact('status', 'user'));
            } else {
                $status = false;
                $errors['oracle_id'] = ['sorry your oracle id does not exist'];
                return response()->json(compact('status', 'errors'));
            }
        }
    }

    public function otp(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, ['oracle_id' => 'required|not_in:0', 'otp' => 'required|not_in:0']);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
            return response()->json(compact('status', 'errors'));
        } else {
            if (Auth::attempt(['oracle' => $request->oracle_id, 'password' => $request->otp])) {
                $user = User::where('oracle', '=', $request->oracle_id);
                $status = true;
                $user = $user->first();
                $token = "";
                $user->password = "";
                $user->save();
                $status = true;
                $bene = json_decode($user->beneficiaries, true);
                if (count($bene) == 0) {
                    $user_status = "incomplete";
                } else {
                    $user_status = "complete";
                    $token = $user->createToken('Access Token')->accessToken;
                }
                return response()->json(compact('status', 'user_status', 'token', 'user'));
            } else {
                $status = false;
                $errors['oracle_id'] = ['sorry your oracle id does not exist'];
                return response()->json(compact('status', 'errors'));
            }
        }
    }

    public function register(Request $request)
    {
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
                $token = "";
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
                    $checked = (bool) $request->signature;
                    if ($checked) {
                        $user = User::find($request->id);
                        $input['role_id'] = Null;
                        $user->update($input);
                        $token = $user->createToken('Access Token')->accessToken;
                        return response()->json(compact('status', 'token'));
                    } else {
                        $status = false;
                        $errors['agree'] = ['please check the agreement checkbox'];
                        return response()->json(compact('status', 'errors'));
                    }
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

    public function adminLogin(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, ['username' => 'required', 'password' => 'required']);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
            return response()->json(compact('status', 'errors'));
        } else {
            if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
                $user = Auth::User();
                $role = $user->role;
                $status = true;
                $token = $user->createToken('Access Token')->accessToken;
                return response()->json(compact('status', 'token', 'user'));
            } else {
                $status = false;
                $errors['login_error'] = ['invalid login details'];
                return response()->json(compact('status', 'errors'));
            }
        }
    }
}
