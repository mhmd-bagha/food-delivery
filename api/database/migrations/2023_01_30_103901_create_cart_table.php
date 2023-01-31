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
        Schema::create('cart', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('food_id');
            $table->string('food_count', 10);
            $table->bigInteger('user_id');
            $table->enum('status', ['waiting', 'paid', 'unpaid']);
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
        Schema::dropIfExists('cart');
    }
};
