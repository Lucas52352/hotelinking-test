<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oferta extends Model
{
  use HasFactory;

  protected $fillable = [
    'descripcion',
    'precio',
  ];

  // Relación: Una oferta tiene muchos códigos
  public function codigos()
  {
    return $this->hasMany(Codigo::class);
  }
}
