<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
  use HasFactory;
  protected $fillable = ["name", "price", "description", "status", "image", "category_id", "expire_date"];
}