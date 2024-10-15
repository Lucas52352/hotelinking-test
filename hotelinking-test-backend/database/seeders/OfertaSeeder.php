<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Oferta;

class OfertaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Crear 5 ofertas usando el modelo Oferta
        Oferta::create([
            'descripcion' => 'Oferta de verano',
            'precio' => 50.00,
        ]);

        Oferta::create([
            'descripcion' => 'Descuento en viajes',
            'precio' => 75.00,
        ]);

        Oferta::create([
            'descripcion' => 'Oferta en electrónica',
            'precio' => 100.00,
        ]);

        Oferta::create([
            'descripcion' => 'Descuento en moda',
            'precio' => 25.00,
        ]);

        Oferta::create([
            'descripcion' => 'Oferta especial en comida',
            'precio' => 10.00,
        ]);
    }
}
