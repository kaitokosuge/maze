import { User } from "@/types";
import { userInfo } from "os";
import React, { useEffect, useState } from "react";

export default function CategoryQuizCard(props: any) {
    const { quizzes, user, categoryID } = props;
    console.log(quizzes);
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
    useEffect(() => {
        console.log("isChoiceClick", isChoiceClick);
    }, [isChoiceClick]);
    const [isUserQuizAnswer, setIsUserQuizAnswer] = useState("");
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
    const [showQuizzes, setShowQuizzes] = useState(quizzes);
    const fetchQuizzes = async () => {
        const res = await fetch(`/quiz/new/${categoryID}`, {
            method: "GET",
        });
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            setShowQuizzes(data.newQuizzes);
        }
    };
    return (
        <div className="mt-10">
            {showQuizzes.map((quiz: any, index: number) => (
                <>
                    <div className="px-5 py-[30px] bg-[#001E41] rounded-[20px] mt-5 flex items-center justify-between">
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
                                <p className="font-bold text-[#00FFA3] duration-700">
                                    done ！！
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
                                : "fixed top-[20%] duration-500 w-[75%] bg-[#001E41] px-[50px] py-[0px] rounded-[20px] mt-5 opacity-0 items-center justify-between -z-10"
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
