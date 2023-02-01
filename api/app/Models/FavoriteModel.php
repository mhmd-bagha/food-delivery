<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteModel extends Model
{
    use HasFactory;

    protected $table = 'favorites';
    protected $fillable = ['user_id', 'food_id'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = null;

    public function addFavorite($data)
    {
        return FavoriteModel::create(['user_id' => $data['user_id'], 'food_id' => $data['food_id']]);
    }
}
