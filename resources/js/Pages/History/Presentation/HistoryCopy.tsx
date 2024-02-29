import { Link } from "@inertiajs/react";
import React from "react";

export default function HistoryCopy() {
    return (
        <div className="bg-profile-card w-full min-h-[500px] p-20">
            <div className="flex items-center mt-10">
                <img src="maze--b--logo.png" className="w-[50px]" />
                <h1 className="maze--title text-[45px] font-bold ml-[10px]">
                    MAZE
                </h1>
            </div>
            <div className="flex px-5 mt-10 border-b border-b-gray-700 pb-20">
                <div>
                    <p className="font-bold">menu</p>
                    <Link
                        href="/top"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        HOME→
                    </Link>
                    <Link
                        href="/news"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        NEWS→
                    </Link>
                    <Link
                        href="/"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        RULES→
                    </Link>
                </div>

                <div className="ml-40">
                    <p className="font-bold">quiz</p>
                    <Link
                        href="/quiz/1"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        JavaScript→
                    </Link>
                    <Link
                        href="/quiz/2"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        React→
                    </Link>
                    <Link
                        href="/quiz/3"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        Laravel→
                    </Link>
                    <Link
                        href="/quiz/4"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        PHP→
                    </Link>
                </div>

                <div className="ml-40">
                    <p className="font-bold">quiz</p>
                    <Link
                        href="/quiz/5"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        Next.js→
                    </Link>
                    <Link
                        href="/quiz/6"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        Python→
                    </Link>
                    <Link
                        href="/quiz/7"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        django→
                    </Link>
                    <Link
                        href="/quiz/8"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        TypeScript→
                    </Link>
                </div>
                <div className="ml-40">
                    <p className="font-bold">quiz</p>
                    <Link
                        href="/quiz/9"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        Vue.js→
                    </Link>
                    <Link
                        href="/quiz/10"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        Go→
                    </Link>
                    <Link
                        href="/quiz/11"
                        className="block font-bold text-[13px] text-gray-400 mt-5"
                    >
                        FastAPI→
                    </Link>
                </div>
            </div>
            <p className="text-gray-500 text-[12px] mt-20">
                MAZE（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識しており、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言します。
            </p>
            <p className="mt-5 text-gray-500 text-[15px]">１．個人情報の定義</p>
            <p className="text-gray-500 text-[12px] mt-5">
                本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であり、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別することができるものをいいます。
            </p>
            <p className="mt-5 text-gray-500 text-[15px]">２．個人情報の管理</p>
            <p className="text-gray-500 text-[12px] mt-5">
                お客様からお預かりした個人情報は、不正アクセス、紛失、漏えい等が起こらないよう、慎重かつ適切に管理します。
            </p>
            <p className="mt-5 text-gray-500 text-[15px]">
                ３．個人情報の利用目的
            </p>
            <p className="text-gray-500 text-[12px] mt-5">
                当サイトでは、お客様からのお問い合わせ等を通じて、メールアドレス等の個人情報をご提供いただく場合があります。その場合は、以下に示す利用目的のために、適正に利用するものと致します。
            </p>
            <ul>
                <li>
                    <p className="text-gray-500 text-[12px] mt-5">
                        ・新サービスの開発を行うために必要な分析等を行うため
                    </p>
                </li>
                <li>
                    <p className="text-gray-500 text-[12px] mt-5">
                        ・当サイトを改善するために必要な分析などを行うため
                    </p>
                </li>
                <li>
                    <p className="text-gray-500 text-[12px] mt-5">
                        ・個人情報を含まない形でデータを集計し、当サイト、及びお客様の参考資料を作成するため
                    </p>
                </li>
            </ul>
            <p className="mt-5 text-gray-500 text-[15px]">
                ４．個人情報の第三者提供
            </p>
            <p className="text-gray-500 text-[12px] mt-5">
                お客様からお預かりした個人情報を、個人情報保護法その他の法令に基づき開示が認められる場合を除き、お客様ご本人の同意を得ずに第三者に提供することはありません。
            </p>
            <p className="mt-5 text-gray-500 text-[15px]">
                ５．個人情報の開示・訂正・削除について
            </p>
            <p className="text-gray-500 text-[12px] mt-5">
                お客様からお預かりした個人情報の確認、訂正・削除等をご希望の場合、お客様ご本人がこちらのメールアドレス(kaitokosuge.mi@gmail.com)までご連絡ください。
            </p>
            <p className="mt-5 text-gray-500 text-[15px]">6．免責事項</p>
            <p className="text-gray-500 text-[12px] mt-5">
                当サイトに掲載されている情報・資料の内容については、利用、使用、ダウンロードする等の行為に起因して生じる結果に対し、一切の責任を負いません。
                なお、当サイトに掲載された情報の正確性を鑑みた際に、予告なしで情報の変更・削除を行う場合がございますので、予めご了承ください。
                当サイト上におけるお客様同士のトラブルに対し、一切の責任を負いません。
                上記、ご了承ください。
            </p>
            <p className="mt-5 text-gray-500 text-[15px]">7．著作権について</p>
            <p className="text-gray-500 text-[12px] mt-5">
                当サイトに掲載している、文章・画像・動画等の著作物を無断で複製し、転載することを禁じます。
                なお、当サイトに掲載している文章を引用する際は、出典元の明記をお願い致します。
            </p>
            <div className="flex items-center mt-20 justify-between">
                <div className="flex items-center">
                    &copy;
                    <h1 className="maze--title text-[30px] font-bold ml-[10px]">
                        <span className="text-[15px]">2024 </span> MAZE
                    </h1>
                </div>
                <div className="font-bold maze--title flex items-center">
                    <p>made by</p>
                    <img src="pen.png" className="w-[50px] ml-1" />
                </div>
            </div>
        </div>
    );
}
