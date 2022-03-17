<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class EquipeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nom'=> $this->faker->word(),
            'nombre'=> $this->faker->randomNumber(2, false),
            'entraineur'=> $this->faker->name($gender = null),
            'postes'=> $this->faker->jobTitle(),
        ];
    }
}
