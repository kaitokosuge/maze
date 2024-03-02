import { Link } from "@inertiajs/react";
import React from "react";

export default function HistoryDesc() {
    return (
        <div>
            <p className="mt-20 text-[14px]">
                <span className="maze--title">MAZE</span>
                はプログラミングのクイズアプリです。
            </p>
            <p className="mt-20 maze--title border-b border-b-pink-950 pb-1">
                Today's Quiz
            </p>
            <p className="text-[14px] mt-5">
                <span className="maze--title">Today's Quiz</span>
                は毎日24時に更新されるクイズです。初回解答時の正解率が高いと特別なランクが付与されます。過去のクイズも解くことができます（初回解答時の正解率に関わります、慎重に解きましょう、、！）
            </p>
            <p className="mt-20 maze--title border-b border-b-pink-950 pb-1">
                All Quiz
            </p>
            <p className="text-[14px] mt-5">
                <span className="maze--title">All Quiz</span>
                は全てのクイズのことを指します。初回解答時の正解率に関係なくクイズの正解割合ごとに下記のランクが付与されます。（プロフィールページで確認できます）
            </p>
            <div className="flex items-center mt-5 md:justify-normal justify-between">
                <p className="maze--title font-bold maze--knight--gra md:text-[34px] text-[30px]">
                    Knight
                </p>
                <p className="md:ml-10 text-pink-900">→</p>
                <p className="maze--title font-bold maze--herald--gra md:text-[34px] text-[30px] md:ml-10">
                    Herald
                </p>
                <p className="md:ml-10 text-pink-900">→</p>
                <p className="md:ml-10 maze--title md:text-[30px] text-[16px]">
                    ???
                </p>
            </div>

            <p className="maze--title mt-20 border-b border-b-pink-950 pb-1">
                ver. 0 member
            </p>
            <div className="flex items-center justify-between w-full mt-10">
                <img src="js--logo.png" className="block md:w-[3%] w-[8%]" />
                <img src="react--logo.png" className="block md:w-[3%] w-[8%]" />
                <img src="php--logo.png" className="block md:w-[3%] w-[8%]" />
                <img
                    src="laravel--logo.png"
                    className="block md:w-[3%] w-[8%]"
                />
                <img src="next--logo.webp" className="block md:w-[3%] w-[8%]" />
                <img
                    src="python--logo.png"
                    className="block md:w-[3%] w-[8%]"
                />
                <img src="dj--logo.png" className="block md:w-[3%] w-[8%]" />
                <img src="ts--logo.png" className="block md:w-[3%] w-[8%]" />
                <img src="vue--logo.png" className="block md:w-[3%] w-[8%]" />
                <img src="go--logo.png" className="block md:w-[3%] w-[8%]" />
                <img
                    src="fastapi--logo.png"
                    className="block md:w-[3%] w-[8%]"
                />
            </div>

            <p className="maze--title mt-20 border-b border-b-pink-950 pb-1">
                Let's try
            </p>
            <Link
                href="/top"
                className="block maze--title lg:text-[130px] md:text-[50px] text-[40px] maze--title--gra m-auto mt-20 w-fit-content cursor-pointer hover:scale-95 duration-300"
            >
                Let's play MAZE
            </Link>
        </div>
    );
}
