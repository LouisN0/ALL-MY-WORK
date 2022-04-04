<?php

namespace App\Http\Controllers;

use App\Models\Equipe;
use App\Models\Joueur;
use Illuminate\Http\Request;

class EquipeController extends Controller
{
    //
    public function index()
    {
        $equipes = Equipe::all();
        return view("back.partials.header",compact("equipes"));
    }
    public function create()
    {
        return view("/back/equipes/create");
    }
    public function store(Request $request)
    {
        $equipe = new Equipe;
        $request->validate([
         'nom'=> 'required',
         'ville'=> 'required',
         'pays'=> 'required',
         'attaquants'=> 'required',
         'centraux'=> 'required',
         'defenseurs'=> 'required',
         'remplaçants'=> 'required',
         'max'=> 'required',
        ]); // store_validated_anchor;
        $equipe->nom = $request->nom;
        $equipe->ville = $request->ville;
        $equipe->pays = $request->pays;
        $equipe->attaquants = $request->attaquants;
        $equipe->nb_attaquants = 0;
        $equipe->centraux = $request->centraux;
        $equipe->nb_centraux = 0;
        $equipe->defenseurs = $request->defenseurs;
        $equipe->nb_defenseurs = 0;
        $equipe->remplaçants = $request->remplaçants;
        $equipe->nb_remplaçants = 0;
        $equipe->max = $request->max;
        $equipe->nb_max = 0;
        $equipe->save(); // store_anchor
        return redirect()->route("equipe.index")->with('message', "Successful storage !");
    }
    public function read($id)
    {   $joueurs = Joueur::all();
        $equipe = Equipe::find($id);
        return view("/back/equipes/read",compact("equipe","joueurs"));
    }
    public function edit($id)
    {
        $equipe = Equipe::find($id);
        return view("/back/equipes/edit",compact("equipe"));
    }
    public function update($id, Request $request)
    {
        $equipe = Equipe::find($id);
        $request->validate([
         'nom'=> 'required',
         'ville'=> 'required',
         'pays'=> 'required',
         'attaquants'=> 'required',
         'centraux'=> 'required',
         'defenseurs'=> 'required',
         'remplaçants'=> 'required',
         'max'=> 'required',
        ]); // update_validated_anchor;
        $equipe->nom = $request->nom;
        $equipe->ville = $request->ville;
        $equipe->pays = $request->pays;
        $equipe->attaquants = $request->attaquants;
        $equipe->centraux = $request->centraux;
        $equipe->defenseurs = $request->defenseurs;
        $equipe->remplaçants = $request->remplaçants;
        $equipe->max = $request->max;
        
        $equipe->save(); // update_anchor
        return redirect()->route("equipe.index")->with('message', "Successful update !");
    }
    public function destroy($id)
    {
        $equipe = Equipe::find($id);
        $equipe->delete();
        return redirect()->back()->with('message', "Successful delete !");
    }
}
