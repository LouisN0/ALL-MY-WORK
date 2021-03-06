<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class RoleController extends Controller
{
    //
    // public function __construct()
    // {
    //     // $this->middleware('role');
    //     $this->middleware('admin');
    // }
    public function index()
    {
        $roles = Role::all();
        return view("/back/roles/all",compact("roles"));
    }
    public function create()
    {
        return view("/back/roles/create");
    }
    public function store(Request $request)
    {
        
        $role = new Role;
        if(! Gate::allows('access-admin', $role)){
            return redirect()->route('role.index')->with('refuse', 'You are not allowed to create a role');
        }
        $request->validate([
         'role'=> 'required',
        ]); // store_validated_anchor;
        $role->role = $request->role;
        $role->save(); // store_anchor
        return redirect()->route("role.index")->with('message', "Successful storage !");
    }
    public function show($id)
    {
        $role = Role::find($id);
        return view("/back/roles/read",compact("role"));
    }
    public function edit($id)
    {
        $role = Role::find($id);
        return view("/back/roles/edit",compact("role"));
    }
    public function update($id, Request $request)
    {   
        $role = Role::find($id);
        if(! Gate::allows('access-admin', $role)){
            return redirect()->route('role.index')->with('refuse', 'You are not allowed to edit this role');
        }
        else{
            $request->validate([
         'role'=> 'required',
        ]); // update_validated_anchor;
        $role->role = $request->role;
        $role->save(); // update_anchor
        return redirect()->route("role.index")->with('message', "Successful update !");
        }
        
    }
    public function destroy($id)
    {
        $role = Role::find($id);
        $role->delete();
        return redirect()->back()->with('message', "Successful delete !");
    }
}
