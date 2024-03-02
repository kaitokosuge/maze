import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren, useState } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex sm:justify-center bg-[#00142C] overflow-hidden">
            <div className="xl:w-[50%] w-full bg-colorfull-100 h-screen relative z-10 overflow-hidden">
                <h1 className="auth--text maze--title text-white font-bold xl:text-[180px] text-[100px] m-auto xl:mt-[120px] mt-[60px] w-fit">
                    MAZE
                </h1>
                <div className="maze--line line01"></div>
                <div className="maze--line line02"></div>
                <div className="maze--line line03"></div>
                <div className="maze--line line04"></div>
                <div className="maze--line line05"></div>
            </div>
            <div className="xl:w-[50%] w-[85%] xl:relative absolute xl:top-0 top-1/2 xl:left-0 left-1/2 xl:transform-none transform -translate-x-1/2 -translate-y-1/2 xl:!translate-x-0 xl:!translate-y-0 z-20">
                {children}
            </div>
        </div>
    );
}
