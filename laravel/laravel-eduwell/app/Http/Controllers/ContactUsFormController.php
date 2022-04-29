<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class ContactUsFormController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'message' => 'required',
        ]);

        $input = $request->all();

        Contact::create($input);

        Mail::send('emails.contactmail', array(
            'name' => $input['name'],
            'email' => $input['email'],
            'message' => $input['message'],
        ), function($message) use ($request) {
            $message->from($request->email);
            $message->to('admin@gmail.com', 'Admin')->subject('Contact Form Submission');
        });

        return redirect()->back()->with(['success', 'Your message has been sent successfully!']);
    }
}
