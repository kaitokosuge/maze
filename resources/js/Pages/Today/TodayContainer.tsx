import { Link } from "@inertiajs/react";
import React from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";
import TodayQuizzes from "./Presentation/TodayQuizzes";

export default function TodayContainer(props: any) {
    const { categories, user, allRate, quizzes, todayQuizRate } = props;
    console.log("today quizzez", quizzes);
    return (
        <>
            <div className="flex">
                <div className="w-[15%] h-screen relative">
                    <Sidebar
                        categories={categories}
                        user={user}
                        allRate={allRate}
                    />
                </div>

                <div className={`bg-today-quiz w-[85%] min-h-screen pb-10`}>
                    <Header />
                    <div className="pl-[40px] pr-[50px] pt-[100px]">
                        <h2 className="maze--title text-[30px] font-bold flex items-start">
                            <img src="/eye02--logo.png" className="w-[100px]" />
                            <div className="ml-10 mt-1">
                                <span className="maze--title--gra text-[40px] block">
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
