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

    //about
    
    public function edit($id)
    {   
        $abouts = About::find($id);
        return view('/pages.backoffice.edit.about-edit', compact('abouts'));
    }
    public function update($id, Request $request)
    {
        $abouts = About::find($id);
        $abouts->titre = $request->titre;
        $abouts->sstitre = $request->sstitre;
        $abouts->save();
        return redirect()->back();
    }
    

    //aboutinfo
    public function editinfo($id)
    {   
        $aboutinfos = Aboutinfo::find($id);
        return view('/pages.backoffice.edit.aboutinfo-edit', compact('aboutinfos'));
    }
    public function updateinfo($id, Request $request)
    {
        $aboutinfos = Aboutinfo::find($id);
        $aboutinfos->titre = $request->titre;
        $aboutinfos->texte = $request->texte;
        $aboutinfos->save();
        return redirect()->back();
    }
    
}
