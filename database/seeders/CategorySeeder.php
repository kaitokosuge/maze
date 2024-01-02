<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            'category' => 'JavaScript',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/tony.png',
        ]);
        DB::table('categories')->insert([
            'category' => 'React',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/tonb.png',
        ]);
        DB::table('categories')->insert([
            'category' => 'Laravel',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/tonr.png',
        ]);
        DB::table('categories')->insert([
            'category' => 'PHP',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/tonp.png',
        ]);
        DB::table('categories')->insert([
            'category' => 'Next.js',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/ton.png',
        ]);
        DB::table('categories')->insert([
            'category' => 'Python',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/pen.png',
        ]);
    }
}
