<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItemsModel extends Model
{
    use HasFactory;

    protected $table = 'cart_items';
    protected $fillable = ['cart_id', 'user_id', 'food_id', 'food_count'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';

    public static function addFood($data)
    {
        return CartItemsModel::create($data);
    }
}
