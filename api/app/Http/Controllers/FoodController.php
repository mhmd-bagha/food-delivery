<?php

namespace App\Http\Controllers;

use App\Models\FoodModel;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    // get foods from category
    public function foodsCategory($category, FoodModel $model)
    {
        $foods = $model->foodsCategory($category); // send category id and get food
        echo response()->json($foods)->getContent(); // return json food
    }
}
