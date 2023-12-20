<?php

namespace App\Http\Controllers;

use App\Http\Resources\ItemResource;
use App\Models\Item;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Request;

class ItemController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    return ItemResource::collection(Item::latest("id")->paginate(10));
  }
  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreItemRequest $request)
  {
    $data = $request->validated();
    if ($request->file('selectedFile')) {
      $uploadedFile = $request->file('selectedFile');
      if ($uploadedFile) {
        $filename = Str::uuid() . '.' . $uploadedFile->getClientOriginalExtension();
        $absolutePath = public_path("/images");
        $relativePath = "images//" . $filename;
        if (!File::exists(($absolutePath))) {
          File::makeDirectory($absolutePath, 0755, true);
        }
        $uploadedFile->move($absolutePath, $filename);
      }
      $data["image"] = $relativePath;
    }
    /** @var Item $item */
    $item = Item::create($data);
    return new ItemResource($item);
  }
  /**
   * Show the form for creating a new resource.
   */
  public function show(Item $item, Request $request)
  {
    return new ItemResource($item);
  }
  /**
   * Display the specified resource.
   */
  /**
   * Show the form for editing the specified resource.
   */
  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateItemRequest $request, Item $item)
  {
    $data = $request->validated();
    if ($request->file('selectedFile')) {
      $uploadedFile = $request->file('selectedFile');
      if ($uploadedFile) {
        $filename = Str::uuid() . '.' . $uploadedFile->getClientOriginalExtension();
        $absolutePath = public_path("/images");
        $relativePath = "images//" . $filename;
        if (!File::exists(($absolutePath))) {
          File::makeDirectory($absolutePath, 0755, true);
        }
        $uploadedFile->move($absolutePath, $filename);
        $data["image"] = $relativePath;
      }
    }
    $item->update($data);
    return new ItemResource($item);
  }
  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Item $item, Request $request)
  {
    $item->delete();
    if ($item->image) {
      $absolutePath = public_path($item->image);
      File::delete($absolutePath);
      return response(["data" => "Success"]);
    }
  }
}