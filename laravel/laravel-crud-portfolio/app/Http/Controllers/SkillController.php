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
}
