<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
use App\Models\Seller;
use App\Models\Subcategory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $multi_image = [$this->faker->imageUrl('450','450'), $this->faker->imageUrl('450','450'), $this->faker->imageUrl('450','450')];
        return [
            'seller_id' =>$this->faker->randomElement(Seller::pluck('id')->toArray()),
            'brand_id' => $this->faker->randomElement(Brand::pluck('id')->toArray()),
            'category_id' => $this->faker->randomElement(Category::pluck('id')->toArray()),
            'subcategory_id' => $this->faker->randomElement(Subcategory::pluck('id')->toArray()),
            'name' => $this->faker->name(),
            'thumbnail' => $this->faker->imageUrl('350','350'),
            'slug' => $this->faker->unique()->slug(),
            'images' => $this->faker->randomElement([$multi_image]),
            'price' => $this->faker->numberBetween(800,3000),
            'discount' => $this->faker->numberBetween(1,99),
            'description' => $this->faker->paragraph(),
            'stock' => $this->faker->numberBetween(1,99),
            'sale' => $this->faker->randomElement([true,false]),
            'condition' => $this->faker->randomElement(['new','popular','winter','feature']),
            'added_by' => $this->faker->randomElement(['admin','seller']),
            'status' => $this->faker->randomElement(['active','inactive']),
        ];
    }
}
