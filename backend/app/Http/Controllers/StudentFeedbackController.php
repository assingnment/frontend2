<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedbackstudent;

class StudentFeedbackController extends Controller

{
    public function getstudentfeedback(){
        return response()->json(Feedbackstudent::all(), 200);
  }

  public function getStudentfeedbackById($id) {
    $feedbackstd = Feedbackstudent::find($id);
    if(is_null($feedbackstd)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    return response()->json($feedbackstd::find($id), 200);
}

public function addStudentfeedback(Request $request){
    $feedbackstd = Feedbackstudent::create($request->all());
    return response($feedbackstd, 201);
}

public function deleteStudentfeedback(Request $request, $id) {
    $feedbackstd = Feedbackstudent::find($id);
    if(is_null($feedbackstd)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    $feedbackstd->delete();
    return response()->json(null, 204);
}


}
