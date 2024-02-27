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
            'category_img' => '<img className="block w-full object-contain" src="/js--logo.png"/>',
            'category_color' => 'js-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'React',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/react--logo.png"/>',
            'category_color' => 'react-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Laravel',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/laravel--logo.png"/>',
            'category_color' => 'laravel-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'PHP',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/php--logo.png"/>',
            'category_color' => 'php-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Next.js',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/next--logo.webp"/>',
            'category_color' => 'next-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Python',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/python--logo.png"/>',
            'category_color' => 'python-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'django',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/dj--logo.png"/>',
            'category_color' => 'django-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'TypeScript',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/ts--logo.png"/>',
            'category_color' => 'typescript-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'vue.js',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-full object-contain" src="/vue--logo.png"/>',
            'category_color' => 'vue-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Go',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-[120%] object-contain" src="/go--logo.png"/>',
            'category_color' => 'go-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'FastAPI',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<img className="block w-[120%] object-contain" src="/fastapi--logo.png"/>',
            'category_color' => 'fastapi-color'
        ]);
    }
}
