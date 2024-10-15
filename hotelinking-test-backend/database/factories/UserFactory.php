<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(), // Genera un nombre aleatorio
            'email' => $this->faker->unique()->safeEmail(), // Genera un correo único
            'password' => Hash::make('password'), // Contraseña predeterminada (cifrada)
            'email_verified_at' => now(), // Marca la fecha de verificación como ahora
        ];
    }
}
