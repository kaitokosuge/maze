import { Categories, CategoriesProps } from "@/types/Data/categories";
import { TopContainerProps } from "@/types/TopContainerProps";
import React from "react";
import { Link } from "@inertiajs/react";
import parse from "html-react-parser";
import SidebarRank from "./SidebarRank";

export default function Sidebar(props: any) {
    const { categories, user, allRate } = props;

    return (
        <div className="bg-[#000238] fixed left-0 w-[15%] h-screen ">
            <h1 className="font-bold maze--title text-[30px] text-white w-[85%] m-auto flex items-center duration-300 px-5 pt-[12px]">
                <img src="/maze_logo.png" className="w-[40px] h-[40px]" />
                <span className="block pt-1">MAZE</span>
            </h1>
            <p className="maze--title block text-[10px] w-fit-content m-auto text-center pb-[12px]">
                for PCs only
            </p>
            <div className="border-t border-gray-700 w-[85%] m-auto py-5">
                <Link
                    href="/profile"
                    className="flex items-start font-bold text-[16px] text-white w-[100%] px-5 py-[12px] m-auto hover:bg-[#001358] hover:scale-105 duration-300 rounded-[10px]"
                >
                    {user === undefined ? (
                        <>
                            <div
                                className={`block w-[35px] h-[35px] rounded-full bg-gray-400 mr-5 mt-1`}
                            ></div>
                        </>
                    ) : (
                        <>
                            <div
                                style={{ "background-color": `${user.color}` }}
                                className={`block w-[35px] h-[35px] mr-5 mt-1 auth--card shadow-white rounded-full`}
                            ></div>
                        </>
                    )}
                    <span className="maze--title block text-[13px]">
                        {user === undefined ? (
                            <>
                                unlogin<p className="text-[10px]">null</p>
                            </>
                        ) : (
                            <>
                                {user.name}
                                <p className="maze--title font-bold maze--knight--gra text-[18px] mt-1">
                                    <SidebarRank allRate={allRate} />
                                </p>
                            </>
                        )}
                    </span>
                </Link>
                {user === undefined ? (
                    <></>
                ) : (
                    <>
                        {user.isAdmin === 1 && (
                            <Link
                                href="/mazer"
                                className="hover:scale-105 font-bold w-[100%] px-5 py-[12px] m-auto hover:bg-[#001358] duration-300 flex items-center rounded-[10px]"
                            >
                                <img
                                    src="/pen--logo.png"
                                    className="w-[20px] h-[20px] mr-5 rounded-[5px]"
                                />
                                <p className="maze--title font-bold maze--title--gra text-[16px] mt-1">
                                    MAZER
                                </p>
                            </Link>
                        )}
                    </>
                )}

                <Link
                    href="/today-quiz"
                    className="hover:scale-105 font-bold text-[16px] text-white w-[100%] px-5 py-[12px] m-auto hover:bg-[#001358] duration-300 flex rounded-[10px]"
                >
                    <img
                        src="/eye02--logo.png"
                        className="w-[20px] h-[20px] mr-5 rounded-[5px]"
                    />
                    <span className="block maze--title maze--title--gra">
                        Today's Quiz
                    </span>
                </Link>
                <Link
                    href="/top"
                    className="hover:scale-105 font-bold text-[16px] text-white w-[100%] px-5 py-[12px] m-auto hover:bg-[#001358] duration-300 flex rounded-[10px]"
                >
                    <img
                        src="/home.png"
                        className="w-[20px] h-[20px] mr-5 rounded-[5px]"
                    />
                    <span className="block">HOME</span>
                </Link>
                <Link
                    href="/news"
                    className="hover:scale-105 font-bold text-[16px] text-white w-[100%] px-5 py-[12px] m-auto hover:bg-[#001358] duration-300 flex rounded-[10px]"
                >
                    <img
                        src="/news--logo.png"
                        className="w-[20px] h-[20px] mr-5 rounded-[5px]"
                    />
                    <span className="block">NEWS</span>
                </Link>
                <Link
                    href="/"
                    className="hover:scale-105 font-bold text-[16px] text-white w-[100%] px-5 py-[12px] m-auto hover:bg-[#001358] duration-300 flex rounded-[10px]"
                >
                    <img
                        src="/history--logo.png"
                        className="w-[20px] h-[20px] mr-5 rounded-[5px]"
                    />
                    <span className="block">RULES</span>
                </Link>
            </div>

            <div className="border-t border-gray-700 w-[85%] m-auto pt-5 overflow-scroll h-[55%] pb-[120px]">
                {categories.map((category: any) => (
                    <>
                        <Link
                            href={`/quiz/${category.id}`}
                            className="hover:scale-105 font-bold text-[16px] text-white w-[100%] px-5 py-[12px] m-auto hover:bg-[#000458] duration-300 rounded-[10px] flex items-center"
                        >
                            <>
                                <div className="w-[20px] h-auto">
                                    {parse(category.category_img)}
                                </div>
                                <span className="block ml-5">
                                    {category.category}
                                </span>
                            </>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    );
}
