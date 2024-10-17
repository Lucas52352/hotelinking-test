<?php

// namespace Tests\Feature;

// use App\Models\User;
// use App\Models\Oferta;
// use Illuminate\Foundation\Testing\RefreshDatabase;
// use Tests\TestCase;
// use Illuminate\Support\Facades\Hash;


// class GenerateCodeTest extends TestCase
// {
//   use RefreshDatabase;

//   public function testGeneratedCodeStructure()
//   {
//     $promotion = Oferta::create([
//       'descripcion' => 'Descuento en Hotel Playa',
//       'precio' => 99.99,
//     ]);

//     $user = User::create([
//       'name' => 'Usuario Prueba',
//       'email' => 'usuario.prueba@example.com',
//       'password' => Hash::make('password123'),
//     ]);

//     $this->actingAs($user);

//     $response = $this->postJson('/api/promotions/' . $promotion->id . '/generate-code');

//     $response->assertStatus(201)
//       ->assertJsonStructure([
//         'code' => [
//           'codigo',
//           'estado',
//           'used_in',
//           'user_id',
//           'oferta_id',
//         ]
//       ]);
//   }
// }
