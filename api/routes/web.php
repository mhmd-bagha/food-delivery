<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FoodController;
use App\Http\Controllers\FoodCategoryController;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\CartController;
use \App\Http\Controllers\FavoriteController;

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

Route::prefix('api/')->group(function () {
    // the routes api on food
    Route::prefix('food')->group(function () {
        Route::post('/', [FoodController::class, 'getFood']);
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
// the routes cart
    Route::prefix('cart')->group(function () {
        Route::post('/add', [CartController::class, 'addFood']);
        Route::post('/get', [CartController::class, 'getCart']);
        Route::delete('/delete/cart-id/{cart_id}', [CartController::class, 'deleteFood']);
    });
// add/get favorite
    Route::prefix('favorites')->group(function () {
        Route::post('/', [FavoriteController::class, 'getFavorite']);
        Route::post('/add', [FavoriteController::class, 'addFavorite']);
    });
});
