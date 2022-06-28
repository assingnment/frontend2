<?php

namespace App\Http\Controllers;
use App\Models\Teacherfeedback;

use Illuminate\Http\Request;

class TeacherFeedbackController extends Controller

{
    public function getTeacherfeedback(){
        return response()->json(Teacherfeedback::all(), 200);
    }

  public function getTeacherfeedbackById($id) {
    $teafeedback = Teacherfeedback::find($id);
     if(is_null($teafeedback)) {
        return response()->json(['message' => 'Details Not Found'], 404);
       }
    return response()->json($teafeedback::find($id), 200);
  }

public function addTeacherfeedback(Request $request){
    $teafeedback = Teacherfeedback::create($request->all());
    return response($teafeedback, 201);
}

public function deleteTeacherfeedback(Request $request, $id) {
    $teafeedback = Teacherfeedback::find($id);
    if(is_null($teafeedback)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    $teafeedback->delete();
    return response()->json(null, 204);
}


}

