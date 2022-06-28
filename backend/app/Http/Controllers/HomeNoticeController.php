<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Homenotice;

class HomeNoticeController extends Controller
{
    public function getHomenotice(){
        return response()->json(Homenotice::all(), 200);
  }

  public function getHomenoticeById($id) {
    $homenotice = Homenotice::find($id);
    if(is_null($homenotice)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    return response()->json($homenotice::find($id), 200);
}

public function addHomenotice(Request $request){
    $homenotice = Homenotice::create($request->all());
    return response($homenotice, 201);
}

public function updateHomenotice(Request $request, $id) {
    $homenotice = Homenotice::find($id);
    if(is_null($homenotice)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    $homenotice->update($request->all());
    return response($homenotice, 200);
}

public function deleteHomenotice(Request $request, $id) {
    $homenotice = Homenotice::find($id);
    if(is_null($homenotice)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    $homenotice->delete();
    return response()->json(null, 204);
}
}
