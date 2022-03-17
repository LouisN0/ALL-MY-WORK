<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\View\View;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('/pages.backoffice.user', compact('users'));
    }
    public function create()
    {
        return view("/pages.backoffice.create.user-create");
    }
    public function store(Request $request)
    {   
        $validate = $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required',
            'password' => 'required',
            'photoProfile' => 'required',
            'role' => 'required',
        ]);

        $users = new User;
        $users->nom = $request->nom;
        $users->prenom = $request->prenom;
        $users->email = $request->email;
        $users->password = $request->password;
        $users->photoProfile = $request->photoProfile;
        $users->role = $request->role;
        $users->save();
        return redirect()->back();
    }
    public function show($id)
    {
        $users = User::find($id);
        return view('/pages.backoffice.show.user-show', compact('users'));
    }
    public function edit($id)
    {
        $users = User::find($id);
        return view('/pages.backoffice.edit.user-edit', compact('users'));
    }
    public function update($id, Request $request)
    {
        $users = User::find($id);
        $users->nom = $request->nom;
        $users->prenom = $request->prenom;
        $users->email = $request->email;
        $users->password = $request->password;
        $users->photoProfile = $request->photoProfile;
        $users->role = $request->role;
        $users->save();
        return redirect()->back();
    }
    public function destroy($id)
    {
        $users = User::find($id);
        $users->delete();
        return redirect()->back();
    }
}
