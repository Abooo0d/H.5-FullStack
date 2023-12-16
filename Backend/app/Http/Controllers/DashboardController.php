<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItemResource;
use App\Models\Item;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
  public function index()
  {
    $totalItems = Item::query()->count();
    $latestItem = Item::query()->latest("id")->first();
    return response(["total" => $totalItems, "latest" => $latestItem ? new ItemResource($latestItem) : null]);
  }
}