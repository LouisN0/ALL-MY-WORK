<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Contactinfo;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        $contactinfos = Contactinfo::all();
        return view('/pages.backoffice.backoffice', compact('contacts', 'contactinfos'));
    }
    public function edit($id)
    {   
        $contacts = Contact::find($id);
        return view('/pages.backoffice.edit.contact-edit', compact('contacts'));
    }
    public function update($id, Request $request)
    {
        $contacts = Contact::find($id);
        $contacts->titre = $request->titre;
        $contacts->sstitre = $request->sstitre;
        $contacts->save();
        return redirect()->back();
    }
    public function show($id)
    {
        $contacts = Contact::find($id);
        return view('/pages.backoffice.show.contact-show', compact('contacts'));
    }
    
}
