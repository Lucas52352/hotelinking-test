<?php

namespace App\Http\Controllers;

use App\Models\Codigo;
use App\Models\Oferta;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class CodeController extends Controller
{

    public function generateCode(int $promotionId, Request $request)
    {
        $promotion = Oferta::findOrFail($promotionId);
        $promotionCode = Str::upper(Str::random(15));

        // Verificar si el usuario está autenticado
        Log::info('Auth check', ['user' => Auth::user(), 'user_id' => Auth::id()]);

        if (Auth::check()) {
            $user = $request->user();

            // Opcional: Verifica si el usuario existe en la base de datos

            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }

            // Crea el código promocional
            $code = Codigo::create([
                'codigo' => $promotionCode,
                'estado' => 'unused',
                'used_in' => null,
                'user_id' => $user->id,
                'oferta_id' => $promotion->id,
            ]);

            return response()->json([
                'message' => 'Promotion Code generated successfully',
                'code' => $code
            ], 201);
        }

        // Si no está autenticado
        return response()->json(['message' => 'User not authenticated'], 401);
    }

    public function redeemCode(Request $request, $codigoId)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'User not authenticated'], 401);
        }

        $codigo = Codigo::find($codigoId);

        Log::info('Redeeming code', ['codigoId' => $codigoId, 'codigo' => $codigo]);

        if (!$codigo) {
            return response()->json(['message' => 'Code not found'], 404);
        }

        if ($codigo->estado === 'redeemed') {
            return response()->json(['message' => 'Code already redeemed'], 400);
        }

        $codigo->estado = 'redeemed';
        $codigo->used_in = today();
        $codigo->save();

        return response()->json(['message' => 'Code redeemed successfully'], 200);
    }

    public function getMyCodes(Request $request)
    {
        $user = $request->user();

        $codes = $user->codigos;

        if ($codes->isEmpty()) {
            return response()->json(['message' => 'No codes found for this user'], 404);
        }

        return response()->json($codes, 200);
    }

}
