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
            'isToday' => true,
            'showDay' => '2024-02-01'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '小菅海斗の好きな食べ物はなんでしょう？',
            'answer' => 'カレー、寿司が好きです',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => 'no',
            'showDay' => '2024-02-05'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '小菅海斗の好きなスポーツはなんでしょう？',
            'answer' => 'バスケ部でした！！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => false,
            'showDay' => '2024-02-05'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '小菅海斗の好きな映画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-08'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-10'
        ]);
        
        
    }
}
