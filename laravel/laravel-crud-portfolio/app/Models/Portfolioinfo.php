<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolioinfo extends Model
{
    use HasFactory;
    protected $table = "portfolioinfos";
    protected $guarded = ['*'];
}
