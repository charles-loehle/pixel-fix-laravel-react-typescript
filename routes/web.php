<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\CustomRegisterController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';

Route::get('/users', function () {
  return Inertia::render('Users/Index', [
    'name' => 'Charles',
    'company' => 'CL Web Development'
  ]);
});

// Custom registration form 
Route::get('/register', [CustomRegisterController::class, 'create']);
Route::post('/register', [CustomRegisterController::class, 'store']);
Route::get('/thankyou', function () {
  return Inertia::render('CustomAuth/Thankyou');
})->name('thankyou');