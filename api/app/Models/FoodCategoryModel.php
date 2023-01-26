<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodCategoryModel extends Model
{
    use HasFactory;

    protected $table = 'food_category';
    protected $fillable = ['category_name', 'create_at'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';
}
