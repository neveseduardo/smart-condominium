<?php

use Illuminate\Support\Facades\Route;

Route::prefix('auth')->name('auth.')->namespace('API')->group(function () {
	Route::post('register', 'AuthController@register');
	Route::post('userLogin', 'AuthController@userLogin');
	Route::post('adminLogin', 'AuthController@adminLogin');
});

Route::namespace('API')->group(function () {
	Route::group(['middleware' => 'auth:api'], function () {
		Route::get('user', 'AuthController@getUser');
	});
	Route::group(['middleware' => 'auth:admin-api'], function () {
		Route::get('admin', 'AuthController@getAdmin');
	});
});
