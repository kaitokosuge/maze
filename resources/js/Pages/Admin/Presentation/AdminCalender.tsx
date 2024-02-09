import TopAllQuiz from "@/Pages/Top/Presentation/TopAllQuiz";
import { Quiz } from "@/types/Data/quiz";
import React from "react";
import parse from "html-react-parser";

export default function AdminCalender(props: any) {
    const { days, reserveQuizzes } = props;
    console.log("days", days);
    const showQuizzes = reserveQuizzes.filter((quiz: any) => {
        return days.includes(quiz.showDay);
    });
    console.log("showQuisses", showQuizzes);
    return (
        <div className="mt-[100px] ">
            <h2>｜Today's Quiz schedule</h2>

            <div className="border border-pink-950 mt-[20px] rounded-[20px] p-5 flex justify-between">
                {days.map((day: string) => (
                    <div className="w-[12%] border-r border-pink-950 last:border-none">
                        <p className="font-bold text-gray-400 text-3xl text-center">
                            {day.slice(5)}
                        </p>
                        <div>
                            {reserveQuizzes.map((quiz: any) => (
                                <>
                                    {quiz.showDay === day && (
                                        <>
                                            <div className="flex items-center justify-center mt-5">
                                                <span>
                                                    <img
                                                        className="block w-[15px] h-[15px] "
                                                        src="/pen--logo.png"
                                                    />
                                                </span>
                                                <p className="ml-1 text-[12px] text-center text-gray-300">
                                                    {quiz.user.name}
                                                </p>
                                            </div>
                                            {quiz.categories.map(
                                                (category: any) => (
                                                    <div className="flex items-center justify-center  w-fit-content m-auto text-gray-200 font-bold mt-[10px]">
                                                        <span className="w-[10px] block text-center">
                                                            {parse(
                                                                category.category_img
                                                            )}
                                                        </span>
                                                        <p className="ml-1 text-[10px] text-center">
                                                            {category.category}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </>
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
