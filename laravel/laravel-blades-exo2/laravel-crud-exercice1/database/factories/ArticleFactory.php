<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nom'=> $this->faker->sentence(3),
            'description'=> $this->faker->realText($maxNbChars = 200, $indexSize = 2),
            'auteur'=> $this->faker->name($gender = null),
            'datepubli'=> $this->faker->dateTime(),
        ];
    }
}
