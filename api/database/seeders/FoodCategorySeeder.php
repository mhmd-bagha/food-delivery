<?php

namespace Database\Seeders;

use App\Models\FoodCategoryModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class FoodCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FoodCategoryModel::create(['category_name' => Str::random(10), 'create_at' => now()]);
    }
}
