<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Foradmission;

class ForAdmissionController extends Controller
{
    public function getadmission(){
        return response()->json(Foradmission::all(), 200);
  }

  public function getAdmissionById($id) {
    $admission = Foradmission::find($id);
    if(is_null($admission)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    return response()->json($admission::find($id), 200);
}

public function addAdmission(Request $request){
    $admission = Foradmission::create($request->all());
    return response($admission, 201);
}

public function updateAdmission(Request $request, $id) {
    $admission = Foradmission::find($id);
    if(is_null($admission)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    $admission->update($request->all());
    return response($admission, 200);
}

public function deleteAdmission(Request $request, $id) {
    $admission = Foradmission::find($id);
    if(is_null($admission)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    $admission->delete();
    return response()->json(null, 204);
}

}
