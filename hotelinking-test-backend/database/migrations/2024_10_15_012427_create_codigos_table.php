<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('codigos', function (Blueprint $table) {
            $table->id();
            $table->string('codigo');
            $table->string('estado');
            $table->timestamp('used_in')->nullable(); // Fecha de uso
            $table->foreignId('oferta_id')->constrained('ofertas')->onDelete('cascade'); // Relación con ofertas
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Relación con usuarios
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('codigos');
    }
};
