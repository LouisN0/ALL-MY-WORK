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
}
