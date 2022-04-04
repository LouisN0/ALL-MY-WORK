<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Joueur>
 */
class JoueurFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {   
        $array = array('male','female');
        return [
            "nom"=>$this->faker->firstName(),
            "prenom"=>$this->faker->lastName(),
            "age"=>$this->faker->numberBetween(17,36),
            "telephone"=>$this->faker->phoneNumber(),
            "mail"=>$this->faker->email(),
            "genre"=>$array[$this->faker->numberBetween(0,1)],
            "pays"=>$this->faker->country(),
            "photo_id"=>$this->faker->numberBetween(1,4),
            "equipe_id"=>$this->faker->numberBetween(1,3),
            "role_id"=>$this->faker->numberBetween(1,4)
            
        ];
    }
}
