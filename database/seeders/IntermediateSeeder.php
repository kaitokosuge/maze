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
        DB::table('choice_quiz')->insert([
            'choice_id' => 1,
            'quiz_id' => 1
        ]);
        DB::table('choice_quiz')->insert([
            'choice_id' => 2,
            'quiz_id' => 1
        ]);
        DB::table('choice_quiz')->insert([
            'choice_id' => 3,
            'quiz_id' => 1
        ]);
        DB::table('choice_quiz')->insert([
            'choice_id' => 4,
            'quiz_id' => 1
        ]);
        DB::table('true_quiz')->insert([
            'true_id' => 1,
            'quiz_id' => 1
        ]);
        DB::table('category_quiz')->insert([
            'category_id' => 1,
            'quiz_id' => 1
        ]);
    }
}
