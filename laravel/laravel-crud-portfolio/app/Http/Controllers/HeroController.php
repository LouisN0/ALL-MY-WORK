<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    public function index()
    {
        $heros = Hero::all();
        return view('/pages.backoffice.backoffice', compact('heros'));
    }
}
