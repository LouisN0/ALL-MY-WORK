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
    //fact
    
    public function edit($id)
    {   
        $facts = Fact::find($id);
        return view('/pages.backoffice.edit.fact-edit', compact('facts'));
    }
    public function update($id, Request $request)
    {
        $facts = Fact::find($id);
        $facts->titre = $request->titre;
        $facts->sstitre = $request->sstitre;
        $facts->save();
        return redirect()->back();
    }
    public function show($id)
    {
        $facts = Fact::find($id);
        return view('/pages.backoffice.show.fact-show', compact('facts'));
    }
    

    //factinfo
    public function editinfo($id)
    {   
        $factinfos = factinfo::find($id);
        return view('/pages.backoffice.edit.factinfo-edit', compact('factinfos'));
    }
    public function updateinfo($id, Request $request)
    {
        $factinfos = Factinfo::find($id);
        $factinfos->icone = $request->icone;
        $factinfos->nbrPersonnes = $request->nbrPersonnes;
        $factinfos->keyWord = $request->keyWord;
        $factinfos->texte = $request->texte;
        $factinfos->save();
        return redirect()->back();
    }
    public function createinfo()
    {
        return view("/pages.backoffice.create.factinfo-create");
    }
    public function storeinfo(Request $request)
    {   
        $validate = $request->validate([
            'icone' => 'required',
            'nbrPersonnes' => 'required',
            'keyWord' => 'required',
            'texte' => 'required',
        ]);

        $factinfos = new Factinfo;
        $factinfos->icone = $request->icone;
        $factinfos->nbrPersonnes = $request->nbrPersonnes;
        $factinfos->keyWord = $request->keyWord;
        $factinfos->texte = $request->texte;
        $factinfos->save();
        return redirect()->back();
    }
    public function showinfo($id)
    {
        $factinfos = Factinfo::find($id);
        return view('/pages.backoffice.show.factinfo-show', compact('factinfos'));
    }
    public function destroyinfo($id)
    {
        $users = Factinfo::find($id);
        $users->delete();
        return redirect()->back();
    }
}
