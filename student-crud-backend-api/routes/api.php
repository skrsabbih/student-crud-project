<?php

use App\Http\Controllers\API\StudentController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::apiResource('students', StudentController::class);