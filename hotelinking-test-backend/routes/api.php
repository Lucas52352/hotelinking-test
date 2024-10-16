<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CodeController;
use App\Http\Controllers\OfertaController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//AUTH ROUTES

Route::post('register', [AuthController::class, 'register']);

Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);


//USER ROUTES

Route::get('users', [UserController::class, 'index']);

Route::get('users/{id}', [UserController::class, 'byId']);

//PROMOTION ROUTES

Route::get('promotions', [OfertaController::class, 'index']);

Route::get('promotions/{id}', [OfertaController::class, 'byId']);

//CODE&PROMOTION ROUTE

Route::middleware('auth:sanctum')->post('promotions/{id}/generate-code', [CodeController::class, 'generateCode']);

Route::middleware('auth:sanctum')->get('user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->put('redeem-code/{codigoId}', [CodeController::class, 'redeemCode']);

Route::middleware('auth:sanctum')->get('my-codes', [CodeController::class, 'getMyCodes']);

Route::get('sanctum/csrf-cookie', function () {
    return response()->json(['message' => 'CSRF token set.']);
});
