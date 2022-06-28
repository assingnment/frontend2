<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedbackstudent extends Model
{
    public $timestamps = false;
    protected $fillable = ['first_name','last_name','email','class','message'];
}
