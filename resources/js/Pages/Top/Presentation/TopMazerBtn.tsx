import { Link } from "@inertiajs/react";
import React from "react";

export default function TopMazerBtn() {
    return (
        <div className="w-[25%]">
            <Link
                href={"/mazer"}
                className="font-bold px-5 py-[10px] bg-colorfull-300 rounded-[10px] block w-full"
            >
                maze 管理画面
            </Link>
        </div>
    );
}
