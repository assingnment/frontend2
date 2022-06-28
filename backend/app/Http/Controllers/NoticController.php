<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notic;

class NoticController extends Controller
{
    public function getNotic(){
          return response()->json(Notic::all(), 200);
    }

    public function getNoticById($id) {
        $notic = Notic::find($id);
        if(is_null($notic)) {
            return response()->json(['message' => 'Notic Not Found'], 404);
        }
        return response()->json($notic::find($id), 200);
    }
   
    public function addNotic(Request $request){
           $notic = Notic::create($request->all());
           return response($notic, 201);
    }

    public function updateNotic(Request $request, $id) {
        $notic = Notic::find($id);
        if(is_null($notic)) {
            return response()->json(['message' => 'Notic Not Found'], 404);
        }
        $notic->update($request->all());
        return response($notic, 200);
    }

    public function deleteNotic(Request $request, $id) {
        $notic = Notic::find($id);
        if(is_null($notic)) {
            return response()->json(['message' => 'Notic Not Found'], 404);
        }
        $notic->delete();
        return response()->json(null, 204);
    }
}
