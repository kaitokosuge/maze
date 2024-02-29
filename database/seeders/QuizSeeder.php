<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('quizzes')->insert([
            'quiz' => 'mazeへようこそ！！！実際にクイズ画面を触ってみよう',
            'answer' => 'ありがとうございました！！！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => false,
            'showDay' => '2024-02-01'
        ]);
    }
}
