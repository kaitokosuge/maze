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
            'showDay' => '2024-02-27'
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
            'showDay' => '2024-02-20'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-22'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '01小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-01'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '02小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-02'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '03小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-03'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '04小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-04'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '05小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-05'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '06小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-06'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '07小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-07'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '08小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-08'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '09小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-09'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '10小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-10'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '11小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-11'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '12小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-12'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '13小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-13'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '14小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-14'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '15小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-15'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '16小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-16'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '17小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-17'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '18小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-18'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '19小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-19'
        ]);
        DB::table('quizzes')->insert([
            'quiz' => '21小菅海斗の好きな漫画はなんでしょう？',
            'answer' => 'どうも！',
            'user_id' => 1,
            'created_at' => now(),
            'isToday' => true,
            'showDay' => '2024-02-21'
        ]);
    }
}
