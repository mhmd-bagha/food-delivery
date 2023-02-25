<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\FoodController;
use App\Http\Controllers\FoodCategoryController;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\CartController;
use \App\Http\Controllers\FavoriteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// the routes api on food
Route::prefix('food')->group(function () {
    Route::post('/all', [FoodController::class, 'getFood']);
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
    Route::post('/user', [UserController::class, 'getUser']);
    Route::post('/refresh-token', [UserController::class, 'refreshToken'])->middleware('jwt.refresh');
});
// the routes cart
Route::prefix('cart')->group(function () {
    Route::post('/add', [CartController::class, 'addFood']);
    Route::post('/get', [CartController::class, 'getCart']);
    Route::delete('/delete/cart-id/{cart_id}', [CartController::class, 'deleteFood']);
})->middleware(['jwt.auth', 'auth:api']);
// add/get favorite
Route::prefix('favorites')->group(function () {
    Route::post('/', [FavoriteController::class, 'getFavorite']);
    Route::post('/add', [FavoriteController::class, 'addFavorite']);
    Route::delete('/delete/{favoriteId}', [FavoriteController::class, 'deleteFavorite']);
})->middleware(['jwt.auth', 'auth:api']);
