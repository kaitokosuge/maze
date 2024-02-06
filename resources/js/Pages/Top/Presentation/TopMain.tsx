import { Quiz, Quizzes } from "@/types/Data/quiz";
import React, { useState } from "react";
import TopAllQuiz from "./TopAllQuiz";
import TopMedia from "./TopMedia";
import parse from "html-react-parser";

export default function TopMain({ quizzes, todayQuiz, user }: any) {
    console.log("main quiz", quizzes);
    console.log("topquiz", todayQuiz);
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
        const csrfMetaTag: Element | null = document.head.querySelector(
            'meta[name="csrf-token"]'
        );
        try {
            const res = await fetch(`/quiz/answer/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": `${csrfMetaTag.content}`,
                },
                body: JSON.stringify(isChoiceClick),
            });
            if (res.ok) {
                const data = await res.json();
                setIsUserQuizAnswer(data.isTrue);
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
    return (
        <div className="bg-[#00142C] pt-[100px] pb-[100px] pl-[40px] pr-[50px]">
            <div className="px-10 py-[30px] bg-[#001E41] rounded-[20px] mt-5">
                <div className="flex items-center">
                    <p className="font-bold text-[30px] text-gray-400">
                        Today's Quiz
                    </p>
                    <div className="ml-10 flex">
                        {todayQuiz.categories.map((category: any) => (
                            <>
                                <div className="font-bold text-[12px] ml-5 flex items-center">
                                    <div className="w-[15px] h-[15px]">
                                        {parse(category.category_img)}
                                    </div>
                                    <p className="ml-1 text-gray-400">
                                        {category.category}
                                    </p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <p className="font-bold mt-5">{todayQuiz.quiz}</p>
                <div className="mt-10 grid grid-cols-3 gap-5">
                    {todayQuiz.choices.map((choice: any, index: number) => (
                        <>
                            {todayQuiz.is_user_true.some(
                                (ob: any) => ob.id === user.id
                            ) === true || isUserQuizAnswer === "true" ? (
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
                                        handleChangeQuizData(e, choice.id)
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
                                    <span className="mr-5">{index + 1}</span>
                                    <span className="font-bold text-[18px]">
                                        {choice.choice}
                                    </span>
                                </div>
                            )}
                        </>
                    ))}
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
                                        handleAnswerQuiz(e, todayQuiz.id)
                                    }
                                    className="hover:bg-[#2825bf] duration-300 rounded-[10px] block m-auto mt-10 bg-[#030086] w-[150px] text-[20px] text-center px-10 py-[10px] font-bold cursor-pointer"
                                >
                                    answer
                                </button>
                            )}
                        </>
                    )}
                </div>
                <div className={isUserQuizAnswer !== "" ? "block" : "hidden"}>
                    <div className="">
                        {isUserQuizAnswer === "true" ? (
                            <div>
                                <p className="text-[26px] font-bold text-[#00FFA3] duration-700">
                                    正解です！！！
                                </p>
                                <p className="mt-1">{todayQuiz.answer}</p>
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
                                    onClick={() => setIsUserQuizAnswer("")}
                                    className="hover:bg-[#34ee5c] duration-300 rounded-[10px] block m-auto mt-10 bg-[#009020] w-[150px] text-[20px] text-center px-10 py-[10px] font-bold cursor-pointer"
                                >
                                    retry
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <TopMedia />
            <TopAllQuiz quizzes={quizzes} user={user} />
        </div>
    );
}
