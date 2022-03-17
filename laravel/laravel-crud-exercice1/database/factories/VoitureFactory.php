<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class VoitureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'marque'=> $this->faker->company(),
            'annee'=> $this->faker->year(),
            'couleur'=> $this->faker->safeColorName(),
            'prix'=> $this->faker->numberBetween(15000, 80000),
            'reduction'=> $this->faker->randomNumber(2, false),

        ];
    }
}
