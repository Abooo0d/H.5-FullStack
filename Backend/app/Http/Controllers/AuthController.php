<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use \App\Models\User;

class AuthController extends Controller
{
  public function login(LoginRequest $request)
  {
    $userData = $request->validated();
    if (!Auth::attempt($userData)) {
      return response([
        "error" => "Provided Data Are Not Correct!",
      ], 422);
    }
    /** @var User $user */
    $user = Auth::user();
    $token = $user->createToken('main')->plainTextToken;
    return response([
      "user" => $user,
      "token" => $token
    ]);
  }
  public function logout(Request $request)
  {
    /** @var User $user */
    $user = Auth::user();
    $user->currentAccessToken()->delete();
    return response(["success" => true]);
  }
  public function signup(SignupRequest $request)
  {
    /** @var User $user */
    $data = $request->validated();
    $user = User::create([
      "name" => $data["name"],
      "email" => $data["name"],
      "password" => bcrypt($data['password'])
    ]);
    $token = $user->createToken("main")->plainTextToken;
    return response(["user" => $user, "token" => $token]);
  }
}
