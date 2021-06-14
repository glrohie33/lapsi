<?php

namespace App\Http\Controllers;

use App\UnderwritersAllocation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Validator;

class UnderwritersAllocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $all = DB::table('underwriters_allocations')->leftJoin('insurance_classes', function ($join) {
            $join->on('underwriters_allocations.insurance_class_id', '=', 'insurance_classes.id');
        })->leftJoin('underwriters AS T', DB::raw(" `T`.`id` MEMBER OF(underwriters_allocations.underwriters)"), "=", DB::raw(1))
            ->leftJoin('underwriters_ranks as U', 'T.rank_id', '=', 'U.id')
            ->select('underwriters_allocations.id', 'underwriters_allocations.insurance_class_id', 'underwriters_allocations.underwriters_allocations', DB::raw("JSON_ARRAYAGG(JSON_OBJECT('id',`T`.`id`,'name',`T`.`registered_name`,'rank',`U`.`name`)) as underwriters_details"), 'insurance_classes.name as insurance_name')
            ->groupBy('underwriters_allocations.id')->get();
        return \response()->json($all);
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
        $rules = ['insurance_class' => 'Required', 'underwriter' => 'required'];
        $message = ['underwriter.required' => 'please select underwriters'];
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $status = false;
            $errors = $validator->errors();
        } else {
            if (count($request->insurance_class) > 0) {
                $perc = array_map(function ($val) {
                    return $val['perc'];
                }, $request->underwriter);
                $underwriters = array_map(function ($val) {
                    return $val['id'];
                }, $request->underwriter);
                $all = array_sum($perc);
                if ($all == 100) {
                    foreach ($request->insurance_class as $insurance) {
                        UnderwritersAllocation::updateOrCreate(['insurance_class_id' => $insurance], ['underwriters_allocations' => json_encode($request->underwriter), 'underwriters' => json_encode($underwriters)]);
                    }
                    $status = true;
                } else {
                    $status = false;
                    $errors['perc'] = "All allocated percentage must be a total of hundred";
                }
            }
        }

        return response()->json(compact('status', 'errors'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UnderwritersAllocation  $underwritersAllocation
     * @return \Illuminate\Http\Response
     */
    public function show(UnderwritersAllocation $underwritersAllocation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UnderwritersAllocation  $underwritersAllocation
     * @return \Illuminate\Http\Response
     */
    public function edit(UnderwritersAllocation $underwritersAllocation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UnderwritersAllocation  $underwritersAllocation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UnderwritersAllocation $underwritersAllocation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UnderwritersAllocation  $underwritersAllocation
     * @return \Illuminate\Http\Response
     */
    public function destroy(UnderwritersAllocation $underwritersAllocation)
    {
        //
    }
}
