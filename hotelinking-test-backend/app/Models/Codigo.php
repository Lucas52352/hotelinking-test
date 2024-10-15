<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Codigo extends Model
{
  use HasFactory;
  
  protected $fillable = [
    'codigo',
    'estado',
    'used_in',
    'user_id',
    'oferta_id',
  ];

  // Relación: Un código pertenece a un usuario
  public function user()
  {
    return $this->belongsTo(User::class);
  }

  // Relación: Un código está asociado a una oferta
  public function oferta()
  {
    return $this->belongsTo(Oferta::class);
  }
}
