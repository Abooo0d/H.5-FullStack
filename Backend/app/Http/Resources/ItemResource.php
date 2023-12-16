<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class ItemResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      "id" => $this->id,
      "name" => $this->name,
      "description" => $this->description,
      "price" => $this->price,
      "image" => $this->image ? URL::to($this->image) : null,
      "created_at" => $this->created_at ? (string) $this->created_at->format("Y-m-d") : null,
      "updated_at" => $this->updated_at ? (string) $this->updated_at->format("Y-m-d") : null,
      'expire_date' => (new \DateTime($this->expire_date))->format('Y-m-d'),
    ];
  }
}