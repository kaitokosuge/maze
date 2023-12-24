<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TrueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('trues')->insert([
            'true_num' => 1,
        ]);
        DB::table('trues')->insert([
            'true_num' => 2,
        ]);
        DB::table('trues')->insert([
            'true_num' => 3,
        ]);
    }
}
