<?php

namespace App\Http\Controllers;

use App\Models\CartItemsModel;
use Illuminate\Http\Request;

class CartItemsController extends Controller
{
    public function addFood($data)
    {
        return CartItemsModel::addFood($data);
    }
}
