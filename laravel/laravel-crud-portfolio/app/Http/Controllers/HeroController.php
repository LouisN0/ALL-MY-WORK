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
    public function edit($id)
    {   
        $heros = Hero::find($id);
        return view('/pages.backoffice.edit.hero-edit', compact('heros'));
    }
    public function update($id, Request $request)
    {
        $heros = Hero::find($id);
        $heros->titre = $request->titre;
        $heros->attributs = $request->attributs;
        $heros->save();
        return redirect()->back();
    }
}
