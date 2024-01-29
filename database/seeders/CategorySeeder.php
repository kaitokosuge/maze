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
            'category_img' => '<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="256px"
            height="256px"
            viewBox="0 0 256 256"
            version="1.1"
            preserveAspectRatio="xMidYMid"
        >
            <g>
                <path
                    d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
                    fill="#F7DF1E"
                />
                <path
                    d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                    fill="#000000"
                />
                <path
                    d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                    fill="#000000"
                />
            </g>
        </svg>',
            'category_color' => 'js-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'React',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => '<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="256px"
            height="256px"
            viewBox="0 0 256 256"
            version="1.1"
            preserveAspectRatio="xMidYMid"
        >
            <g>
                <path
                    d="M0,0 L256,0 L256,256 L0,256 L0,0 Z"
                    fill="#F7DF1E"
                />
                <path
                    d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                    fill="#000000"
                />
                <path
                    d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                    fill="#000000"
                />
            </g>
        </svg>',
            'category_color' => 'react-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Laravel',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/tonr.png',
            'category_color' => 'laravel-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'PHP',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/tonp.png',
            'category_color' => 'php-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Next.js',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/ton.png',
            'category_color' => 'next-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Python',
            'category_desc' => 'JavaScript (JS) is a lightweight, interpreted or runtime-compiled programming language with first-class functions. It is known as the most commonly used scripting language for web pages and is also used in many non-browser environments, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language that supports object-oriented, imperative, and declarative (e.g. functional programming) styles.',
            'category_img' => 'https://kaiton-blog.space/img/pen.png',
            'category_color' => 'python-color'
        ]);
    }
}
