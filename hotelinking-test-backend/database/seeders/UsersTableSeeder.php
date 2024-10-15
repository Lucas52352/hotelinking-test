<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Usuario 1
        User::create([
            'name' => 'Usuario Prueba',
            'email' => 'usuario.prueba@example.com',
            'password' => Hash::make('password123'),
        ]);

        User::factory(4)->create();
    }
}
