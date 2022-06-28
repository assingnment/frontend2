<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
USE App\Models\Contact;

class ContactController extends Controller
{
    public function storeContact(Request $request)
    {
        $request->validate([
            'first'=>'required',
            'last'=>'required',
            'email'=>'required|email',
            'mobile'=>'required',
            'massage'=>'required',
        ]);

        $contact = Contact::create([
            'first'=>$request->first,
            'last'=>$request->last,
            'email'=>$request->email,
            'mobile'=>$request->mobile,
            'massage'=>$request->massage,
            
        ]);

        return response($contact,201);
    }

    public function getContact()
    {
        return response()->json(Contact::all(),200);  
    }
}
