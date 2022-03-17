<?php

namespace App\Http\Controllers;

use App\Models\Fact;
use App\Models\Factinfo;
use Illuminate\Http\Request;

class FactController extends Controller
{
    public function index()
    {
        $facts = Fact::all();
        $factinfos = Factinfo::all();
        return view('/pages.backoffice.backoffice', compact('facts','factinfos'));
    }
}
