<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Hash;

class StudentsController extends Controller
{
    public function getStudents()
    {
        return response()->json(Student::all(),200);  
    }

    public function getStudentsById($id)
    {
        $students = Student::find($id);
        if(is_null($students))
        {
            return response()->json(['massage' => 'Student not found'],404);
        }

        return response()->json($students::find($id), 200);
    }

    public function addStudent(Request $request)
    {
        $students = Student::create([
            'userid'=> $request->userid,
            'password' =>Hash::make($request->password),
        ]);
        return response($students, 201);
    }

    public function updateStudent(Request $request, $id )
    {
        $students = Student::find($id);
        if(is_null($students))
        {
            return response()->json(['massage' => 'Student not found'],404);
        }
         
         $students->update($request->all());
         return response($students, 200);
    }

    public function deleteStudent(Request $request, $id)
    {
        $students = Student::find($id);
        if(is_null($students))
        {
            return response()->json(['massage' => 'Student not found'],404);
        }
         
        $students->delete();
        return response()->json(null, 204);
    }
}