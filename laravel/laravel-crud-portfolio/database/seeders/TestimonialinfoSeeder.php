<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestimonialinfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('testimonialinfos')->insert([
            'texte' => "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
            'img' => "testimonials-1.jpg",
            'nom' => "Saul Goodman",
            'role' => "Ceo & Founder",
        ]);
        DB::table('testimonialinfos')->insert([
            'texte' => "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
            'img' => "testimonials-2.jpg",
            'nom' => "Sara Wilsson",
            'role' => "Designer",
        ]);
        DB::table('testimonialinfos')->insert([
            'texte' => "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
            'img' => "testimonials-3.jpg",
            'nom' => "Jena Karlis",
            'role' => "Store Owner",
        ]);
        DB::table('testimonialinfos')->insert([
            'texte' => "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
            'img' => "testimonials-4.jpg",
            'nom' => "Matt Brandon",
            'role' => "Freelancer",
        ]);
        DB::table('testimonialinfos')->insert([
            'texte' => "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
            'img' => "testimonials-5.jpg",
            'nom' => "John Larson",
            'role' => "Entrepreneur",
        ]);



    }
}
