<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FoodController;
use App\Http\Controllers\FoodCategoryController;

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
    Route::get('/category/{category}', [FoodController::class, 'foodsCategory']);
    // get all categories
    Route::get('/categories', [FoodCategoryController::class, 'getCategories']);
});
