<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutinfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('aboutinfos')->insert([
            'titre' => "Birthday",
            'texte' => "1 May 1995",
        ]);
        DB::table('aboutinfos')->insert([
            'titre' => "Website",
            'texte' => "www.example.com",
        ]);
        DB::table('aboutinfos')->insert([
            'titre' => "phone",
            'texte' => "+123 456 7890",
        ]);
        DB::table('aboutinfos')->insert([
            'titre' => "City",
            'texte' => "New York, USA",
        ]);
        DB::table('aboutinfos')->insert([
            'titre' => "Age",
            'texte' => "30",
        ]);
        DB::table('aboutinfos')->insert([
            'titre' => "Degree",
            'texte' => "Master",
        ]);
        DB::table('aboutinfos')->insert([
            'titre' => "PhEmailone",
            'texte' => "email@example.com",
        ]);
        DB::table('aboutinfos')->insert([
            'titre' => "Freelance",
            'texte' => "Available",
        ]);
        
    }
}
