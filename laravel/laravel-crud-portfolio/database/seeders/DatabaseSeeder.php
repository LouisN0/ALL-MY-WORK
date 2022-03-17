<?php

namespace Database\Seeders;

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
        $this->call(AboutSeeder::class);
        $this->call(AboutinfoSeeder::class);
        $this->call(HeroSeeder::class);
        $this->call(FactSeeder::class);
        $this->call(FactinfoSeeder::class);
        $this->call(SkillSeeder::class);
        $this->call(SkillinfoSeeder::class);
        $this->call(PortfolioSeeder::class);
        $this->call(PortfolioinfoSeeder::class);
        $this->call(TestimonialSeeder::class);
        $this->call(TestimonialinfoSeeder::class);
        $this->call(ContactSeeder::class);
        $this->call(ContactinfoSeeder::class);
    }
}
