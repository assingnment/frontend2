<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $requst)
    {
        $requst->validate([
            'name'=>'required',
            'email'=>'required|email',
            'password'=>'required|confirmed ',
        ]);

        $user = User::create([
            'name'=>$requst->name,
            'email'=>$requst->email,
            'password'=>Hash::make($requst->Haspassword),
        ]);

        $token =$user->createToken('mytoken')->plainTextToken;

        return response([
            'user'=>$user,
            'token'=>$token
        ],201);
    
    
    }
}
