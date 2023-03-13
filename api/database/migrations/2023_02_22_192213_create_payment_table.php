<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->index();
            $table->bigInteger('cart_id');
            $table->string('amount', 20);
            $table->enum('payment_type', ['paypal', 'google-play', 'credit-card']);
            $table->enum('status', ['paid', 'unpaid', 'pending']);
            $table->string('ip');
            $table->string('create_at', 20);
            $table->string('update_at', 20)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment');
    }
};
