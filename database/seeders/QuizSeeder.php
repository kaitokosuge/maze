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
            'quiz' => 'reactにおけるonChangeメソッドはJavaScriptの下記イベントのうちどれと同じ働きをするか',
            'answer' => 'Javascriptではinputイベントが入力の変更を検知し、イベント発火されます',
            'user_id' => 1,
            'created_at' => now(),
        ]);
    }
}
