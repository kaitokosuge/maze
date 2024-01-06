import { User } from "@/types";
import { userInfo } from "os";
import React, { useState } from "react";

export default function CategoryQuizCard(props: any) {
    const { quizzes, user } = props;
    console.log(quizzes);
    const [isClick, setIsClick] = useState(-1);
    const handleQuizShow = (index: number) => {
        if (index === isClick) {
            setIsClick(-1);
        } else {
            setIsClick(index);
        }
    };
    return (
        <div className="mt-10">
            {quizzes.map((quiz: any, index: number) => (
                <>
                    <div className="px-5 py-[30px] bg-[#001E41] rounded-[20px] mt-5 flex items-center justify-between">
                        <div
                            className={
                                isClick === index
                                    ? "duration-300 bg-black opacity-90 w-screen h-screen fixed left-0 top-0 cursor-pointer"
                                    : "duration-500 bg-black opacity-0 w-screen h-screen fixed left-0 top-0 -z-10"
                            }
                            onClick={() => handleQuizShow(-1)}
                        ></div>
                        <p className="font-bold text-[16px] text-limit">
                            {index + 1} {quiz.quiz}
                        </p>
                        <data className="font-bold text-[12px] text-gray-500">
                            {quiz.created_at.slice(0, -17)}
                        </data>
                        <p className="font-bold text-[12px] text-gray-500">
                            {quiz.user.name}
                        </p>
                        <div>
                            {quiz.is_user_true.some(
                                (ob: User) => ob.id === user.id
                            ) === true ? (
                                <p className="font-bold text-[#00FFA3]">
                                    done!!!
                                </p>
                            ) : (
                                <p className="font-bold text-[#1b5841]">
                                    not done
                                </p>
                            )}
                        </div>
                        <p
                            onClick={() => handleQuizShow(index)}
                            className="hover:bg-[#153e6c] duration-300 rounded-[10px] bg-[#002E64] w-[100px] text-center px-5 py-[7px] font-bold cursor-pointer"
                        >
                            open
                        </p>
                    </div>
                    <div
                        className={
                            isClick === index
                                ? "fixed top-[20%] duration-300 w-[75%] opacity-100 px-[50px] py-[60px] bg-[#001E41] rounded-[20px] mt-1 items-center justify-between"
                                : "fixed top-[20%] duration-500 w-[75%] bg-[#001E41] px-[50px] py-[30px] rounded-[20px] mt-5 opacity-0 items-center justify-between -z-10"
                        }
                    >
                        <p className="font-bold">{quiz.quiz}</p>
                        <div className="mt-10 grid grid-cols-3 gap-5">
                            {quiz.choices.map((choice: any, index: number) => (
                                <>
                                    {quiz.is_user_true.some(
                                        (ob: any) => ob.id === user.id
                                    ) === true ? (
                                        <div
                                            className={
                                                choice.isTrue === 0
                                                    ? "rounded-[10px] border border-gray-600 p-5 cursor-pointer"
                                                    : "before:content('正解') rounded-[10px] bg-[#00ad6e] border border-gray-600 p-5 cursor-pointer"
                                            }
                                        >
                                            <p key={choice.id}>
                                                <span className="mr-5">
                                                    {index + 1}
                                                </span>
                                                <span className="font-bold text-[18px]">
                                                    {choice.choice}
                                                </span>
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="hover:bg-[#000238] duration-300 rounded-[10px] border border-gray-600 p-5 cursor-pointer">
                                            <p key={choice.id}>
                                                <span className="mr-5">
                                                    {index + 1}
                                                </span>
                                                <span className="font-bold text-[18px]">
                                                    {choice.choice}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                        <div className="mt-10">
                            {quiz.is_user_true.some(
                                (ob: any) => ob.id === user.id
                            ) === true ? (
                                <>
                                    <p className="text-[26px] font-bold text-[#00FFA3]">
                                        You clear!!!
                                    </p>
                                    <p className="mt-1">{quiz.answer}</p>
                                    <p className="text-[11px] text-gray-500">
                                        by {quiz.user.name}
                                    </p>
                                </>
                            ) : (
                                <button className="hover:bg-[#2825bf] duration-300 rounded-[10px] block m-auto mt-10 bg-[#030086] w-[150px] text-[20px] text-center px-10 py-[10px] font-bold cursor-pointer">
                                    answer
                                </button>
                            )}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}
