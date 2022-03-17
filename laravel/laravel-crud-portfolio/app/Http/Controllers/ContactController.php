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
}
