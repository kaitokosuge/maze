import axios from "axios";
import React, { useState } from "react";
import parse from "html-react-parser";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import TopComment from "@/Pages/Top/Presentation/TopComment";

export default function TodayQuizzes(props: any) {
    const { quizzes, user, todayQuizRate } = props;

    const likeArray = user.likes.map((like: any) => like.quiz_id);

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
                console.log("resr data", res);
                setIsUserQuizAnswer(res.data.isTrue);
                setRateNum(res.data.rate);
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
    const [rateNum, setRateNum] = useState(todayQuizRate);
    const [showQuizzes, setShowQuizzes] = useState(quizzes);

    const fetchQuizzes = async (pageNum: number) => {
        const res = await fetch(`/get/today-quiz/${pageNum}`, {
            method: "GET",
        });
        if (res.ok) {
            const data = await res.json();
            setShowQuizzes(data.allQuiz);
        } else {
            console.log("error");
        }
    };
    // const [likeCount, setLikeCount] = useState<number>(quizzes[].likes.length);
    const [isLiked, setIsLiked] = useState(likeArray);

    const handleLike = async (e: any, id: number, pageNum: number) => {
        e.preventDefault();

        const res = await axios.post(`/like/${id}/${pageNum}`);
        if (res.status === 200) {
            console.log("res lieke", res.data.AllQuiz);
            const status = res.data.status;
            if (status === "post") {
                setShowQuizzes(res.data.AllQuiz);
                setIsLiked((prev: any) => {
                    return [...prev, res.data.quizId];
                });
            } else if (status === "delete") {
                setShowQuizzes(res.data.AllQuiz);
                setIsLiked((prev: any) => {
                    return prev.filter((like: any) => like !== res.data.quizId);
                });
            }
        } else {
            alert("ページをリロードし再実行してください🙇");
        }
    };
    return (
        <div className="mt-[100px]">
            <div className="rounded-[20px] bg-profile w-[100%] px-10 py-10 mt-5 duration-100">
                <div className="rounded-[20px] bg-profile-card p-10 profile--card flex items-center justify-between">
                    <div className="font-bold text-[80px] maze--title maze--title--gra">
                        {rateNum >= 90 && (
                            <p className="maze--title font-bold maze--today--gra text-[34px] mt-5">
                                Albatross
                            </p>
                        )}
                        {rateNum < 0 ? (
                            <>
                                <p>0%</p>
                                <p className="text-[12px] maze--title">
                                    First time correct answer rate
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-[12px] maze--title">
                                    First time correct answer rate
                                </p>
                                <p>{rateNum}%</p>
                            </>
                        )}
                    </div>
                    <div className="w-[70%] bg-black rounded-[10px] mt-5 p-1">
                        <div
                            className={`bg-first w-[${rateNum}%] h-[30px] rounded-[10px]`}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="">
                {showQuizzes.data.map((quiz: any, index: number) => (
                    <>
                        <div className="flex items-center mt-5 justify-end">
                            <TopComment
                                user={user}
                                todayQuiz={quiz}
                                comments={quiz.comments}
                                isUserQuizAnswer={isUserQuizAnswer}
                            />
                            <div
                                onClick={(e) =>
                                    handleLike(
                                        e,
                                        quiz.id,
                                        showQuizzes.current_page
                                    )
                                }
                                className={
                                    isLiked.some(
                                        (like: any) => like === quiz.id
                                    )
                                        ? "relative z-10 ml-1 flex items-center opacity-100 duration-300 text-red-600 hover:border-red-900 border border-gray-800 rounded-[10px] px-5 py-[5px]"
                                        : "relative z-10 ml-1 flex items-center opacity-100 duration-300 hover:border-gray-100 border border-gray-800 rounded-[10px] px-5 py-[5px]"
                                }
                            >
                                {isLiked.some(
                                    (like: any) => like === quiz.id
                                ) ? (
                                    <img
                                        className="w-[30px] cursor-pointer relative z-10"
                                        src="/red-heart--logo.png"
                                    />
                                ) : (
                                    <img
                                        className="w-[30px] cursor-pointer relative z-10"
                                        src="/heart--logo.png"
                                    />
                                )}

                                <p className="ml-5 font-bold relative z-10">
                                    {quiz.likes.length}
                                </p>
                            </div>
                        </div>
                        <div className="px-5 py-[30px] bg-[#001E41] rounded-[20px] mt-1 flex items-center justify-between">
                            <div
                                className={
                                    isClick === index
                                        ? "duration-300 bg-black opacity-90 w-screen h-screen fixed left-0 top-0 cursor-pointer"
                                        : "duration-500 bg-black opacity-0 w-screen h-screen fixed left-0 top-0 -z-10"
                                }
                                onClick={() => {
                                    handleQuizShow(-1);
                                    setIsUserQuizAnswer("");
                                    fetchQuizzes(showQuizzes.current_page);
                                }}
                            ></div>
                            <p className="font-bold text-[16px] text-limit">
                                {quiz.quiz}
                            </p>
                            <p className="maze--title--gra font-bold text-[30px] maze--title">
                                TQ
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
                            <div
                                onClick={() => handleQuizShow(index)}
                                className="text-center hover:bg-[#153e6c] duration-300 rounded-[10px] bg-[#002E64] w-[100px]  px-5 py-[15px] font-bold cursor-pointer"
                            >
                                <img
                                    className="block m-auto w-[20px]"
                                    src="/open--logo.png"
                                />
                            </div>
                        </div>
                        <div
                            className={
                                isClick === index
                                    ? "max-h-[80%] overflow-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  duration-300 w-[75%] opacity-100 px-[50px] py-[60px] bg-[#001E41] rounded-[20px] mt-1 items-center justify-between"
                                    : "max-h-[80%] overflow-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  duration-500 w-[75%] bg-[#001E41] px-[50px] py-[0px] rounded-[20px] mt-5 opacity-0 items-center justify-between -z-10"
                            }
                        >
                            <p className="font-bold">{quiz.quiz}</p>
                            <div className="mt-10 grid grid-cols-3 gap-5">
                                {quiz.choices.map(
                                    (choice: any, index: number) => (
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
                                                            (num) =>
                                                                num ===
                                                                choice.id
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
                                            <p className="mt-1">
                                                {quiz.answer}
                                            </p>
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
        </div>
    );
}
