<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('items', function (Blueprint $table) {
      $table->id();
      $table->string('name', 1000);
      $table->text('description')->nullable()->default(NULL);
      $table->text('images')->nullable()->default(null);
      $table->unsignedBigInteger('category_id');
      $table->string("price", 255);
      $table->tinyInteger("status")->nullable();
      $table->timestamp("expire_date")->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('items');
  }
};