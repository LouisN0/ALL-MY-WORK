<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillinfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('skillinfos')->insert([
            'competance' => 'HTML',
            'pourcentage' => 100,
        ]);
        DB::table('skillinfos')->insert([
            'competance' => 'CSS',
            'pourcentage' => 90,
        ]);
        DB::table('skillinfos')->insert([
            'competance' => 'JAVASCRIPT',
            'pourcentage' => 75,
        ]);
        DB::table('skillinfos')->insert([
            'competance' => 'PHP',
            'pourcentage' => 80,
        ]);
        DB::table('skillinfos')->insert([
            'competance' => 'WORDPRESS/CMS',
            'pourcentage' => 90,
        ]);
        DB::table('skillinfos')->insert([
            'competance' => 'PHOTOSHOP',
            'pourcentage' => 55,
        ]);
    }
}
