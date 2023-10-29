<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            AdminsTableSeeder::class,
            SellersTableSeeder::class,
            DivisionSeeder::class,
            DistrictSeeder::class,
        ]);

        \App\Models\User::factory(10)->create();
        \App\Models\Seller::factory(50)->create();
        \App\Models\Slider::factory(10)->create();
        \App\Models\Brand::factory(20)->create();
        \App\Models\Category::factory(30)->create();
        \App\Models\Subcategory::facto01840347390ry(100)->create();
        \App\Models\Product::factory(100)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@gmail.com',
            'phone' => '',
            'password' => Hash::make('password')
        ]);


    }
}
