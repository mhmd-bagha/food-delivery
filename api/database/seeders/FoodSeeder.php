<?php

namespace Database\Seeders;

use App\Models\FoodModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FoodModel::create(['food_name' => Str::random(10), 'food_image' => 'https://w7.pngwing.com/pngs/588/319/png-transparent-sushi-doughnut-japanese-cuisine-sushi-food-recipe-green-tea-thumbnail.png', 'food_information' => json_encode(['cal' => 130, 'min' => '15-20', 'vote' => '6.9', 'g' => '450']), 'food_description' => Str::random(30), 'food_price' => '1450', 'category_id' => fake()->randomNumber(6)]);
    }
}
