<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'kaitokosuge',
            'email' => 'k@k',
            'isAdmin' => true,
            'password' => Hash::make('password'),
        ]);
        DB::table('users')->insert([
            'name' => 'aotokosuge',
            'isAdmin' => false,
            'email' => 'a@a',
            'password' => Hash::make('password'),
        ]);
    }
}
