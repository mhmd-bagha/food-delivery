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
        FoodModel::create(['food_name' => 'sake roll', 'food_image' => 'https://www.freepnglogos.com/uploads/sushi-png/hosomaki-menu-planet-sushi-12.png', 'food_information' => json_encode(['cal' => 130, 'min' => '15-20', 'vote' => '6.9', 'g' => '450']), 'food_description' => Str::random(30), 'food_materials' => 'Kinoa, kani, avacoda', 'food_price' => '1410', 'category_id' => fake()->randomNumber(6)]);
    }
}
