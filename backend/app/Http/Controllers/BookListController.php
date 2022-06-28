<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BookList;

class BookListController extends Controller
{ 
    public function getbooklist(){
        return response()->json(BookList::all(), 200);
  }

  public function getBooklistById($id) {
    $booklist = BookList::find($id);
    if(is_null($booklist)) {
        return response()->json(['message' => 'Book Not Found'], 404);
    }
    return response()->json($booklist::find($id), 200);
}

public function addBooklist(Request $request){
    $booklist = BookList::create($request->all());
    return response($booklist, 201);
}


public function updateBooklist(Request $request, $id) {
    $booklist = BookList::find($id);
    if(is_null($booklist)) {
        return response()->json(['message' => 'BookList Not Found'], 404);
    }
    $booklist->update($request->all());
    return response($booklist, 200);
}

public function deleteBooklist(Request $request, $id) {
    $booklist = BookList::find($id);
    if(is_null($booklist)) {
        return response()->json(['message' => 'BookList Not Found'], 404);
    }
    $booklist->delete();
    return response()->json(null, 204);
}

}