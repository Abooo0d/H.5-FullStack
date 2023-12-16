<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', function (Request $request) {
    return $request->user();
  });
  Route::post("/logout", [AuthController::class, "logout"]);
});
Route::apiResource("/items", ItemController::class);
Route::get("/dashboard", [DashboardController::class, "index"]);
Route::post('/login', [AuthController::class, "login"]);
Route::post("/signup", [AuthController::class, "signup"]);