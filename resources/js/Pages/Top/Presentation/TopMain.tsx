import { Quiz, Quizzes } from "@/types/Data/quiz";
import React, { useEffect, useRef, useState } from "react";
import TopAllQuiz from "./TopAllQuiz";
import TopMedia from "./TopMedia";
import parse from "html-react-parser";

import TopComment from "./TopComment";
import axios from "axios";

export default function TopMain({ quizzes, todayQuiz, user, comments }: any) {
    console.log("main quiz", quizzes);
    console.log("topquiz", todayQuiz);
    const [showQuizzes, setShowQuizzes] = useState(quizzes);
    const [isUserQuizAnswer, setIsUserQuizAnswer] = useState("");
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

    const handleAnswerQuiz = async (e: any, id: number) => {
        e.preventDefault();

        try {
            const data = isChoiceClick;
            const res = await axios.post(`/quiz/answer/${id}`, data);
            if (res.status) {
                setIsUserQuizAnswer(res.data.isTrue);
                await fetchQuizzes();
            } else if (res.status === 419) {
                alert("ページをリロードしてください");
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const [isEyeClick, setIsEyeClick] = useState<boolean>(false);
    const handleClickEye = () => {
        setIsEyeClick(!isEyeClick);
    };
    const [addClass, setAddClass] = useState<boolean>(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAddClass(true);
        }, 700);
        return () => clearTimeout(timeoutId);
    }, []);
    const fetchQuizzes = async () => {
        const res = await fetch("/get/quiz", {
            method: "GET",
        });
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setShowQuizzes(data.allQuiz);
        } else {
            console.log("error");
        }
    };
    return (
        <div className="bg-[#00142C] pt-[60px] pb-[100px] pl-[40px] pr-[50px] min-h-screen">
            <div className="flex justify-between items-center">
                <h2
                    className={
                        isEyeClick === true
                            ? "font-bold text-[30px] opacity-0 duration-300"
                            : "font-bold text-[30px] opacity-100 duration-300 text-gray-500"
                    }
                >
                    HOME
                </h2>
                <div className="flex items-center">
                    <div
                        className={
                            isEyeClick === true
                                ? "ml-5 flex items-center opacity-0 duration-300"
                                : "ml-5 flex items-center opacity-100 duration-300 hover:border-gray-100 border border-gray-800 rounded-[10px] px-5 py-[5px]"
                        }
                    >
                        <img
                            //onClick={handleClickEye}
                            className="w-[30px] cursor-pointer"
                            src="/heart--logo.png"
                        />
                        <p className="ml-5 font-bold">38</p>
                    </div>

                    {todayQuiz !== null ? (
                        <>
                            <TopComment
                                todayQuiz={todayQuiz}
                                comments={comments}
                            />
                            <div className="ml-1 duration-300 hover:border-gray-100 border border-gray-800 rounded-[10px] px-5 py-[5px]">
                                {isEyeClick === true ? (
                                    <>
                                        <img
                                            onClick={handleClickEye}
                                            className="duration-200 w-[30px] cursor-pointer"
                                            src="/eye--logo.png"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            onClick={handleClickEye}
                                            className="duration-200 w-[30px] cursor-pointer"
                                            src="/eyeclose--logo.png"
                                        />
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <p>🍵</p>
                        </>
                    )}
                </div>
            </div>

            <div
                className={
                    addClass === true
                        ? "px-10 py-[30px] bg-[#001E41] rounded-[20px] mt-1 duration-300"
                        : "px-10 py-[30px] bg-[#001E41] rounded-[20px] mt-1 duration-300"
                }
            >
                {todayQuiz !== null ? (
                    <>
                        {isEyeClick === true ? (
                            <>
                                <div className="flex items-center justify-between opacity-0 duration-300">
                                    <div className="w-[70%] flex items-center">
                                        <p
                                            className={
                                                addClass === true
                                                    ? "maze--title font-bold text-[30px] text-gray-100 duration-700"
                                                    : "maze--title font-bold text-[80px] text-gray-100"
                                            }
                                        >
                                            Today's Quiz
                                        </p>
                                        <div
                                            className={
                                                addClass === true
                                                    ? "ml-5 flex duration-700 opacity-100 w-[50%] overflow-scroll pb-1"
                                                    : "ml-5 flex duration-700 w-[0%] opacity-0"
                                            }
                                        >
                                            {todayQuiz.categories.map(
                                                (category: any) => (
                                                    <>
                                                        <div className="font-bold text-[12px] ml-5 flex items-center">
                                                            <div className="w-[15px] h-auto">
                                                                {parse(
                                                                    category.category_img
                                                                )}
                                                            </div>
                                                            <p className="ml-1 text-gray-400">
                                                                {
                                                                    category.category
                                                                }
                                                            </p>
                                                        </div>
                                                    </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            addClass === true
                                                ? "flex text-[12px] text-gray-300 font-bold duration-500 opacity-100"
                                                : "flex text-[12px] text-gray-300 font-bold duration-500 opacity-0"
                                        }
                                    >
                                        <span>
                                            <img
                                                className="block w-[15px] h-[15px] "
                                                src="/pen--logo.png"
                                            />
                                        </span>
                                        <p className="text-right maze--title ml-1">
                                            {todayQuiz.user.name}
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            addClass === true
                                                ? "flex items-start text-[28px] text-gray-200 font-bold duration-700 opacity-100"
                                                : "flex items-start text-[28px] text-gray-200 font-bold duration-700 opacity-0"
                                        }
                                    >
                                        <span>
                                            <img
                                                className="block w-[20px] h-[20px] mt-[10px]"
                                                src="/calendar--logo.png"
                                            />
                                        </span>
                                        <div className="maze--title ml-[7px]">
                                            {todayQuiz.showDay}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center justify-between opacity-100 duration-300">
                                    <div className="w-[70%] flex items-center">
                                        <p
                                            className={
                                                addClass === true
                                                    ? "maze--title font-bold text-[30px] text-gray-100 duration-700"
                                                    : "maze--title font-bold text-[80px] text-gray-100"
                                            }
                                        >
                                            Today's Quiz
                                        </p>
                                        <div
                                            className={
                                                addClass === true
                                                    ? "ml-5 flex duration-700 opacity-100 w-[50%] overflow-scroll pb-1"
                                                    : "ml-5 flex duration-700 w-[0%] opacity-0"
                                            }
                                        >
                                            {todayQuiz.categories.map(
                                                (category: any) => (
                                                    <>
                                                        <div className="font-bold text-[12px] ml-5 flex items-center">
                                                            <div className="w-[15px] h-auto">
                                                                {parse(
                                                                    category.category_img
                                                                )}
                                                            </div>
                                                            <p className="ml-1 text-gray-400">
                                                                {
                                                                    category.category
                                                                }
                                                            </p>
                                                        </div>
                                                    </>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            addClass === true
                                                ? "flex text-[12px] text-gray-300 font-bold duration-500 opacity-100"
                                                : "flex text-[12px] text-gray-300 font-bold duration-500 opacity-0"
                                        }
                                    >
                                        <span>
                                            <img
                                                className="block w-[15px] h-[15px] "
                                                src="/pen--logo.png"
                                            />
                                        </span>
                                        <p className="text-right maze--title ml-1">
                                            {todayQuiz.user.name}
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            addClass === true
                                                ? "flex items-start text-[28px] text-gray-200 font-bold duration-700 opacity-100"
                                                : "flex items-start text-[28px] text-gray-200 font-bold duration-700 opacity-0"
                                        }
                                    >
                                        <span>
                                            <img
                                                className="block w-[20px] h-[20px] mt-[10px]"
                                                src="/calendar--logo.png"
                                            />
                                        </span>
                                        <div className="maze--title ml-[7px]">
                                            {todayQuiz.showDay}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        <p
                            className={
                                addClass === true
                                    ? "font-bold mt-5 duration-700 opacity-100"
                                    : "font-bold mt-5 duration-700 opacity-0"
                            }
                        >
                            {todayQuiz.quiz}
                        </p>
                        <div
                            className={
                                addClass === true
                                    ? "mt-10 grid grid-cols-3 gap-5 duration-1000 opacity-100"
                                    : "mt-10 grid grid-cols-3 gap-20 duration-1000 opacity-0"
                            }
                        >
                            {todayQuiz.choices.map(
                                (choice: any, index: number) => (
                                    <>
                                        {todayQuiz.is_user_true.some(
                                            (ob: any) => ob.id === user.id
                                        ) === true ||
                                        isUserQuizAnswer === "true" ? (
                                            <div
                                                className={
                                                    choice.isTrue === 0
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
                                                        (num) =>
                                                            num === choice.id
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
                                )
                            )}
                        </div>
                        <div className="mt-10">
                            {todayQuiz.is_user_true.some(
                                (ob: any) => ob.id === user.id
                            ) === true ? (
                                <>
                                    <p className="text-[26px] font-bold text-[#00FFA3]">
                                        You clear!!!
                                    </p>
                                    <p className="mt-1">{todayQuiz.answer}</p>
                                    <p className="text-[11px] text-gray-500">
                                        by {todayQuiz.user.name}
                                    </p>
                                </>
                            ) : (
                                <>
                                    {isUserQuizAnswer === "" && (
                                        <button
                                            onClick={(e) =>
                                                handleAnswerQuiz(
                                                    e,
                                                    todayQuiz.id
                                                )
                                            }
                                            className="flex items-center hover:bg-[#2825bf] duration-300 rounded-[10px] m-auto mt-10 bg-[#030086] w-[150px] text-[20px] px-10 py-[10px] font-bold cursor-pointer"
                                        >
                                            <p className="ml-1">answer</p>
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
                                        <p className="mt-1">
                                            {todayQuiz.answer}
                                        </p>
                                        <p className="text-[11px] text-gray-500">
                                            by {todayQuiz.user.name}
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-[26px] font-bold text-[#B10000]">
                                            不正解です
                                        </p>
                                        <p className="text-[11px] text-gray-500">
                                            by {todayQuiz.user.name}
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
                    </>
                ) : (
                    <>
                        <p className="font-bold">Todays's quizはお休みです。</p>
                    </>
                )}
            </div>
            {isEyeClick === true ? (
                <>
                    <div className="mt-[350px] duration-300">
                        <h2 className="font-bold text-[20px] mt-10">
                            All Quiz
                        </h2>
                        <TopAllQuiz quizzes={quizzes} user={user} />
                    </div>
                    <div className="opacity-0 duration-1000">
                        <TopMedia user={user} />
                    </div>
                </>
            ) : (
                <>
                    <div className="mt-0 duration-300">
                        <h2 className="font-bold text-[20px] mt-10 maze--title">
                            <span className="mr-5">|</span>All Quiz
                        </h2>
                        <TopAllQuiz quizzes={showQuizzes} user={user} />
                    </div>
                    <div className="opacity-100 duration-1000">
                        <TopMedia user={user} />
                    </div>
                </>
            )}
        </div>
    );
}
