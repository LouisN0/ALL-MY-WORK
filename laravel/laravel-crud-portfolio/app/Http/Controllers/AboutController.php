<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Models\Aboutinfo;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $abouts = About::all();
        $aboutinfos = Aboutinfo::all();
        return view('/pages.backoffice.backoffice', compact('abouts','aboutinfos'));
    }
}
