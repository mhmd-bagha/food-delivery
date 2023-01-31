<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartModel extends Model
{
    use HasFactory;

    protected $table = 'cart';
    protected $fillable = ['food_id', 'food_count', 'user_id', 'status', 'ip', 'create_at', 'update_at'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';

    public function addFood($data)
    {
        return CartModel::create([
            'food_id' => $data['food_id'],
            'food_count' => $data['food_count'],
            'user_id' => $data['user_id'],
            'status' => $data['status'],
            'ip' => $data['ip'],
            'create_at' => $data['create_at'],
            'update_at' => null
        ]);
    }
}
