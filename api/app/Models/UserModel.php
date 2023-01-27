<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $fillable = ['first_name', 'last_name', 'phone_number', 'email', 'image', 'create_at', 'update_at'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';
}
