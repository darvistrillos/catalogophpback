<?php

namespace Database\Factories;

use App\Models\Wallet;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;


$factory->define(Wallet::class, function (Faker $faker) {
    return [
        'money' => $faker->numberBetween($min = 500, $max = 900)
    ];
});
