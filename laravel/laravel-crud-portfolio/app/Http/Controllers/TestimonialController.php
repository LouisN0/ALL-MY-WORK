<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use App\Models\Testimonialinfo;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::all();
        $testimonialinfos = Testimonialinfo::all();
        return view('/pages.backoffice.backoffice', compact('testimonials','testimonialinfos'));
    }
    public function edit($id)
    {   
        $testimonials = Testimonial::find($id);
        return view('/pages.backoffice.edit.testimonial-edit', compact('testimonials'));
    }
    public function update($id, Request $request)
    {
        $testimonials = Testimonial::find($id);
        $testimonials->titre = $request->titre;
        $testimonials->sstitre = $request->sstitre;
        $testimonials->save();
        return redirect()->back();
    }
    public function show($id)
    {
        $testimonials = Testimonial::find($id);
        return view('/pages.backoffice.show.testimonial-show', compact('testimonials'));
    }
    

    //testimonialinfo
    public function editinfo($id)
    {   
        $testimonialinfos = Testimonialinfo::find($id);
        return view('/pages.backoffice.edit.testimonialinfo-edit', compact('testimonialinfos'));
    }
    public function updateinfo($id, Request $request)
    {
        $testimonialinfos = Testimonialinfo::find($id);
        $testimonialinfos->texte = $request->texte;
        $testimonialinfos->img = $request->img;
        $testimonialinfos->nom = $request->nom;
        $testimonialinfos->role = $request->role;
        $testimonialinfos->save();
        return redirect()->back();
    }
    public function createinfo()
    {
        return view("/pages.backoffice.create.testimonialinfo-create");
    }
    public function storeinfo(Request $request)
    {   
        $validate = $request->validate([
            'texte' => 'required',
            'img' => 'required',
            'nom' => 'required',
            'role' => 'required',
        ]);

        $testimonialinfos = new Testimonialinfo;
        $testimonialinfos->texte = $request->texte;
        $testimonialinfos->img = $request->img;
        $testimonialinfos->nom = $request->nom;
        $testimonialinfos->role = $request->role;
        $testimonialinfos->save();
        return redirect()->back();
    }
    public function showinfo($id)
    {
        $testimonialinfos = Testimonialinfo::find($id);
        return view('/pages.backoffice.show.testimonialinfo-show', compact('testimonialinfos'));
    }
    public function destroyinfo($id)
    {
        $users = Testimonialinfo::find($id);
        $users->delete();
        return redirect()->back();
    }
}
