<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodModel extends Model
{
    use HasFactory;

    protected $table = 'foods';
    protected $fillable = ['food_name', 'food_image', 'food_information', 'food_description', 'food_price', 'category_id'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';

    // get all foods from category id
    public function foodsCategory($category_id)
    {
        return FoodModel::where('category_id', $category_id)->get();
    }
}
