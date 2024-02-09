import { Quiz, Quizzes } from "@/types/Data/quiz";
import React, { useEffect, useState } from "react";
import TopAllQuiz from "./TopAllQuiz";
import TopMedia from "./TopMedia";
import parse from "html-react-parser";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/shadcn-ui/ui/drawer";

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
    const [csrfMetaTag, setCsrfMetaTag] = useState<Element | null>(null);

    useEffect(() => {
        const csrfTag = document.head.querySelector(
            'meta[name="csrf-token"]'
        ).content;
        setCsrfMetaTag(csrfTag);
        console.log("csrfTag", csrfTag);
    }, []);
    const handleAnswerQuiz = async (e: any, id: number) => {
        e.preventDefault();
        // const csrfMetaTag: Element | null = document.head.querySelector(
        //     'meta[name="csrf-token"]'
        // );
        try {
            console.log("csrfMetaTag", csrfMetaTag);
            const res = await fetch(`/quiz/answer/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": `${csrfMetaTag}`,
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
    return (
        <div className="bg-[#00142C] pt-[60px] pb-[100px] pl-[40px] pr-[50px] min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-[50px]">HOME</h2>
                <div className="flex items-center">
                    <div className="ml-5 flex items-center">
                        <img
                            //onClick={handleClickEye}
                            className="w-[30px] cursor-pointer"
                            src="/heart--logo.png"
                        />
                        <p className="ml-5 font-bold">38</p>
                    </div>
                    <div className="ml-5 flex items-center">
                        <Drawer>
                            <DrawerTrigger className="text-yello-300">
                                <div className="flex items-center">
                                    <img
                                        //onClick={handleClickEye}
                                        className="hover:pb-[10px] duration-200 w-[30px] cursor-pointer"
                                        src="/voice--logo.png"
                                    />
                                    <p className="ml-5 font-bold">20</p>
                                </div>
                            </DrawerTrigger>
                            <DrawerContent className="bg-[#1d2089] border-none min-h-[500px] px-[100px] pb-10">
                                <DrawerHeader>
                                    <DrawerTitle className="mt-10 text-[30px]">
                                        COMMENT
                                    </DrawerTitle>
                                    <DrawerDescription>
                                        today's quiz comment
                                    </DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <DrawerClose>
                                        <p>back</p>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                    <div className="ml-5">
                        {isEyeClick === true ? (
                            <>
                                <img
                                    onClick={handleClickEye}
                                    className="hover:pb-[10px] duration-200 w-[30px] cursor-pointer"
                                    src="/eye--logo.png"
                                />
                            </>
                        ) : (
                            <>
                                <img
                                    onClick={handleClickEye}
                                    className="hover:pb-[10px] duration-200 w-[30px] cursor-pointer"
                                    src="/eyeclose--logo.png"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div
                className={
                    addClass === true
                        ? "px-10 py-[30px] bg-[#001E41] rounded-[20px] mt-1 duration-300"
                        : "px-10 py-[30px] bg-[#001E41] rounded-[20px] mt-1 duration-300"
                }
            >
                {isEyeClick === true ? (
                    <>
                        <div className="flex items-center justify-between opacity-0 duration-300">
                            <div className="w-[70%] flex items-center">
                                <p className="font-bold text-[30px] text-gray-400">
                                    Today's Quiz
                                </p>
                                <div className="ml-5 flex">
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
                                                        {category.category}
                                                    </p>
                                                </div>
                                            </>
                                        )
                                    )}
                                </div>
                                <div className="flex text-[12px] ml-10 text-gray-300 font-bold">
                                    <span>
                                        <img
                                            className="block w-[15px] h-[15px] "
                                            src="/pen--logo.png"
                                        />
                                    </span>
                                    <p className="ml-[7px]">
                                        {todayQuiz.user.name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center text-[28px] text-gray-200 font-bold">
                                <span>
                                    <img
                                        className="block w-[20px] h-[20px] "
                                        src="/calendar--logo.png"
                                    />
                                </span>
                                <p className="ml-[10px]">{todayQuiz.showDay}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center justify-between opacity-100 duration-300">
                            <div className="w-[70%] flex items-center">
                                <p className="font-bold text-[30px] text-gray-400">
                                    Today's Quiz
                                </p>
                                <div
                                    className={
                                        addClass === true
                                            ? "ml-5 flex duration-100 opacity-100"
                                            : "ml-5 flex duration-100 opacity-0"
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
                                                        {category.category}
                                                    </p>
                                                </div>
                                            </>
                                        )
                                    )}
                                </div>
                                <div
                                    className={
                                        addClass === true
                                            ? "flex text-[12px] ml-10 text-gray-300 font-bold duration-500 opacity-100"
                                            : "flex text-[12px] ml-10 text-gray-300 font-bold duration-500 opacity-0"
                                    }
                                >
                                    <span>
                                        <img
                                            className="block w-[15px] h-[15px] "
                                            src="/pen--logo.png"
                                        />
                                    </span>
                                    <p className="ml-[7px]">
                                        {todayQuiz.user.name}
                                    </p>
                                </div>
                            </div>
                            <div
                                className={
                                    addClass === true
                                        ? "flex items-center text-[28px] text-gray-200 font-bold duration-700 opacity-100"
                                        : "flex items-center text-[28px] text-gray-200 font-bold duration-700 opacity-0"
                                }
                            >
                                <span>
                                    <img
                                        className="block w-[20px] h-[20px] "
                                        src="/calendar--logo.png"
                                    />
                                </span>
                                <p className="ml-[10px]">{todayQuiz.showDay}</p>
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
                            : "mt-10 grid grid-cols-3 gap-0 duration-1000 opacity-0"
                    }
                >
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
                                    className="flex items-center hover:bg-[#2825bf] duration-300 rounded-[10px] m-auto mt-10 bg-[#030086] w-[150px] text-[20px] px-10 py-[10px] font-bold cursor-pointer"
                                >
                                    <p className="ml-1">answer</p>
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
            {isEyeClick === true ? (
                <>
                    <div className="opacity-0 duration-1000">
                        <TopMedia user={user} />
                    </div>
                    <div className="mt-[280px] duration-300">
                        <h2 className="font-bold text-[20px] mt-10">
                            All Quiz
                        </h2>
                        <TopAllQuiz quizzes={quizzes} user={user} />
                    </div>
                </>
            ) : (
                <>
                    <div className="opacity-100 duration-1000">
                        <TopMedia user={user} />
                    </div>
                    <div className="mt-0 duration-300">
                        <h2 className="font-bold text-[20px] mt-10">
                            All Quiz
                        </h2>
                        <TopAllQuiz quizzes={quizzes} user={user} />
                    </div>
                </>
            )}
        </div>
    );
}
