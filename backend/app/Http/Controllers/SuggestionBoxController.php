<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Suggestionbox;

class SuggestionBoxController extends Controller
{
   
    public function getSuggestionboxs(){
        return response()->json(Suggestionbox::all(), 200);
  }

  public function getSuggestionboxsById($id) {
    $suggestionbox = Suggestionbox::find($id);
    if(is_null($suggestionbox)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    return response()->json($suggestionbox::find($id), 200);
}

public function addSuggestionbox(Request $request){
    $suggestionbox = Suggestionbox::create($request->all());
    return response($suggestionbox, 201);
}


public function deleteSuggestionbox(Request $request, $id) {
    $suggestionbox = Suggestionbox::find($id);
    if(is_null($suggestionbox)) {
        return response()->json(['message' => 'Details Not Found'], 404);
    }
    $suggestionbox->delete();
    return response()->json(null, 204);
}
}
