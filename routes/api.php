<?php

use Illuminate\Support\Facades\Route;

Route::prefix('auth')->name('auth.')->namespace('API')->middleware(['cors'])->group(function () {
	Route::post('register', 'AuthController@register');
	Route::post('userLogin', 'AuthController@userLogin');
	Route::post('adminLogin', 'AuthController@adminLogin');
});

Route::prefix('user')->namespace('API')->middleware(['cors', 'auth:api'])->group(function () {
	Route::get('/', 'AuthController@getUser');
});
Route::prefix('admin')->namespace('API')->middleware(['cors', 'auth:admin-api'])->group(function () {
	Route::get('/', 'AuthController@getAdmin');
});

Route::fallback(function(){
	return response()->json(['message' => 'Rota não encontrada.'], 404);
});
