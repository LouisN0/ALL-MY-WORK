<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PortfolioinfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-1.jpg',
            'nom' => "App 1",
            'filter' => 'filter-app'
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-2.jpg',
            'nom' =>  "Web 3",
            'filter' => 'filter-web',
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-3.jpg',
            'nom' =>  "App 2",
            'filter' => 'filter-app',
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-4.jpg',
            'nom' =>  "Card 2",
            'filter' => 'filter-card',
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-5.jpg',
            'nom' =>  "Web 2",
            'filter' => 'filter-web',
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-6.jpg',
            'nom' =>  "App 3",
            'filter' => 'filter-app',
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-7.jpg',
            'nom' =>  "Card 1",
            'filter' => 'filter-card',
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-8.jpg',
            'nom' =>  "Card 3",
            'filter' => 'filter-card',
        ]);
        DB::table('portfolioinfos')->insert([
            'img' => 'portfolio-9.jpg',
            'nom' => "Web 3",
            'filter' => 'filter-web',
        ]);
    }
}
