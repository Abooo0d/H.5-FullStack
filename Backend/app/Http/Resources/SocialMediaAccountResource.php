<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SocialMediaAccountResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      "instagram" => $this->instagram,
      "telegram" => $this->telegram,
      "whatsapp" => $this->whatsapp,
      "tiktok" => $this->tiktok,
    ];
  }
}