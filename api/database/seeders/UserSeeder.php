<?php

namespace Database\Seeders;

use App\Models\UserModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserModel::create(['first_name' => fake()->firstName('male'), 'last_name' => fake()->lastName(), 'phone_number' => fake()->phoneNumber(), 'email' => fake()->email(), 'password' => fake()->password(), 'image' => 'https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960', 'create_at' => now(), 'update_at' => null]);
    }
}
