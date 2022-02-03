<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;


$factory->define(Wallet::class, function (Faker $faker) {
    return [
        'decription' => $faker->text($maxNbChars = 200),
        'amount' => $faker->numberBetween($min = 10, $max = 90),
        'wallet_id' => $faker->randomDigitNotNull,
    ];
});

