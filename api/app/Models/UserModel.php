<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class UserModel extends Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $table = 'users';
    protected $fillable = ['full_name', 'phone_number', 'email', 'password', 'image', 'create_at', 'update_at', 'ip'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';

    public function signup($data)
    {
        $existUser = UserModel::where('email', $data['email'])->exists();
        // the check exist user then return callback false/create user
        return (!$existUser) ? UserModel::create([
            'full_name' => $data['full_name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'ip' => $data['ip'],
            'update_at' => null
        ]) : false;
    }

    public function changePassword($data)
    {
        $user = UserModel::where('email', $data['user']);
        switch ($user->exists()) {
            case true:
                return $user->update(['password' => $data['password']]);
                break;
            default:
                return false;
        }
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
