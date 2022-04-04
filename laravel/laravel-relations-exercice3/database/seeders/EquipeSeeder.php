<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EquipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('equipes')->insert([
            'nom' => 'FC Milan',
            'ville' => 'Milan',
            'pays' => 'Espagne',
            'attaquants' => '1',
            'nb_attaquants' => '0',
            'centraux' => '1',
            'nb_centraux' => '0',
            'defenseurs' => '1',
            'nb_defenseurs' => '0',
            'remplaçants' => '3',
            'nb_remplaçants' => '0',
            'max' => '15',
            'nb_max' => '0',
        ]);
        DB::table('equipes')->insert([
            'nom' => 'FC Bruxelles',
            'ville' => 'Bruxelles',
            'pays' => 'Belgique',
            'attaquants' => '1',
            'nb_attaquants' => '0',
            'centraux' => '1',
            'nb_centraux' => '0',
            'defenseurs' => '1',
            'nb_defenseurs' => '0',
            'remplaçants' => '3',
            'nb_remplaçants' => '0',
            'max' => '15',
            'nb_max' => '0',
        ]);
        //
    }
}
