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
                    ? "rounded-[20px] bg-profile md:w-[70%] w-0 md:p-10 p-0 mt-5 duration-100"
                    : "rounded-[20px] bg-profile w-[100%] md:px-10 px-[15px] py-[30px] mt-5 duration-100"
            }
        >
            <p
                className={
                    isSetClick === true
                        ? "md:block hidden font-bold text-gray-100 text-[30px] opacity-100 duration-300"
                        : "md:block hidden font-bold text-gray-100 text-[30px] opacity-0 duration-300"
                }
            >
                RECORD
            </p>
            <div
                className={
                    isSetClick === true
                        ? "flex flex-wrap justify-between rounded-[20px] bg-profile-card md:p-10 p-5 profile--card mt-10 duration-300"
                        : "flex flex-wrap justify-between rounded-[20px] bg-profile-card md:p-10 p-5 py-10 profile--card  duration-300"
                }
            >
                <div className="md:w-[45%] w-full">
                    <p
                        style={{ color: `${auth.user.color}` }}
                        className="maze--title font-bold auth--text-2 text-[24px]"
                    >
                        {auth.user.name}
                    </p>
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

                <div className="md:w-[45%] w-full">
                    <p className="font-bold text-[20px] md:mt-0 mt-10">
                        All Quiz Data
                    </p>
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
                        : "grid md:grid-cols-3 grid-cols-2 gap-1 md:gap-10 md:mt-10 mt-1"
                }
            >
                {categories.map((category: any, index: number) => (
                    <div className="rounded-[20px] md:p-10 p-[10px] py-5 profile--card bg-profile-card">
                        <div className="flex font-bold">
                            <div className="md:w-[50px] w-[30px]">
                                {parse(category.category_img)}
                            </div>
                            <p className="md:ml-5 ml-1 md:text-[30px] text-[18px]">
                                {category.category}
                            </p>
                        </div>
                        <p className="mt-10 font-bold text-[10px] text-gray-600">
                            Count
                        </p>
                        <div className="mt-1 font-bold md:text-[80px] text-[40px] flex items-end">
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
