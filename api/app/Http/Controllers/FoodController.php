<?php

namespace App\Http\Controllers;

use App\Models\FoodModel;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    // get foods from category
    public function foodsCategory($category_id, FoodModel $model)
    {
        $foods = $model->foodsCategory($category_id); // send category id and get food
        echo response()->json($foods)->getContent(); // return json food
    }

    public function food($food_id, FoodModel $model)
    {
        $food = FoodModel::findOrFail($food_id);
        echo response()->json($food)->getContent();
    }
}
