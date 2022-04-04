<?php

namespace Database\Seeders;

use App\Models\Joueur;
use App\Models\Photo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            EquipeSeeder::class,
            RoleSeeder::class,
        ]);
        Photo::factory(4)->create();
        Joueur::factory(10)->create();
        
    }
}
