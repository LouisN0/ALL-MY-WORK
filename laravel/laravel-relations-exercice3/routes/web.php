<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\JoueurController;
use App\Http\Controllers\EquipeController;
use App\Models\Equipe;
use App\Models\Joueur;

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
    $equipes = Equipe::all();
    $joueurs = Joueur::all();
    return view('welcome', compact('equipes', 'joueurs'));
});

Route::get('/back', function () {
    return view('back.welcome');
});
// Equipe
Route::get('/back/equipes', [EquipeController::class, 'index'])->name('equipe.index');
Route::get('/back/equipes/create', [EquipeController::class, 'create'])->name('equipe.create');
Route::post('/back/equipes/store', [EquipeController::class, 'store'])->name('equipe.store');
Route::get('/back/equipes/{id}/read', [EquipeController::class, 'read'])->name('equipe.read');
Route::get('/back/equipes/{id}/edit', [EquipeController::class, 'edit'])->name('equipe.edit');
Route::post('/back/equipes/{id}/update', [EquipeController::class, 'update'])->name('equipe.update');
Route::post('/back/equipes/{id}/delete', [EquipeController::class, 'destroy'])->name('equipe.destroy');
// Joueur
Route::get('/back/joueurs', [JoueurController::class, 'index'])->name('joueur.index');
Route::get('/back/joueurs/create', [JoueurController::class, 'create'])->name('joueur.create');
Route::post('/back/joueurs/store', [JoueurController::class, 'store'])->name('joueur.store');
Route::get('/back/joueurs/{id}/read', [JoueurController::class, 'read'])->name('joueur.read');
Route::get('/back/joueurs/{id}/edit', [JoueurController::class, 'edit'])->name('joueur.edit');
Route::post('/back/joueurs/{id}/update', [JoueurController::class, 'update'])->name('joueur.update');
Route::post('/back/joueurs/{id}/delete', [JoueurController::class, 'destroy'])->name('joueur.destroy');
// Role
Route::get('/back/roles', [RoleController::class, 'index'])->name('role.index');
Route::get('/back/roles/create', [RoleController::class, 'create'])->name('role.create');
Route::post('/back/roles/store', [RoleController::class, 'store'])->name('role.store');
Route::get('/back/roles/{id}/read', [RoleController::class, 'read'])->name('role.read');
Route::get('/back/roles/{id}/edit', [RoleController::class, 'edit'])->name('role.edit');
Route::post('/back/roles/{id}/update', [RoleController::class, 'update'])->name('role.update');
Route::post('/back/roles/{id}/delete', [RoleController::class, 'destroy'])->name('role.destroy');

// Photo
Route::get('/back/photos', [PhotoController::class, 'index'])->name('photo.index');
Route::get('/back/photos/create', [PhotoController::class, 'create'])->name('photo.create');
Route::post('/back/photos/store', [PhotoController::class, 'store'])->name('photo.store');
Route::get('/back/photos/{id}/read', [PhotoController::class, 'read'])->name('photo.read');
Route::get('/back/photos/{id}/edit', [PhotoController::class, 'edit'])->name('photo.edit');
Route::post('/back/photos/{id}/update', [PhotoController::class, 'update'])->name('photo.update');
Route::post('/back/photos/{id}/delete', [PhotoController::class, 'destroy'])->name('photo.destroy');
