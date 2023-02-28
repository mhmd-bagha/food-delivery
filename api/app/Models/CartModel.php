<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CartModel extends Model
{
    use HasFactory;

    protected $table = 'cart';
    protected $fillable = ['user_id', 'coupon_id', 'total_amount', 'delivery_amount', 'taxation', 'status', 'ip'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';

    public function addCart($data)
    {
        return CartModel::create($data);
    }

    public function findCartAndUpdate($cart_id, $data)
    {
        return CartModel::find($cart_id)->update($data);
    }

    public function foods(): HasMany
    {
        return $this->hasMany(CartItemsModel::class, 'cart_id');
    }
}
