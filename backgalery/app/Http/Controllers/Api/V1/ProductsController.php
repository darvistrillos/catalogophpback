<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;
use Http;

class ProductsController extends Controller
{
    public function index()
    {

        return Products::all();
    }

    public function show(Products $product)
    {
        return $product;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:products|max:255',
            'description' => 'required',
            'price' => 'integer',
            'availability' => 'boolean',
        ]);
        $product = Products::create($request->all());

        return response()->json($product, 201);
    }

    public function update(Request $request, Products $product)
    {
        $product->update($request->all());

        return response()->json($product, 200);
    }

    public function delete(Products $product)
    {
        $product->delete();

        return response()->json(null, 204);
    }
}
