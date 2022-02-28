<?php

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
    return view('welcome');
});
Route::get('/coding', function () {
    $prenoms = array('Louis', 'Alex', 'Jean');
    $personne = (object)[
        "nom" => "coding",
        "prenom" => "Louis",
        "age" => 25
    ];
    return view('pages.coding', compact('prenoms', 'personne'));
});
Route::get("/{variable}", function($variable){
    if ($variable === "about"){
        $phrase = 'bienvenu sur about';
        return view('pages.about', compact('phrase'));
    }
    else if($variable === "contact"){
        $nom = 'Louis';
        $prenom = 'Nollevaux';
        $age = 19;
        return view('pages.contact', compact('nom', 'prenom', 'age'));
    }
    else {
        return view('welcome');
    }
});


