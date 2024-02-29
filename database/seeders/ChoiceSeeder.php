<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChoiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('choices')->insert([
            'choice' => 'test quizです',
            'isTrue' => true,
            'quiz_id' => 1,
        ]);
        DB::table('choices')->insert([
            'choice' => 'test quizです',
            'isTrue' => true,
            'quiz_id' => 1,
        ]);
        
        
    }
}
