<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IntermediateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category_quiz')->insert([
            'category_id' => 1,
            'quiz_id' => 1
        ]);
        DB::table('category_quiz')->insert([
            'category_id' => 1,
            'quiz_id' => 2
        ]);
        DB::table('category_quiz')->insert([
            'category_id' => 2,
            'quiz_id' => 2
        ]);
    }
}
