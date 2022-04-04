<?php

namespace App\Http\Controllers;

use App\Models\Equipe;
use App\Models\Joueur;
use App\Models\Photo;
use App\Models\Role;
use Illuminate\Http\Request;

class JoueurController extends Controller
{
    //
    public function index()
    {   
        $photo = Photo::all();
        $roles = Role::all();
        $equipes = Equipe::all();
        $joueurs = Joueur::all();
        return view("back.partials.header",compact("joueurs"));
    }
    public function create()
    {
        $photos = Photo::all();
        $roles = Role::all();
        $joueurs = Joueur::all();
        $equipes = Equipe::all();
        return view("/back/joueurs/create", compact("equipes","joueurs","roles"));
    }
    public function store(Request $request)
    {
        $joueur = new Joueur;
        $photo = new Photo;
        // $photo->img = $request->img
        $request->validate([
         'nom'=> 'required',
         'prenom'=> 'required',
         'age'=> 'required',
         'telephone'=> 'required',
         'mail'=> 'required',
         'genre'=> 'required',
         'pays'=> 'required',
         'role_id'=> 'required',
        ]); // store_validated_anchor;
        $joueur->nom = $request->nom;
        $joueur->prenom = $request->prenom;
        $joueur->age = $request->age;
        $joueur->telephone = $request->telephone;
        $joueur->mail = $request->mail;
        $joueur->genre = $request->genre;
        $joueur->pays = $request->pays;
        $joueur->role_id = $request->role_id;
        
        
        $equipe = Equipe::find($request->equipe_id);
        $equipe->nb_max = $equipe->nb_max + 1;
        if($request->role_id == 1){
            if($equipe->nb_attaquants === $equipe->attaquants){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of attaquants has been reached in that team !");
            }
            else{
                $equipe->nb_attaquants = $equipe->nb_attaquants + 1;
            }
        }
        if($request->role_id == 2){
            if($equipe->nb_centraux === $equipe->centraux){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of centraux has been reached in that team !");
            }
            else{
                $equipe->nb_centraux = $equipe->nb_centraux + 1;
            }
        }
        if($request->role_id == 3){
            if($equipe->nb_defenseurs === $equipe->defenseurs){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of defenseurs has been reached in that team !");
            }
            else{
                $equipe->nb_defenseurs = $equipe->nb_defenseurs + 1;
            }
        }
        if($request->role_id == 4){
            if($equipe->nb_remplaçants === $equipe->remplaçants){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of remplaçants has been reached !");
            }
            else{
                $equipe->nb_remplaçants = $equipe->nb_remplaçants + 1;
            }
        }
        $photo->img = $request->img->hashName();
        $request->img->storePublicly('img','public');
        $photo->save(); // store_anchor
        $joueur->equipe_id = $request->equipe_id;
        $joueur->photo_id = $photo->id;
        $equipe->save();
        $photo->save();
        $joueur->save(); // store_anchor
        return redirect()->route("joueur.index")->with('message', "Successful storage !");
    }
    public function read($id)
    {
        $joueur = Joueur::find($id);
        return view("/back/joueurs/read",compact("joueur"));
    }
    public function edit($id)
    {   
        $photo = Photo::all();
        $roles = Role::all();
        $equipes = Equipe::all();
        $joueur = Joueur::find($id);
        return view("/back/joueurs/edit",compact("joueur","roles","equipes"));
    }
    public function update($id, Request $request)
    {
        $photo = Photo::find($id);
        $joueur = Joueur::find($id);
        $request->validate([
         'nom'=> 'required',
         'prenom'=> 'required',
         'age'=> 'required',
         'telephone'=> 'required',
         'mail'=> 'required',
         'genre'=> 'required',
         'pays'=> 'required',
        ]); // update_validated_anchor;
        $joueur->nom = $request->nom;
        $joueur->prenom = $request->prenom;
        $joueur->age = $request->age;
        $joueur->telephone = $request->telephone;
        $joueur->mail = $request->mail;
        $joueur->genre = $request->genre;
        $joueur->pays = $request->pays;
        $joueur->role_id = $request->role_id;
        $joueur->equipe_id = $request->equipe_id;
        $equipe = Equipe::find($request->equipe_id);
        $equipe->nb_max = $equipe->nb_max + 1;
        if($request->role_id == 1){
            if($equipe->nb_attaquants === $equipe->attaquants){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of attaquants has been reached in that team !");
            }
            else{
                $equipe->nb_attaquants = $equipe->nb_attaquants + 1;
            }
        }
        if($request->role_id == 2){
            if($equipe->nb_centraux === $equipe->centraux){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of centraux has been reached in that team !");
            }
            else{
                $equipe->nb_centraux = $equipe->nb_centraux + 1;
            }
        }
        if($request->role_id == 3){
            if($equipe->nb_defenseurs === $equipe->defenseurs){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of defenseurs has been reached in that team !");
            }
            else{
                $equipe->nb_defenseurs = $equipe->nb_defenseurs + 1;
            }
        }
        if($request->role_id == 4){
            if($equipe->nb_remplaçants === $equipe->remplaçants){
                return redirect()->route("joueur.index")->with('warning', "The maximum number of remplaçants has been reached !");
            }
            else{
                $equipe->nb_remplaçants = $equipe->nb_remplaçants + 1;
            }
        }
        $photo->img = $request->img->hashName();
        $request->img->storePublicly('img','public');
        $photo->save(); // store_anchor
        $joueur->equipe_id = $request->equipe_id;
        $joueur->photo_id = $photo->id;
        $equipe->save();
        $joueur->save(); // update_anchor
        return redirect()->route("joueur.index")->with('message', "Successful update !");
    }
    public function destroy($id)
    {
        $joueur = Joueur::find($id);
        $equipe = Equipe::find($joueur->equipe_id);
        $equipe->nb_max = $equipe->nb_max - 1;
        if($joueur->role_id == 1){
            $equipe->nb_attaquants = $equipe->nb_attaquants - 1;
        }
        if($joueur->role_id == 2){
            $equipe->nb_centraux = $equipe->nb_centraux - 1;
        }
        if($joueur->role_id == 3){
            $equipe->nb_defenseurs = $equipe->nb_defenseurs - 1;
        }
        if($joueur->role_id == 4){
            $equipe->nb_remplaçants = $equipe->nb_remplaçants - 1;
        }
        $joueur->delete();
        return redirect()->back()->with('message', "Successful delete !");
    }
}
