<?php

use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', 'UserController@userdata');
Route::middleware('auth:api')->get('/actions', 'UserController@user_actions');

Route::resource('roles', 'RoleController');
Route::resource('agencies', 'AgencyController');
Route::resource('agencytypes', 'AgencyTypeController');
Route::resource('permissions', 'RoleController');
Route::resource('brokers', 'BrokerController');
Route::resource('underwriters', 'UnderwriterController');
Route::resource('staffs', 'StaffController');
Route::resource('files', 'FileController');
Route::resource('brokerrank', 'BrokerRankController');
Route::resource('underwriterrank', 'UnderwritersRankController');
Route::resource('brokersallocation', 'BrokersAllocationController');
Route::resource('underwritersallocation', 'UnderwritersAllocationController');
Route::resource('insurancetype', 'InsuranceTypeController');
Route::resource('assettype', 'AssetTypeController');
Route::resource('asset', 'AssetController');
Route::resource('policy', 'PolicyController');
Route::resource('business', 'BusinessController');
Route::resource('insuranceclass', 'InsuranceClassController');
Route::resource('claim', 'ClaimController');
Route::get('rolepermissions', 'RoleController@permissions');
Route::get('agency/types', 'AgencyController@agencyType');
Route::get('agencywithtype', 'AgencyTypeController@agencyWithType');
Route::post('userbyagency', 'UserController@userByAgency');
Route::get('agencyparents', 'AgencyController@parents');
Route::get('agencychildren', 'AgencyController@children');
Route::get('useragencies/{agency_id}', 'UserController@user_agencies');
Route::get('brokerrankusers', 'BrokerRankController@rankWithUser');
Route::get('brokerchildren', 'BrokerController@brokerChildren');
Route::get('underwriterrankusers', 'UnderwritersRankController@rankWithUser');
Route::get('underwriterchildren', 'UnderwriterController@underwriterChildren');
Route::post('user/addrole/{id}', 'UserController@addrole');
Route::get('policynumber', 'PolicyController@newPolicyNumber');
Route::get('assettypebyclass', 'AssetTypeController@typeByClass');
Route::post('claims/verify', 'ClaimController@verifyClaim');



Route::post('login', 'LoginController@login');
Route::post('adminlogin', 'LoginController@adminLogin');
Route::post('register', 'LoginController@register');
Route::post('otp', 'LoginController@otp');

Route::middleware(['auth:api'])->group(function () {
    Route::resource('users', 'UserController');
    Route::post('user/verify', 'UserController@verifyUsers');
    Route::post('broker/verify', 'BrokerController@verifyBroker');
    Route::post('broker/addrank', 'BrokerController@addRank');
    Route::post('underwriter/verify', 'UnderwriterController@verifyUnderwriter');
    Route::post('underwriter/addrank', 'UnderwriterController@addRank');
});
