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
        Schema::create('foods', function (Blueprint $table) {
            $table->id();
            $table->string('food_name', 50);
            $table->string('food_image', 300);
            $table->string('food_information', 50);
            $table->string('food_description', 300);
            $table->string('food_materials', 150);
            $table->string('food_price', 10);
            $table->bigInteger('category_id');
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
        Schema::dropIfExists('foods');
    }
};
