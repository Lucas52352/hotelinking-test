<?php

namespace App\Http\Controllers;

use App\Models\Oferta;

class OfertaController extends Controller
{
    public function index()
    {
        $promotions = Oferta::all();

        return response()->json($promotions);
    }

    public function byId($id)
    {
        $promotion = Oferta::find($id);

        if (!$promotion) {
            return response()->json(['error' => 'Oferta no encontrada'], 404);
        }

        return response()->json($promotion);
    }
}
