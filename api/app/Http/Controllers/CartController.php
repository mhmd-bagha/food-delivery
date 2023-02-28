<?php

namespace App\Http\Controllers;

use App\Models\CartItemsModel;
use App\Models\CartModel;
use App\Models\FoodModel;
use App\Models\UserModel;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class CartController extends Controller
{
    const WAIT_CART_STATUS = 'waiting';
    const PAID_CART_STATUS = 'paid';
    const UNPAID_CART_STATUS = 'unpaid';
    protected array $messages;

    public function addFood(Request $request, CartModel $model, CartItemsModel $cartItemsModel)
    {
        $token = JWTAuth::getToken();
        $user_id = JWTAuth::getPayload($token)->toArray()['sub']; // get user id

        $data = Validator::make($request->post(), [
            'food_id' => 'required',
            'food_count' => 'required',
        ]);
        // check data is validate or return error
        if ($data->fails()) {
            echo response()->json(['errors' => 'Submited data is incomplated', 'status' => 500])->getContent();
            exit();
        }
        $data = array_merge($data->validated(), ['user_id' => $user_id, 'status' => self::WAIT_CART_STATUS, 'ip' => $request->ip()]);

        // check the food not exist then call error
        if (!FoodModel::find($data['food_id'])) {
            echo response()->json(['errors' => 'The food not found', 'status' => 500])->getContent();
            exit();
        }

        $get_cart = $model->where('user_id', $user_id)->where('status', self::WAIT_CART_STATUS);
        if ($get_cart->exists()) {
            $get_cart_data = $get_cart->first();

            $total_amount_cart = $this->getPriceFood($data['food_id'], $data['food_count']) + $get_cart_data->total_amount;
            $data = array_merge($data, ['cart_id' => $get_cart_data->id, 'total_mount' => $total_amount_cart]);
            $get_food = $cartItemsModel->where('user_id', $user_id)->where('food_id', $data['food_id'])->where('cart_id', $data['cart_id']);

            $this->updateTotalPrice($data['cart_id'], $total_amount_cart);
            // check exist food in cart then add food to cart or add 1 count to food
            if ($get_food->exists()) {
                $newFoodCount = $data['food_count'] + $get_food->first()->food_count;
                $updateFood = $get_food->update(['food_count' => $newFoodCount]); // the update food count
                ($updateFood) ? $this->messages = ['message' => 'The food number incremented', 'status' => 200] : $this->messages = ['message' => 'An error has occurred', 'status' => 500];
            } else {
                $this->addFoodToCart($data);
            }

        } else {
            if (!$add_cart = $model->addCart($data)) {
                response()->json(['message' => 'An error has occurred', 'status' => 500])->getContent();
                exit();
            }
            $total_amount_cart = $this->getPriceFood($data['food_id'], $data['food_count']) + $add_cart->total_amount;
            $food_data = array_merge($data, ['cart_id' => $add_cart->id, 'total_amount' => $total_amount_cart]);
            $this->updateTotalPrice($food_data['cart_id'], $food_data['total_amount']);
            $this->addFoodToCart($food_data);
        }

        echo response()->json($this->messages)->getContent(); // call response
    }

    public function getCart(Request $request, CartModel $model)
    {
        $token = JWTAuth::getToken();
        $user_id = JWTAuth::getPayload($token)->toArray()['sub']; // get user id

        $get_cart = $model->where('user_id', $user_id)->where('status', self::WAIT_CART_STATUS)->first();
        $foods_information = [];

        if ($get_cart) {
            $totalPrice = $get_cart->total_amount;
            $cart_items = $get_cart->foods()->get()->toarray();
            // get food and add to array
            foreach ($cart_items as $cart_item):
                $get_food = FoodModel::find($cart_item['food_id'])->toArray();
                $foods_information[] = Arr::collapse([['cart' => $cart_item], $get_food]);
            endforeach;
            $this->messages = ['data' => $foods_information, 'totalPrice' => $totalPrice, 'status' => 200];
        } else
            $this->messages = ['message' => 'The empty cart', 'status' => 500];

        echo response()->json($this->messages)->getContent();
    }

    public function deleteFood($cartId, $foodId, CartModel $model, CartItemsModel $itemsModel)
    {
        $getCartItem = $itemsModel->where('food_id', $foodId)->where('cart_id', $cartId)->first();

        // check exist food cart
        if (!$getCartItem->exists()) {
            echo response()->json(['message' => 'An error is occurred', 'status' => 500])->getContent();
            exit();
        }

        $getCart = $model->find($cartId);
        $getFood = FoodModel::find($foodId);
        $cartCount = $getCartItem->count();
        $totalAmount = $getCart->total_amount - $getFood->food_price * $getCartItem->food_count;

        if ($getCartItem->delete()) {

            // delete column cart if cart equal 1
            if ($cartCount === 1) {
                $getCart->delete(); // delete cart
                echo response()->json(['message' => 'The delete food is successful', 'status' => 200])->getContent();
                exit();
            }

            $getCart->update(['total_amount' => $totalAmount]);

            $this->messages = ['message' => 'The delete food is successful', 'status' => 200];
        } else
            $this->messages = ['message' => 'An error is occurred', 'status' => 500]; // return response from deleted food cart


        echo response()->json($this->messages)->getContent(); // call response
    }

    protected function addFoodToCart($data)
    {
        $cartItemsController = new CartItemsController();
        $add_food = $cartItemsController->addFood($data);
        if ($add_food)
            $this->messages = ['message' => 'A food added', 'status' => 200];
        else
            $this->messages = ['message' => 'An error has occurred', 'status' => 500];
    }

    protected function getPriceFood(int $food_id, $food_count): float|int
    {
        return FoodModel::find($food_id)->food_price * $food_count;
    }

    protected function updateTotalPrice(int $cart_id, int $total_amount)
    {
        $cart_model = new CartModel();
        return $cart_model->findCartAndUpdate($cart_id, ['total_amount' => $total_amount]);
    }
}
