import React from "react";
import parse from "html-react-parser";
import ProfileRank from "./ProfileRank";
import ProfileWidth from "./ProfileWidth";

export default function ProfileData(props: any) {
    const {
        auth,
        trueQuizNum,
        allQuizNum,
        allRate,
        isSetClick,
        categories,
        categoryQuizCount,
        categoryQuizTrueCount,
        todayQuizRate,
    } = props;
    console.log(allRate);

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
                    <p
                        style={{ color: `${auth.user.color}` }}
                        className="maze--title font-bold auth--text-2 text-[24px]"
                    >
                        {auth.user.name}
                    </p>
                    <span className="maze--title text-[10px] text-gray-300">
                        "Hello world."
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
                    {todayQuizRate >= 90 && (
                        <>
                            <p className="maze--title font-bold maze--today--gra text-[34px] mt-5">
                                Albatross
                            </p>
                            <span className="text-[10px] text-gray-300">
                                You are Albatross. Over 90% of today's quiz is
                                answered correctly the first time!
                            </span>
                        </>
                    )}

                    <ProfileRank
                        allRate={allRate}
                        trueQuizNum={trueQuizNum}
                        allQuizNum={allQuizNum}
                    />
                </div>

                <div className="w-[45%]">
                    <p className="font-bold text-[20px]">All Quiz</p>
                    <p className="mt-10 font-bold text-[10px] text-gray-600">
                        Count
                    </p>
                    <div className="mt-1 font-bold text-[80px] flex items-end">
                        <p className="leading-none">{trueQuizNum}</p>
                        <span className="text-[25px] ml-5 leading-none">
                            / {allQuizNum}
                        </span>
                    </div>
                    <p className="mt-5 font-bold text-[10px] text-gray-600 ">
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
                {categories.map((category: any, index: number) => (
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
                            <p className="leading-none">
                                {categoryQuizTrueCount[index + 1] ===
                                undefined ? (
                                    0
                                ) : (
                                    <>{categoryQuizTrueCount[index + 1]}</>
                                )}
                            </p>
                            <span className="text-[25px] ml-5 leading-none">
                                / {categoryQuizCount[index]}
                            </span>
                        </div>
                        <p className="mt-5 font-bold text-[10px] text-gray-600 w-[0%]">
                            Rate
                        </p>
                        <div className="w-full bg-black rounded-[10px] mt-5 p-1">
                            <>
                                {categoryQuizTrueCount[index + 1] ===
                                undefined ? (
                                    <>
                                        <div className="w-0 bg-[#877e00] h-[30px] rounded-[10px]"></div>
                                    </>
                                ) : (
                                    <>
                                        <div
                                            className={`w-[${Math.round(
                                                (categoryQuizTrueCount[
                                                    index + 1
                                                ] /
                                                    categoryQuizCount[index]) *
                                                    100
                                            )}%] bg-${
                                                category.id
                                            } h-[30px] rounded-[10px]`}
                                        ></div>
                                    </>
                                )}
                            </>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
