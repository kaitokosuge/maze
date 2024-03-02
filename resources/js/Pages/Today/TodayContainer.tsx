import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";
import TodayQuizzes from "./Presentation/TodayQuizzes";

export default function TodayContainer(props: any) {
    const { categories, user, allRate, quizzes, todayQuizRate } = props;
    console.log("today quizzez", quizzes);
    console.log("login user", user);
    const [isHumShow, setIsHumShow] = useState<boolean>();
    const handleHumClick = () => {
        setIsHumShow(!isHumShow);
    };
    return (
        <>
            <div className="flex">
                <div
                    className={
                        isHumShow === true
                            ? "md:w-[15%] w-0 md:block md:left-0 left-0 relative duration-300 z-20"
                            : "md:w-[15%] w-0 md:block md:left-0 left-[-280px] duration-300 relative"
                    }
                >
                    <Sidebar
                        categories={categories}
                        user={user}
                        allRate={allRate}
                    />
                </div>

                <div
                    className={`bg-today-quiz md:w-[85%] w-full min-h-screen pb-10`}
                >
                    <div className="min-h-screen md:pt-[60px] pt-[20px] pb-[100px] xl:pl-[40px] lg:pl-[100px] md:pl-[20%] pr-[5%] pl-[5%]">
                        <div
                            onClick={handleHumClick}
                            className="w-[40px] h-[40px] m-0 ml-auto block md:hidden relative z-20"
                        >
                            {isHumShow === true ? (
                                <>
                                    <img src="eye--logo.png" />
                                </>
                            ) : (
                                <>
                                    <img src="eyeclose--logo.png" />
                                </>
                            )}
                        </div>
                        <div
                            onClick={handleHumClick}
                            className={
                                isHumShow === true
                                    ? "bg-black opacity-80 w-screen h-screen fixed top-0 left-0 z-10"
                                    : "bg-black opacity-0 w-screen h-screen fixed top-0 left-0 -z-10"
                            }
                        ></div>
                        <h2 className="maze--title text-[30px] font-bold flex items-start">
                            <img
                                src="/eye02--logo.png"
                                className="md:w-[100px] md:mt-0 mt-[10px] w-[55px]"
                            />
                            <div className="ml-10 mt-1">
                                <span className="maze--title--gra md:text-[40px] text-[30px] block">
                                    Today's Quiz
                                </span>
                                <p className="text-gray-400 font-bold text-[11px] mt-5">
                                    <span className="maze--title">
                                        Today's Quiz
                                    </span>
                                    の初回解答時正解率が90%以上だと特別なランクが付与されます。
                                </p>
                            </div>
                        </h2>

                        <ul className="pagination flex items-center mt-10 absolute right-[5%]">
                            {quizzes.links.map((link: any) => (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    className={
                                        link.active === true
                                            ? "mr-1 py-1 px-[10px] border border-[#381161] bg-[#381161] block w-content-fit min-w-[30px] text-center rounded-[10px] duration-300 font-bold"
                                            : "mr-1 py-1 px-[10px] border border-gray-700 block w-content-fit min-w-[30px] text-center rounded-[10px] hover:bg-[#4e0e92] hover:border-[#4e0e92] duration-300 font-bold"
                                    }
                                >
                                    <p>
                                        {link.label === "&laquo; Previous" ? (
                                            <>◀︎</>
                                        ) : link.label === "Next &raquo;" ? (
                                            <>▶︎</>
                                        ) : (
                                            <>{link.label}</>
                                        )}
                                    </p>
                                </Link>
                            ))}
                        </ul>
                        <TodayQuizzes
                            quizzes={quizzes}
                            user={user}
                            todayQuizRate={todayQuizRate}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-footer w-full h-[60px] fixed bottom-0"></div>
        </>
    );
}
