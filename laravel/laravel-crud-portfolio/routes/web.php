<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FactController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\TestimonialController;
use App\Models\About;
use App\Models\Aboutinfo;
use App\Models\Contact;
use App\Models\Contactinfo;
use App\Models\Fact;
use App\Models\Factinfo;
use App\Models\Hero;
use App\Models\Portfolio;
use App\Models\Portfolioinfo;
use App\Models\Skill;
use App\Models\Skillinfo;
use App\Models\Testimonial;
use App\Models\Testimonialinfo;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $abouts = About::all();
    $aboutinfos = Aboutinfo::all();
    $heros = Hero::all();
    $facts = Fact::all();
    $factinfos = Factinfo::all();
    $skills = Skill::all();
    $skillinfos = Skillinfo::all();
    $portfolios = Portfolio::all();
    $portfolioinfos = Portfolioinfo::all();
    $testimonials = Testimonial::all();
    $testimonialinfos = Testimonialinfo::all();
    $contacts = Contact::all();
    $contactinfos = Contactinfo::all();
    return view('welcome', compact('abouts', 'aboutinfos', 'heros', 'facts', 'factinfos','skills', 'skillinfos', 'portfolios', 'portfolioinfos', 'testimonials','testimonialinfos','contacts','contactinfos'));
});

Route::get('/backoffice', function () {
        return view('/pages.backoffice.backoffice');
});

Route::get('/backoffice/about', [AboutController::class, 'index'])->name("about.index");
Route::get('/backoffice/hero', [HeroController::class, 'index'])->name("hero.index");
Route::get('/backoffice/fact', [FactController::class, 'index'])->name("fact.index");
Route::get('/backoffice/skill', [SkillController::class, 'index'])->name("skill.index");
Route::get('/backoffice/portfolio', [PortfolioController::class, 'index'])->name("portfolio.index");
Route::get('/backoffice/testimonial', [TestimonialController::class, 'index'])->name("testimonial.index");
Route::get('/backoffice/contact', [ContactController::class, 'index'])->name("contact.index");