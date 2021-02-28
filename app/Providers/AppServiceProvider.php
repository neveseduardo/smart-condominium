<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{
		//
	}

	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{
		if (config('app.env') === 'production') {
			config()->set('database.default', 'pgsql');
            \URL::forceScheme('https');
        }
		Schema::defaultStringLength(191);
	}
}
