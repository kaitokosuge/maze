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
        ]);
        DB::table('choices')->insert([
            'choice' => 'submit',
        ]);
        DB::table('choices')->insert([
            'choice' => 'change',
        ]);
        DB::table('choices')->insert([
            'choice' => 'click',
        ]);
        DB::table('choices')->insert([
            'choice' => '梅干し',
        ]);
        DB::table('choices')->insert([
            'choice' => 'カレー',
        ]);
        DB::table('choices')->insert([
            'choice' => '寿司',
        ]);
        DB::table('choices')->insert([
            'choice' => '草',
        ]);
        DB::table('choices')->insert([
            'choice' => '羊肉',
        ]);
    }
}
