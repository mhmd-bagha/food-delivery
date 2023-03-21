<?php

namespace App\Http\Controllers;

use App\Models\CartModel;
use App\Models\PaymentModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class PaymentController extends Controller
{
    protected $message = [];
    const PAID_STATUS = 'paid';
    const UNPAID_STATUS = 'unpaid';
    const PENDING_STATUS = 'pending';

    public function add(Request $request, PaymentModel $model)
    {
        $token = JWTAuth::getToken();
        $user_id = JWTAuth::getPayload($token)->toArray()['sub']; // get user id

        $data = Validator::make($request->post(), [
            'payment_type' => 'required'
        ]);
        // check data is validate or return error
        if ($data->fails()) {
            echo response()->json(['errors' => 'Submited data is incomplated', 'status' => 500])->getContent();
            exit();
        }

        $getCart = CartModel::where('user_id', $user_id)->first();
        $cartId = $getCart->id;
        $totalAmount = $getCart->total_amount;

        $data = array_merge($data->validated(), ['cart_id' => $cartId, 'user_id' => $user_id, 'status' => self::PAID_STATUS, 'amount' => $totalAmount, 'ip' => $request->ip()]);

        if ($model->add($data)) {
            $getCart->update(['status' => self::PAID_STATUS]);
            $this->message = ['message' => 'The successful pay food', 'status' => 200];
        }
        else {
            $this->message = ['message' => 'The occurred in pay food', 'status' => 500];
        }

        echo response()->json($this->message)->getContent();
    }
}
