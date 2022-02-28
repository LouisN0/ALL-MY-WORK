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
    return 'Welcome';
});

Route::get('/hello', function () {
    return 'Bonjour chers utilisateurs';
});
Route::get('/home', function () {
    return 'Bienvenue sur mon site';
});
Route::get('/welcome', function () {
    return view('Welcome');  ;
});
Route::get('/about', function () {
    return view('about');  ;
});
Route::get('/{oui}', function ($oui) {
    return 'Hello ' . $oui  ;
});
