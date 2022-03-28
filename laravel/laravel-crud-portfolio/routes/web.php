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

//edit
Route::get('/backoffice/edit/about-edit/{id}', [AboutController::class, 'edit'])->name("edit.about-edit");
Route::post('/backoffice/edit/about-update/{id}', [AboutController::class, 'update']);
Route::get('/backoffice/edit/aboutinfo-edit/{id}', [AboutController::class, 'editinfo'])->name("edit.aboutinfo-edit");
Route::post('/backoffice/edit/aboutinfo-update/{id}', [AboutController::class, 'updateinfo']);
Route::get('/backoffice/edit/hero-edit/{id}', [HeroController::class, 'edit'])->name("edit.hero-edit");
Route::post('/backoffice/edit/hero-update/{id}', [HeroController::class, 'update']);
Route::get('/backoffice/edit/fact-edit/{id}', [FactController::class, 'edit'])->name("edit.fact-edit");
Route::post('/backoffice/edit/fact-update/{id}', [FactController::class, 'update']);
Route::get('/backoffice/edit/factinfo-edit/{id}', [FactController::class, 'editinfo'])->name("edit.factinfo-edit");
Route::post('/backoffice/edit/factinfo-update/{id}', [FactController::class, 'updateinfo']);

Route::get('/backoffice/edit/skill-edit/{id}', [SkillController::class, 'edit'])->name("edit.skill-edit");
Route::post('/backoffice/edit/skill-update/{id}', [SkillController::class, 'update']);
Route::get('/backoffice/edit/skillinfo-edit/{id}', [SkillController::class, 'editinfo'])->name("edit.skillinfo-edit");
Route::post('/backoffice/edit/skillinfo-update/{id}', [SkillController::class, 'updateinfo']);
Route::get('/backoffice/edit/portfolio-edit/{id}', [PortfolioController::class, 'edit'])->name("edit.portfolio-edit");
Route::post('/backoffice/edit/portfolio-update/{id}', [PortfolioController::class, 'update']);
Route::get('/backoffice/edit/portfolioinfo-edit/{id}', [PortfolioController::class, 'editinfo'])->name("edit.portfolioinfo-edit");
Route::post('/backoffice/edit/portfolioinfo-update/{id}', [PortfolioController::class, 'updateinfo']);
Route::get('/backoffice/edit/testimonial-edit/{id}', [TestimonialController::class, 'edit'])->name("edit.testimonial-edit");
Route::post('/backoffice/edit/testimonial-update/{id}', [TestimonialController::class, 'update']);
Route::get('/backoffice/edit/testimonialinfo-edit/{id}', [TestimonialController::class, 'editinfo'])->name("edit.testimonialinfo-edit");
Route::post('/backoffice/edit/testimonialinfo-update/{id}', [TestimonialController::class, 'updateinfo']);
Route::get('/backoffice/edit/contact-edit/{id}', [ContactController::class, 'edit'])->name("edit.contact-edit");
Route::post('/backoffice/edit/contact-update/{id}', [ContactController::class, 'update']);

//destroy
Route::post('/backoffice/fact/{id}/delete', [FactController::class, 'destroy'])->name("fact.destroy");
Route::post('/backoffice/factinfo/{id}/delete', [FactController::class, 'destroyinfo'])->name("factinfo.destroy");
Route::post('/backoffice/skillinfo/{id}/delete', [SkillController::class, 'destroyinfo'])->name("skillinfo.destroy");
Route::post('/backoffice/portfolioinfo/{id}/delete', [portfolioController::class, 'destroyinfo'])->name("portfolioinfo.destroy");
Route::post('/backoffice/testimonialinfo/{id}/delete', [TestimonialController::class, 'destroyinfo'])->name("testimonialinfo.destroy");

//create
Route::get('/backoffice/create/fact-create', [FactController::class, "create"])->name('create.fact-create');
Route::post('/backoffice/create/fact-store', [FactController::class, "store"])->name('create.fact-store');
Route::get('/backoffice/create/factinfo-create', [FactController::class, "createinfo"])->name('create.factinfo-create');
Route::post('/backoffice/create/factinfo-store', [FactController::class, "storeinfo"])->name('create.factinfo-store');
Route::get('/backoffice/create/skillinfo-create', [SkillController::class, "createinfo"])->name('create.skillinfo-create');
Route::post('/backoffice/create/skillinfo-store', [SkillController::class, "storeinfo"])->name('create.skillinfo-store');
Route::get('/backoffice/create/portfolioinfo-create', [portfolioController::class, "createinfo"])->name('create.portfolioinfo-create');
Route::post('/backoffice/create/portfolioinfo-store', [portfolioController::class, "storeinfo"])->name('create.portfolioinfo-store');
Route::get('/backoffice/create/testimonialinfo-create', [TestimonialController::class, "createinfo"])->name('create.testimonialinfo-create');
Route::post('/backoffice/create/testimonialinfo-store', [TestimonialController::class, "storeinfo"])->name('create.testimonialinfo-store');

//show
Route::get('/backoffice/show/fact-show/{id}', [FactController::class, 'show'])->name("show.fact-show");
Route::get('/backoffice/show/factinfo-show/{id}', [FactController::class, 'showinfo'])->name("show.factinfo-show");
Route::get('/backoffice/show/skill-show/{id}', [SkillController::class, 'show'])->name("show.skill-show");
Route::get('/backoffice/show/skillinfo-show/{id}', [SkillController::class, 'showinfo'])->name("show.skillinfo-show");
Route::get('/backoffice/show/portfolio-show/{id}', [portfolioController::class, 'show'])->name("show.portfolio-show");
Route::get('/backoffice/show/portfolioinfo-show/{id}', [portfolioController::class, 'showinfo'])->name("show.portfolioinfo-show");
Route::get('/backoffice/show/testimonial-show/{id}', [TestimonialController::class, 'show'])->name("show.testimonial-show");
Route::get('/backoffice/show/testimonialinfo-show/{id}', [TestimonialController::class, 'showinfo'])->name("show.testimonialinfo-show");

Route::get('/backoffice/show/contact-show/{id}', [ContactController::class, 'show'])->name("show.contact-show");