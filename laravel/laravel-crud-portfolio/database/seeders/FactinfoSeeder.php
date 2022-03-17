<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FactinfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('factinfos')->insert([
            'icone' => 'bi-emoji-smile',
            'nbrPersonnes' => 232,
            'keyWord' => "Happy Clients",
            'texte' => ' consequuntur quae',
        ]);
        DB::table('factinfos')->insert([
            'icone' => 'bi-journal-richtext',
            'nbrPersonnes' => 521,
            'keyWord' => "Projects",
            'texte' => ' adipisci atque cum quia aut',
        ]);
        DB::table('factinfos')->insert([
            'icone' => 'bi-headset',
            'nbrPersonnes' => 1453,
            'keyWord' => "Hours Of Support",
            'texte' => ' aut commodi quaerat',
        ]);
        DB::table('factinfos')->insert([
            'icone' => 'bi-people',
            'nbrPersonnes' => 32,
            'keyWord' => "Hard Workers",
            'texte' => ' rerum asperiores dolor',
        ]);
    }
}
