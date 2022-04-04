<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('equipes', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('ville');
            $table->string('pays');
            $table->integer('attaquants');
            $table->integer('nb_attaquants');
            $table->integer('centraux');
            $table->integer('nb_centraux');
            $table->integer('defenseurs');
            $table->integer('nb_defenseurs');
            $table->integer('remplaçants');
            $table->integer('nb_remplaçants');
            $table->integer('max');
            $table->integer('nb_max');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipes');
    }
};
