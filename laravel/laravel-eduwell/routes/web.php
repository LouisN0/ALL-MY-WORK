<?php

use App\Http\Controllers\TitreController;
use App\Http\Controllers\RoleController;
use App\Models\Titre;
use App\Http\Controllers\TestimonialController;
use App\Models\Testimonial;
use App\Http\Controllers\ServiceController;
use App\Models\Service;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\ContactUsFormController;
use App\Http\Controllers\MapController;
use App\Http\Controllers\UserController;
use App\Models\Banner;
use App\Models\Map;
use App\Models\User;
use Illuminate\Support\Facades\Route;

use Cornford\Googlmapper\Facades\MapperFacade;

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
    $titres = Titre::all();
    $testimonials = Testimonial::all();
    $services = Service::all();
    $banners = Banner::all();
    $maps = Map::all();
    foreach ($titres as $titre) {
        $titre->description = str_replace("(","<em>", $titre->description);
        $titre->description = str_replace(")","</em>", $titre->description);
    }foreach ($banners as $banner) {
        $banner->soustitre = str_replace("(","<em>", $banner->soustitre);
        $banner->soustitre = str_replace(")","</em>", $banner->soustitre);
    }
    
    return view('welcome', compact('titres', 'testimonials', 'services','banners','maps'));
})->name("template");

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';


//pour changer le chemain du login, aller dans le fichier app/provider/RouteServiceProvider.php et changer la public const HOME = '/dashboard'; en public const HOME = '/chemain de la page';
Route::get("/admin", function () {
    $users = User::all();
	return view("back.admin", compact('users'));
})->middleware(['auth'])->name("back.index");

Route::get('/back/titres', [TitreController::class, 'index'])->name('titre.index');
Route::get('/back/titres/{id}/edit', [TitreController::class, 'edit'])->name('titre.edit');
Route::post('/back/titres/{id}/update', [TitreController::class, 'update'])->name('titre.update');

Route::resource('/back/testimonial', TestimonialController::class);
Route::post('/back/testimonial/{id}/publish', [TestimonialController::class, 'publish'])->name('testimonial.publish');
Route::post('/back/testimonial/{id}/unpublish', [TestimonialController::class, 'unpublish'])->name('testimonial.unpublish');

Route::resource('/back/service', ServiceController::class);

Route::get('/back/banners', [BannerController::class, 'index'])->name('banner.index');
Route::get('/back/banners/{id}/edit', [BannerController::class, 'edit'])->name('banner.edit');
Route::post('/back/banners/{id}/update', [BannerController::class, 'update'])->name('banner.update');

Route::get('/back/maps', [MapController::class, 'index'])->name('map.index')->middleware(['admin', 'webmaster']);
Route::get('/back/maps/{id}/edit', [MapController::class, 'edit'])->name('map.edit')->middleware(['admin', 'webmaster']);
Route::post('/back/maps/{id}/update', [MapController::class, 'update'])->name('map.update')->middleware(['admin', 'webmaster']);

Route::get('/back/users', [UserController::class, 'index'])->name('user.index');
Route::get('/back/users/create', [UserController::class, 'create'])->name('user.create');
Route::post('/back/users/store', [UserController::class, 'store'])->name('user.store');
Route::get('/back/users/{id}/show', [UserController::class, 'show'])->name('user.show');
Route::get('/back/users/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
Route::put('/back/users/{id}/update', [UserController::class, 'update'])->name('user.update');
Route::post('/back/users/{id}/delete', [UserController::class, 'destroy'])->name('user.destroy');
Route::get('/back/users/{id}/mail', [UserController::class, 'mail'])->name('mail');
// Role
Route::get('/back/roles', [RoleController::class, 'index'])->name('role.index');
Route::get('/back/roles/create', [RoleController::class, 'create'])->name('role.create');
Route::post('/back/roles/store', [RoleController::class, 'store'])->name('role.store');
Route::get('/back/roles/{id}/show', [RoleController::class, 'show'])->name('role.show');
Route::get('/back/roles/{id}/edit', [RoleController::class, 'edit'])->name('role.edit');
Route::post('/back/roles/{id}/update', [RoleController::class, 'update'])->name('role.update');
Route::post('/back/roles/{id}/delete', [RoleController::class, 'destroy'])->name('role.destroy');

//contactform
Route::get('/contact/store', [ContactUsFormController::class, 'email'])->name('plop');
