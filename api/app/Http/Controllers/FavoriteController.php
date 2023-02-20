<?php

namespace App\Http\Controllers;

use App\Models\FavoriteModel;
use App\Models\FoodModel;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class FavoriteController extends Controller
{
    protected array $messages;

    public function addFavorite(Request $request, FavoriteModel $model)
    {
        $token = JWTAuth::getToken();
        $user_id = JWTAuth::getPayload($token)->toArray()['sub']; // get user id

        $data = Validator::make($request->post(), ['food_id' => 'required']);
        // check data is validate or return error
        if ($data->fails()) {
            echo response()->json(['errors' => 'Submited data is incomplated', 'status' => 500])->getContent();
            exit();
        }
        $data = array_merge($data->validated(), ['user_id' => $user_id]);
        $existFavorite = $model->where('user_id', $user_id)->where('food_id', $data['food_id']); // check exist favorite
        if ($existFavorite->exists()) {
            echo response()->json(['errors' => 'already added', 'status' => 500])->getContent();
            exit();
        }
        $addFavorite = $model->addFavorite($data);
        ($addFavorite) ? $this->messages = ['message' => 'Food added successful', 'status' => 200] : $this->messages = ['message' => 'An error has occurred', 'status' => 500];
        echo response()->json($this->messages)->getContent(); // call response
    }

    public function getFavorite(Request $request, FavoriteModel $model)
    {
        $token = JWTAuth::getToken();
        $user_id = JWTAuth::getPayload($token)->toArray()['sub']; // get user id

        $getFavorite = $model->where('user_id', $user_id);
        if ($getFavorite->exists()) {
            // get food
            foreach ($getFavorite->get() as $favorite) {
                $getFood = FoodModel::find($favorite->food_id);
                Arr::add($getFood, 'favorite_id', $favorite->id); // add favorite id to api
                Arr::add($getFood, 'user_id', $user_id); // add user id to api
                $getFoods[] = $getFood;
            }
            $this->messages = ['data' => $getFoods, 'status' => 200];
        } else $this->messages = ['message' => 'The food not exist favorite', 'status' => 500];
        echo response()->json($this->messages)->getContent(); // call response
    }

    public function deleteFavorite(int $favoriteId, FavoriteModel $model)
    {
        // find favorite by id
        $favorite = $model->find($favoriteId);
        // check exist favorite
        if (!$favorite) {
            echo response()->json(['message' => "doesn't exist food favorite", 'status' => 500])->getContent();
            exit();
        }
        // delete favorite and return message successful delete/error delete
        ($favorite->delete()) ? $this->messages = ['message' => 'food favorite deleted successful', 'status' => 200] : $this->messages = ['message' => 'An error has occurred', 'status' => 500];
        echo response()->json($this->messages)->getContent(); // call response
    }
}
