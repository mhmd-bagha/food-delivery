<?php

namespace App\Http\Controllers;

use App\Models\FoodCategoryModel;
use Illuminate\Http\Request;

class FoodCategoryController extends Controller
{
    // get foods from category
    public function getCategories(FoodCategoryModel $model)
    {
        $categories = FoodCategoryModel::all(); // get all categories
        echo response()->json($categories)->getContent(); // return json food
    }
}
