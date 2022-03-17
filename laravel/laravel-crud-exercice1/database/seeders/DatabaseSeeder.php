<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Equipe;
use App\Models\User;
use App\Models\Voiture;
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
       User::factory()->count(20)->create();
       Voiture::factory()->count(5)->create();
       Equipe::factory()->count(30)->create();
       Article::factory()->count(40)->create();
    }
}
