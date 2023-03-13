<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentModel extends Model
{
    use HasFactory;

    protected $table = 'payment';
    protected $fillable = ['user_id', 'cart_id', 'amount', 'payment_type', 'status', 'ip'];
    const CREATED_AT = 'create_at';
    const UPDATED_AT = 'update_at';

    public function add($data)
    {
        return Model::create($data);
    }
}
