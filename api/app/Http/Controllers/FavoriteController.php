<?php

namespace App\Http\Controllers;

use App\Models\FavoriteModel;
use App\Models\FoodModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FavoriteController extends Controller
{
    protected array $messages;

    public function addFavorite(Request $request, FavoriteModel $model)
    {
        $data = Validator::make($request->post(), ['user_id' => 'required', 'food_id' => 'required']);
        // check data is validate or return error
        if ($data->fails()) {
            echo response()->json(['errors' => 'Submited data is incomplated', 'status' => 500])->getContent();
            exit();
        }
        $data = $data->validated();
        $existFavorite = $model->where('user_id', $data['user_id'])->where('food_id', $data['food_id']); // check exist favorite
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
        $user_id = Validator::make($request->post(), ['user_id' => 'required']);
        // check data is validate or return error
        if ($user_id->fails()) {
            echo response()->json(['errors' => 'Submited data is incomplated', 'status' => 500])->getContent();
            exit();
        }
        $user_id = $user_id->validated();
        $getFavorite = $model->where('user_id', $user_id);
        if ($getFavorite->exists()) {
            // get food
            foreach ($getFavorite->get() as $favorite) $getFood[] = FoodModel::find($favorite->food_id);
            $this->messages = ['data' => $getFood, 'status' => 200];
        } else $this->messages = ['message' => 'The food not exist favorite', 'status' => 500];
        echo response()->json($this->messages)->getContent(); // call response
    }
}
