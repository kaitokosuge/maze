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
            'choice' => 'input',
            'isTrue' => true,
            'quiz_id' => 1,
        ]);
        DB::table('choices')->insert([
            'choice' => 'submit',
            'isTrue' => false,
            'quiz_id' => 1,
        ]);
        DB::table('choices')->insert([
            'choice' => 'change',
            'isTrue' => false,
            'quiz_id' => 1,
        ]);
        DB::table('choices')->insert([
            'choice' => 'click',
            'isTrue' => false,
            'quiz_id' => 1,
        ]);
        DB::table('choices')->insert([
            'choice' => '梅干し',
            'isTrue' => false,
            'quiz_id' => 2,
        ]);
        DB::table('choices')->insert([
            'choice' => 'カレー',
            'isTrue' => true,
            'quiz_id' => 2,
        ]);
        DB::table('choices')->insert([
            'choice' => '寿司',
            'isTrue' => true,
            'quiz_id' => 2,
        ]);
        DB::table('choices')->insert([
            'choice' => '草',
            'isTrue' => false,
            'quiz_id' => 2,
        ]);
        DB::table('choices')->insert([
            'choice' => '羊肉',
            'isTrue' => false,
            'quiz_id' => 2,
        ]);
        DB::table('choices')->insert([
            'choice' => 'basketball',
            'isTrue' => true,
            'quiz_id' => 3,
        ]);
        DB::table('choices')->insert([
            'choice' => 'baseball',
            'isTrue' => false,
            'quiz_id' => 3,
        ]);
        DB::table('choices')->insert([
            'choice' => 'soccer',
            'isTrue' => false,
            'quiz_id' => 3,
        ]);
        DB::table('choices')->insert([
            'choice' => 'mission impossible',
            'isTrue' => true,
            'quiz_id' => 4,
        ]);
        DB::table('choices')->insert([
            'choice' => 'jurassic word',
            'isTrue' => true,
            'quiz_id' => 4,
        ]);
        DB::table('choices')->insert([
            'choice' => 'avater',
            'isTrue' => true,
            'quiz_id' => 4,
        ]);
    }
}
