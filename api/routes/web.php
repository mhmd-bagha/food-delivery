<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FoodController;
use App\Http\Controllers\FoodCategoryController;
use \App\Http\Controllers\UserController;

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

// the routes api on food
Route::prefix('food')->group(function () {
    // get all foods from category
    Route::post('/category/{category}', [FoodController::class, 'foodsCategory']);
    // get all categories
    Route::post('/categories', [FoodCategoryController::class, 'getCategories']);
    // get data food
    Route::post('/get/{foodId}', [FoodController::class, 'food']);
});

// the routes user
Route::prefix('user')->group(function () {
    // login and signup
    Route::post('/login', [UserController::class, 'login']);
    Route::post('/signup', [UserController::class, 'signup']);
    // forgot password and change password
    Route::post('/forgot-password', [UserController::class, 'forgotPassword']);
    Route::post('/change-password', [UserController::class, 'changePassword']);
});
