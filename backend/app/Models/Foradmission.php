<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foradmission extends Model
{
    public $timestamps = false;
    protected $fillable = ['fullname','email','pno','message'];
}
