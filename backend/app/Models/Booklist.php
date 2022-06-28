<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booklist extends Model
{
    public $timestamps = false;
    protected $fillable = ['book_name','author_name','image'];
}
