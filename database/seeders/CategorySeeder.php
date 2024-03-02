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
            'category_desc' => 'JavaScript（ジャバスクリプト）は、WebページやWebアプリケーションを動的に操作するためのプログラミング言語です。クライアントサイドで動作し、Webブラウザ上で実行されます。',
            'category_img' => '<img className="block w-full object-contain" src="/js--logo.png"/>',
            'category_color' => 'js-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'React',
            'category_desc' => 'Reactは、Facebookによって開発されたユーザーインターフェース（UI）を構築するためのJavaScriptライブラリです。Webアプリケーションのコンポーネントベースの開発を促進し、コンポーネント指向のアーキテクチャを採用しています。',
            'category_img' => '<img className="block w-full object-contain" src="/react--logo.png"/>',
            'category_color' => 'react-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Laravel',
            'category_desc' => 'Laravelは、PHPで書かれたWebアプリケーションフレームワークです。Laravelは、エレガントで直感的な構文、豊富な機能、強力なツールを提供し、開発者が高品質でメンテナンス性の高いWebアプリケーションを迅速に開発することを可能にします。',
            'category_img' => '<img className="block w-full object-contain" src="/laravel--logo.png"/>',
            'category_color' => 'laravel-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'PHP',
            'category_desc' => 'PHPは、Web開発に広く使用されるプログラミング言語です。WordPressやDrupalなどの世界的に人気のあるコンテンツ管理システム（CMS）で使用されています。サーバーサイドで実行されるプログラミング言語です。',
            'category_img' => '<img className="block w-full object-contain" src="/php--logo.png"/>',
            'category_color' => 'php-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Next.js',
            'category_desc' => 'Next.jsは、Reactベースのフレームワークであり、主にReactアプリケーションの開発をサポートするために設計されています。Next.jsは、Reactの機能を拡張し、様々な機能を追加することで、Reactアプリケーションの開発を簡素化し、効率化します。',
            'category_img' => '<img className="block w-full object-contain" src="/next--logo.webp"/>',
            'category_color' => 'next-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Python',
            'category_desc' => 'Pythonは、汎用プログラミング言語の1つであり、使いやすさと読みやすさに重点を置いて設計されています。AI開発からデータ分析、WEB開発まで広く利用されており、世界で最も人気なプログラミング言語です。サーバーサイドで実行されます',
            'category_img' => '<img className="block w-full object-contain" src="/python--logo.png"/>',
            'category_color' => 'python-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'django',
            'category_desc' => 'Django（ジャンゴ）は、Pythonで書かれたwebアプリケーションフレームワークです。Web開発の効率性と再利用性を向上させるために設計されており、高速で堅牢なウェブアプリケーションの開発を可能にします。',
            'category_img' => '<img className="block w-full object-contain" src="/dj--logo.png"/>',
            'category_color' => 'django-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'TypeScript',
            'category_desc' => 'TypeScriptはJavaScriptのスーパーセットであるプログラミング言語です。開発において、JavaScriptの柔軟性と静的型付け言語の利点を組み合わせることができます。特に大規模なプロジェクトやチームでの開発に適しています。',
            'category_img' => '<img className="block w-full object-contain" src="/ts--logo.png"/>',
            'category_color' => 'typescript-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'vue.js',
            'category_desc' => 'Vue.jsは、JavaScriptのフロントエンドフレームワークであり、ユーザーインターフェースを構築するためのライブラリです。Vue.jsは、シンプルで柔軟な設計と優れたパフォーマンスを提供し、Webアプリケーションの開発を効率化します。',
            'category_img' => '<img className="block w-full object-contain" src="/vue--logo.png"/>',
            'category_color' => 'vue-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'Go',
            'category_desc' => 'Go言語（またはGolang）は、Googleによって開発されたオープンソースのプログラミング言語です。C言語のような低水準の言語とPythonのような高水準の言語の特徴を組み合わせた性質を持ち、Webサーバーやマイクロサービス、データ処理ツール、ネットワークプログラムなど、さまざまな分野で使用されています。',
            'category_img' => '<img className="block w-[120%] object-contain" src="/go--logo.png"/>',
            'category_color' => 'go-color'
        ]);
        DB::table('categories')->insert([
            'category' => 'FastAPI',
            'category_desc' => 'FastAPIは、Pythonの高速なWebフレームワークであり、非同期処理と型ヒントを活用して高性能なAPIを構築することができるツールです。特に、マイクロサービスやRESTful APIの開発に適しています。',
            'category_img' => '<img className="block w-[120%] object-contain" src="/fastapi--logo.png"/>',
            'category_color' => 'fastapi-color'
        ]);
    }
}
