<?php

namespace Tests\Feature;


use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Wallet;
use App\Models\Transfer;
//use Illuminate\Database\Eloquent\FactoryBuilder;


class ProductsTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetProducts()
    {

        $response = $this->json('GET', '/products');

        $response->assertStatus(200)
            ->assertJsonStructure(['title', 'description', 'price', 'availability']);
    }
}
