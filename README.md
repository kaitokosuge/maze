<h1>MAZE</h1>
<p>お試しアカウント</p>
<p>email:<strong>saitamakaitok@gmail.com</strong></p>
<p>password:<strong>pass0605</strong></p>
<h2>アプリ概要</h2>
MAZEはプログラミングのクイズアプリです。

web開発でよく使用される言語、フレームワークをクイズの題材としています。

<a href="https://maze-p-quiz-272cda03fda0.herokuapp.com/">MAZEのルール→</a>

<img width="1470" alt="login01" src="https://github.com/kaitokosuge/maze/assets/134667077/59bbb153-1148-4c4e-84e0-97b1f39e674c">　　

Today’s Quiz（以下、TQと記載）という毎日24時に更新されるクイズにはコメントといいねをすることができます。

TQには、初回回答時の正答率が高いユーザーに特別な称号を設定しています。

<img width="1470" alt="tq01" src="https://github.com/kaitokosuge/maze/assets/134667077/761e3f6b-df84-456a-889a-ef67729d11eb">　　

プロフィール画面ではクイズの正解状況とランクをグラフと数値で確認できるようになっています。

<img width="1470" alt="profile01" src="https://github.com/kaitokosuge/maze/assets/134667077/3f60dbf2-cca3-417d-bf2a-47c4f1c88bd9">　　


MAZEには管理者機能があり、アカウント新規登録時またはアカウント登録後に専用のパスコードをフォームに入力すると管理者になることができます。

管理者はTQと通常のQuizの投稿、削除が可能になります。

<img width="1470" alt="admin01" src="https://github.com/kaitokosuge/maze/assets/134667077/65ec47ff-4365-40e3-96a8-c30801ed1872">　　

<img width="1470" alt="admin02" src="https://github.com/kaitokosuge/maze/assets/134667077/ae47798e-36af-4ea7-b9d1-d90c6ddc12fd">　　


クイズは複数正解のもの、正解が存在しないものも作成することができます。選択肢の数に制限はありません

<img width="1470" alt="admin03" src="https://github.com/kaitokosuge/maze/assets/134667077/35305b1b-e541-4c0d-b42b-530ff79db225">　　


クイズ総数（TQとそれ以外のクイズ全て）に対する、正解したクイズの割合ごとにランク制度を設けています。　　

  
<img width="572" alt="rank01" src="https://github.com/kaitokosuge/maze/assets/134667077/5b111e66-9ffc-4a16-8d6a-95cf918cd176">　　


MAZEはスマートフォンにも対応しています。

<h2>作成動機</h2>
<h3>1.バイト先の仲間に使用してもらうため</h3>
自分のバイト先がプログラミングを扱っており、仲間達も日々プログラミング学習を頑張っているような環境でした。そこでプログラミングのクイズアプリを通して知識の習得ができ、新しい技術を学習するきっかけになればよいと考え作成しました。
<h3>2.プログラミング学習のアウトプットの場になるため</h3>
プログラミングではインプットした知識をアウトプットすることが非常に大切だと考えています。
そこでプログラミングクイズの作成という新しい形式のアウトプットを自身の学習に取り入れるために作成しました。クイズを作成する中で、まだ自分が言語化できていない知識の確立や、理解の浅い分野の学習に役立つと考えています。

<h2>開発で採用した言語と主要フレームワーク、ライブラリ</h2>
<h2>backend</h2>
<div><img src="https://skillicons.dev/icons?i=laravel"/><img src="https://skillicons.dev/icons?i=php"/></div>
<h3>Laravel（PHP|Laravel10、PHP8.2）</h3>
バイト先で使用することが多く開発に慣れている点とフロントとの連携としてイナーシャjsが使える点が使用理由として大きいです。開発速度を考慮し、バックエンドはLaravelを使用しました。
<h3>Laravel Breeze</h3>
<p>簡単な準備で認証機能を実装できるため使用しました。また、デフォルトで名前、メールアドレス、パスワードの編集機能を揃えており、カスタマイズも容易なことから採用しました。</p>
<h3>micro cms</h3>
<p>ニュースエリアでバックエンド兼、DBとして使用しています。
開発速度を上げるためと画像の保存を最適化（無料かつ高性能）できるため使用しました。</p>

<h2 style='margin-top:50px'>frontend</h2>
<div><img src="https://skillicons.dev/icons?i=react"/><img src="https://skillicons.dev/icons?i=typescript"/><img src="https://skillicons.dev/icons?i=tailwindcss"/></div>
<h3>React(TypeScript)</h3>
Reactはフロントのトレンド1位と言っても過言ではない技術のため、使用しました。
また、静的型付けによる開発の正確性担保は重要だと考えTypeScriptを使用しました。（バージョン0リリース時はあまり有効活用できなかった点が反省点として挙げられます、）
<h3>Tailwind CSS</h3>
クラス名の設計をする必要がない点と別途CSSファイルの用意が必要ない点から開発効率を上げられると考え、使用しました
<h2>UI設計</h2>
<img src="https://skillicons.dev/icons?i=figma"/>
<a href="https://www.figma.com/file/rTOCmtVnTgzjyaUkbRsBCC/MAZE?type=design&node-id=0%3A1&mode=design&t=KZAcbvdKJJJkKbJ1-1">MAZE figma →</a>
<h2>DB設計</h2>
<a href="https://drive.google.com/file/d/1JhOdsYf3hLMi7Dh6N_9TyyGacn2VgjZ_/view?usp=sharing">MAZE diagrams.net →</a>
<h2>開発環境</h2>
<img src="https://skillicons.dev/icons?i=docker"/>
Docker
<h2>ソースコード管理</h2>
<div><img src="https://skillicons.dev/icons?i=git"/><img src="https://skillicons.dev/icons?i=github"/></div>
Git,Github
<h2>作業管理</h2>
<img src="https://skillicons.dev/icons?i=github"/>
<a href="https://github.com/kaitokosuge/maze/issues">Github issues→</a>
<h2>デプロイ</h2>
<img src="https://skillicons.dev/icons?i=heroku"/>
heroku
<h2>機能概要</h2>
<ul>
    <li>認証機能</li>
    <li>メールアドレス検証機能</li>
    <li>管理者登録機能</li>
    <li>クイズ投稿・削除機能</li>
    <li>クイズ解答機能</li>
    <li>クイズへのコメント機能</li>
    <li>クイズへのいいね機能</li>
    <li>プロフィール編集機能</li>
    <li>ニュース投稿機能</li>
</ul>
<h2>反省点</h2>
UIを変更しながら開発していたため、CSS設計を最初に固めることができずクラス属性に規則性を持たせることができなかった。また、画面幅全てに最適に対応したUIを構築することができなかった。
開発速度を優先したため、当初予定していた reactコンポーネントアーキテクチャを守ることができなかった。
また、Laravelコントローラーで処理の重複が起こっている点とデータ取得を行っている点も反省点として挙げられる。
アプリの仕様変更を開発途中でした箇所でDB構造を見直し、変更する必要があった点も見過ごしていた。
総括としては運用・保守に強いソースコードが書けなかった点と初期設計（UIデザインからDB設計、バックエンドのデザイン設計含め）の甘さが挙げられる。

<h2>今後の開発</h2>
MAZEは今後も機能追加やカテゴリ追加等のアップデートを行います！現在はクイズにソースコードや太字、タイトルなどを付与できるように開発中です。
また反省点で挙げた保守性の観点でもより綺麗なソースコードになるよう、リファクタリングをしていきます。
MAZEの作成を通してアプリ開発の全体像を理解することができたので、この経験を活かしさまざまなアプリを作っていきたいと思います！！
