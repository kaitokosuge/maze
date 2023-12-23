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
    }
}
