import { User } from "@/types";
import { Quiz } from "@/types/Data/quiz";
import React, { useState } from "react";
import parse from "html-react-parser";
import axios from "axios";
import { Link } from "@inertiajs/react";

export default function TopAllQuiz(props: any) {
    const { quizzes, user } = props;
    console.log("quizzes", quizzes);
    const [isClick, setIsClick] = useState(-1);
    const handleQuizShow = (index: number) => {
        if (index === isClick) {
            setIsClick(-1);
        } else {
            setIsClick(index);
        }
        setIsChoiceClick([]);
    };
    const [isChoiceClick, setIsChoiceClick] = useState<number[]>([]);
    const handleChangeQuizData = (e: any, choiceId: number) => {
        e.preventDefault();
        console.log(choiceId);
        setIsChoiceClick(() => {
            if (isChoiceClick.some((id) => id === choiceId) === true) {
                return isChoiceClick.filter((id) => id !== choiceId);
            }
            return [...isChoiceClick, choiceId];
        });
    };
    const [isUserQuizAnswer, setIsUserQuizAnswer] = useState("");
    const handleAnswerQuiz = async (e: any, id: number) => {
        e.preventDefault();
        try {
            const data = isChoiceClick;
            const res = await axios.post(`/quiz/answer/${id}`, data);
            if (res.status) {
                setIsUserQuizAnswer(res.data.isTrue);
                console.log("send-ok", data);
            } else if (res.status === 419) {
                alert("ページをリロードしてください");
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const [showQuizzes, setShowQuizzes] = useState(quizzes);
    const fetchQuizzes = async () => {
        const res = await fetch("/get/quiz", {
            method: "GET",
        });
        if (res.ok) {
            const data = await res.json();
            setShowQuizzes(data.allQuiz);
        } else {
            console.log("error");
        }
    };

    return (
        <div>
            {showQuizzes.data.map((quiz: any, index: number) => (
                <>
                    <div className="px-5 md:py-[30px] py-[15px] bg-[#001E41] rounded-[20px] mt-5 flex items-center justify-between">
                        <div
                            className={
                                isClick === index
                                    ? "duration-300 bg-black opacity-90 w-screen h-screen fixed left-0 top-0 cursor-pointer"
                                    : "duration-500 bg-black opacity-0 w-screen h-screen fixed left-0 top-0 -z-10"
                            }
                            onClick={() => {
                                handleQuizShow(-1);
                                setIsUserQuizAnswer("");
                                fetchQuizzes();
                            }}
                        ></div>
                        <p className="font-bold text-[16px] text-limit">
                            {quiz.quiz}
                        </p>
                        <p className="font-bold text-[12px] text-gray-500">
                            {quiz.categories.map((category: any) => (
                                <div className="flex items-center mt-[7px]">
                                    <div className="w-[15px] h-auto">
                                        {parse(category.category_img)}
                                    </div>
                                    <p className="font-bold ml-1">
                                        {category.category}
                                    </p>
                                </div>
                            ))}
                        </p>
                        <data className="hidden md:block font-bold text-[12px] text-gray-500">
                            {quiz.created_at.slice(0, -17)}
                        </data>
                        <p className="hidden md:block font-bold text-[12px] text-gray-500">
                            {quiz.user.name}
                        </p>
                        <div>
                            {quiz.is_user_true.some(
                                (ob: User) => ob.id === user.id
                            ) === true ? (
                                <p className="font-bold text-[#00FFA3] duration-700">
                                    done ！！
                                </p>
                            ) : (
                                <p className="font-bold text-[#1b5841]">
                                    not done
                                </p>
                            )}
                        </div>
                        <div
                            onClick={() => handleQuizShow(index)}
                            className="text-center hover:bg-[#153e6c] duration-300 rounded-[10px] bg-[#002E64] md:w-[100px] w-[70px] md:px-5 px-[10px] md:py-[15px] py-[10px] font-bold cursor-pointer"
                        >
                            <p>open</p>
                        </div>
                    </div>
                    <div
                        className={
                            isClick === index
                                ? "max-h-[80%] overflow-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  duration-300 md:w-[75%] w-[90%] opacity-100 md:px-[50px] px-[20px] md:py-[60px] py-[30px] bg-[#001E41] rounded-[20px] mt-1 items-center justify-between"
                                : "max-h-[80%] overflow-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  duration-500 md:w-[75%] w-[90%] bg-[#001E41] md:px-[50px] px-[20px] py-[0px] rounded-[20px] mt-5 opacity-0 items-center justify-between -z-10"
                        }
                    >
                        <p className="font-bold">{quiz.quiz}</p>
                        <div className="mt-10 grid grid-cols-3 gap-5">
                            {quiz.choices.map((choice: any, index: number) => (
                                <>
                                    {quiz.is_user_true.some(
                                        (ob: any) => ob.id === user.id
                                    ) === true ||
                                    isUserQuizAnswer === "true" ? (
                                        <div
                                            className={
                                                choice.isTrue === false
                                                    ? "rounded-[10px] border border-gray-600 p-5 cursor-pointer"
                                                    : "before:content('正解') rounded-[10px] bg-[#00ad6e] p-5 cursor-pointer duration-300"
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
                                        <div
                                            data-choice-id={choice.id}
                                            onClick={(e) =>
                                                handleChangeQuizData(
                                                    e,
                                                    choice.id
                                                )
                                            }
                                            key={choice.id}
                                            className={
                                                isChoiceClick.some(
                                                    (num) => num === choice.id
                                                ) === true
                                                    ? "active:scale-90 bg-[#03063e] duration-300 rounded-[10px] border border-gray-600 p-5 cursor-pointer"
                                                    : "active:scale-90 hover:bg-[#340a38] duration-300 rounded-[10px] border border-gray-600 p-5 cursor-pointer"
                                            }
                                        >
                                            <span className="mr-5">
                                                {index + 1}
                                            </span>
                                            <span className="font-bold text-[18px]">
                                                {choice.choice}
                                            </span>
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
                                <>
                                    {isUserQuizAnswer === "" && (
                                        <button
                                            onClick={(e) =>
                                                handleAnswerQuiz(e, quiz.id)
                                            }
                                            className="hover:bg-[#2825bf] duration-300 rounded-[10px] block m-auto mt-10 bg-[#030086] w-[150px] text-[20px] text-center px-10 py-[10px] font-bold cursor-pointer"
                                        >
                                            answer
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                        <div
                            className={
                                isUserQuizAnswer !== "" ? "block" : "hidden"
                            }
                        >
                            <div className="">
                                {isUserQuizAnswer === "true" ? (
                                    <div>
                                        <p className="text-[26px] font-bold text-[#00FFA3] duration-700">
                                            正解です！！！
                                        </p>
                                        <p className="mt-1">{quiz.answer}</p>
                                        <p className="text-[11px] text-gray-500">
                                            by {quiz.user.name}
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-[26px] font-bold text-[#B10000]">
                                            不正解です
                                        </p>
                                        <p className="text-[11px] text-gray-500">
                                            by {quiz.user.name}
                                        </p>
                                        <button
                                            onClick={() =>
                                                setIsUserQuizAnswer("")
                                            }
                                            className="hover:bg-[#34ee5c] duration-300 rounded-[10px] block m-auto mt-10 bg-[#009020] w-[150px] text-[20px] text-center px-10 py-[10px] font-bold cursor-pointer"
                                        >
                                            retry
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}
