<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skillinfo extends Model
{
    use HasFactory;
    protected $table = "skillinfos";
    protected $guarded = ['*'];
}
