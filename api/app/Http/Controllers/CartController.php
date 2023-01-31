<?php

namespace App\Http\Controllers;

use App\Models\CartModel;
use App\Models\FoodModel;
use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    const WAIT_CART_STATUS = 'waiting';
    const PAID_CART_STATUS = 'paid';
    const UNPAID_CART_STATUS = 'unpaid';
    protected array $messages;

    public function addFood(Request $request, CartModel $model)
    {
        $data = Validator::make($request->post(), [
            'food_id' => 'required',
            'food_count' => 'required',
            'user_id' => 'required',
        ]);
        // check data is validate or return error
        if ($data->fails()) {
            echo response()->json(['errors' => 'Submited data is incomplated', 'status' => 500])->getContent();
            exit();
        }
        // merge/update data added ip,status and time create
        $data = array_merge($data->validated(), ['status' => self::WAIT_CART_STATUS, 'ip' => $request->ip(), 'create_at' => now()]);
        // check the user not exist then call error
        if (!UserModel::find($data['user_id'])) {
            echo response()->json(['errors' => 'The user not found', 'status' => 500])->getContent();
            exit();
        }
        // check the food not exist then call error
        if (!FoodModel::find($data['food_id'])) {
            echo response()->json(['errors' => 'The food not found', 'status' => 500])->getContent();
            exit();
        }
        $getFood = $model->where('user_id', $data['user_id'])->where('food_id', $data['food_id'])->where('status', self::WAIT_CART_STATUS); // get food if exist
        switch ($getFood->exists()) {
            case true:
                $foodCount = $data['food_count'] + $getFood->first()->food_count;
                $updateFood = $getFood->update(['food_count' => $foodCount]); // the update food count
                ($updateFood) ? $this->messages = ['message' => 'The food number incremented', 'status' => 200] : $this->messages = ['message' => 'An error has occurred', 'status' => 500];
                break;
            default:
                $addFood = $model->addFood($data); // the add food
                ($addFood) ? $this->messages = ['message' => 'A food added', 'status' => 200] : $this->messages = ['message' => 'An error has occurred', 'status' => 500];
        }
        echo response()->json($this->messages)->getContent(); // call response
    }

    public function getCart(Request $request, CartModel $model)
    {
        $user_id = Validator::make($request->post(), ['user_id' => 'required']);
        // check data is validate or return error
        if ($user_id->fails()) {
            echo response()->json(['errors' => 'Submited data is incomplated', 'status' => 500])->getContent();
            exit();
        }
        $user_id = $user_id->validate()['user_id']; // get user id validated
        $cartFoods = $model->where('user_id', $user_id)->where('status', self::WAIT_CART_STATUS); // get cart isn't empty
        switch ($cartFoods->exists()) {
            case true:
                $totalPrice = 0; // default total price
                $getCartFoods = $cartFoods->get();
                // foreach for get total price
                foreach ($getCartFoods as $getCartFood):
                    $foodsPrice = FoodModel::find($getCartFood->food_id)->food_price;
                    $totalPrice += $foodsPrice;
                endforeach;
                $this->messages = ['data' => $getCartFoods, 'totalPrice' => $totalPrice, 'status' => 200]; // return data cart
                break;
            default:
                $this->messages = ['message' => 'The empty cart', 'status' => 500]; // return response empty cart
                break;
        }
        echo response()->json($this->messages)->getContent(); // call response
    }

    public function deleteFood(CartModel $model, $cart_id)
    {
        $getCart = $model->find($cart_id); // get food cart by cart id
        // check exist food cart then it deleted
        if ($getCart) {
            $deleteCart = $getCart->delete(); // delete food cart return true/false
            ($deleteCart) ? $this->messages = ['message' => 'The delete food is successful', 'status' => 200] : $this->messages = ['message' => 'An error is occurred', 'status' => 500]; // return response from deleted food cart
        } else $this->messages = ['message' => 'An error is occurred', 'status' => 500]; // call error for not exist food cart
        echo response()->json($this->messages)->getContent(); // call response
    }
}
