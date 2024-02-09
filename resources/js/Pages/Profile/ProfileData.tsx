import React from "react";
import parse from "html-react-parser";
import ProfileRank from "./ProfileRank";

export default function ProfileData(props: any) {
    const { auth, trueQuizNum, allQuizNum, allRate, isSetClick, categories } =
        props;
    const num = allRate;
    console.log(num);
    return (
        <div
            className={
                isSetClick === true
                    ? "rounded-[20px] bg-profile w-[70%] p-10 mt-5 duration-100"
                    : "rounded-[20px] bg-profile w-[100%] px-10 mt-5 duration-100"
            }
        >
            <p
                className={
                    isSetClick === true
                        ? "font-bold text-gray-100 text-[30px] opacity-100 duration-300"
                        : "font-bold text-gray-100 text-[30px] opacity-0 duration-300"
                }
            >
                RECORD
            </p>
            <div
                className={
                    isSetClick === true
                        ? "flex justify-between rounded-[20px] bg-profile-card p-10 profile--card mt-10 duration-300"
                        : "flex justify-between rounded-[20px] bg-profile-card p-10 profile--card mt-0 duration-300"
                }
            >
                <div className="w-[45%]">
                    <p className="maze--title font-bold text-white auth--text-2 text-[24px]">
                        {auth.user.name}
                    </p>
                    <span className="maze--title text-[10px] text-gray-300">
                        お願いします
                    </span>
                    {Number(auth.user.isAdmin) === 1 && (
                        <>
                            <p className="maze--title font-bold maze--title--gra text-[24px] mt-5">
                                MAZER
                            </p>
                            <span className="text-[10px] text-gray-300">
                                You are maze admin. Thank you every day!
                            </span>
                        </>
                    )}
                    <ProfileRank
                        allRate={allRate}
                        trueQuizNum={trueQuizNum}
                        allQuizNum={allQuizNum}
                    />
                </div>
                <div className="w-[45%] ">
                    <p className="font-bold text-[20px]">All Quiz</p>
                    <p className="mt-10 font-bold text-[10px] text-gray-600">
                        Number
                    </p>
                    <div className="mt-1 font-bold text-[80px] flex items-end">
                        <p className="leading-none">{trueQuizNum}</p>
                        <span className="text-[25px] ml-5 leading-none">
                            / {allQuizNum}
                        </span>
                    </div>
                    <p className="mt-5 font-bold text-[10px] text-gray-600">
                        Rate
                    </p>
                    <div className="w-full bg-black rounded-[10px] mt-5 p-1">
                        <div
                            className={`w-[${allRate}%] bg-allquiz h-[30px] rounded-[10px]`}
                        ></div>
                    </div>
                </div>
            </div>

            <div
                className={
                    isSetClick === true
                        ? "grid grid-cols-2 gap-5 mt-10"
                        : "grid grid-cols-3 gap-10 mt-10"
                }
            >
                {categories.map((category: any) => (
                    <div className="rounded-[20px] p-10 profile--card bg-profile-card">
                        <div className="flex font-bold text-[30px]">
                            <div className="w-[50px]">
                                {parse(category.category_img)}
                            </div>
                            <p className="ml-5">{category.category}</p>
                        </div>
                        <p className="mt-10 font-bold text-[10px] text-gray-600">
                            Count
                        </p>
                        <div className="mt-1 font-bold text-[80px] flex items-end">
                            <p className="leading-none">15</p>
                            <span className="text-[25px] ml-5 leading-none">
                                / 21
                            </span>
                        </div>
                        <p className="mt-5 font-bold text-[10px] text-gray-600">
                            Rate
                        </p>
                        <div className="w-full bg-black rounded-[10px] mt-5 p-1">
                            <div
                                className={`w-[${num}%] bg-[#877e00] h-[30px] rounded-[10px]`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
