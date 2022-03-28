<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\Skillinfo;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::all();
        $skillinfos = Skillinfo::all();
        return view('/pages.backoffice.backoffice', compact('skills','skillinfos'));
    }
    public function edit($id)
    {   
        $skills = Skill::find($id);
        return view('/pages.backoffice.edit.skill-edit', compact('skills'));
    }
    public function update($id, Request $request)
    {
        $skills = Skill::find($id);
        $skills->titre = $request->titre;
        $skills->sstitre = $request->sstitre;
        $skills->save();
        return redirect()->back();
    }
    public function show($id)
    {
        $skills = Skill::find($id);
        return view('/pages.backoffice.show.skill-show', compact('skills'));
    }
    

    //skillinfo
    public function editinfo($id)
    {   
        $skillinfos = Skillinfo::find($id);
        return view('/pages.backoffice.edit.skillinfo-edit', compact('skillinfos'));
    }
    public function updateinfo($id, Request $request)
    {
        $skillinfos = Skillinfo::find($id);
        $skillinfos->competance = $request->competance;
        $skillinfos->pourcentage = $request->pourcentage;
        $skillinfos->save();
        return redirect()->back();
    }
    public function createinfo()
    {
        return view("/pages.backoffice.create.skillinfo-create");
    }
    public function storeinfo(Request $request)
    {   
        $validate = $request->validate([
            'competance' => 'required',
            'pourcentage' => 'required',
        ]);

        $skillinfos = new Skillinfo;
        $skillinfos->competance = $request->competance;
        $skillinfos->pourcentage = $request->pourcentage;
        $skillinfos->save();
        return redirect()->back();
    }
    public function showinfo($id)
    {
        $skillinfos = Skillinfo::find($id);
        return view('/pages.backoffice.show.skillinfo-show', compact('skillinfos'));
    }
    public function destroyinfo($id)
    {
        $users = Skillinfo::find($id);
        $users->delete();
        return redirect()->back();
    }
}
