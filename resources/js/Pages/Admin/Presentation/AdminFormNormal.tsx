import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import AdminPostedQuiz from "./AdminPostedQuiz";
import { useToast } from "@/shadcn-ui/ui/use-toast";
import { Toaster } from "@/shadcn-ui/ui/toaster";

export default function AdminFormNormal(props: any) {
    const { categories, postedQuiz } = props;
    const { toast } = useToast();
    const handleNormalSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const csrf_token = document.head.querySelector(
                'meta[name="csrf-token"]'
            ).content;
            const res = await fetch("/mazer/store/normal/quiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrf_token,
                },
                body: JSON.stringify(postQuiz),
            });
            if (res.ok) {
                toast({
                    title: "クイズの投稿が完了しました",
                });
                setPostQuiz({
                    quiz: "",
                    category: [],
                    choices: [{ uuid: uuidv4(), choice: "", istrue: "true" }],
                    answer: "",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    // const [choices, handleChoices] = useState<Choices[]>([
    //     { uuid: uuidv4(), choice: "", istrue: "true" },
    // ]);
    interface PostNormalQuiz {
        quiz: string;
        category: number[];
        choices: Choices[];
        answer: string;
    }
    const [postQuiz, setPostQuiz] = useState<PostNormalQuiz>({
        quiz: "",
        category: [],
        choices: [{ uuid: uuidv4(), choice: "", istrue: "true" }],
        answer: "",
    });
    interface Choices {
        uuid: string;
        choice: string;
        istrue: string;
    }

    const handleClickAddChoice = () => {
        const newChoice = { uuid: uuidv4(), choice: "", istrue: "true" };
        console.log("newnormalChoice", newChoice);
        setPostQuiz({
            ...postQuiz,
            choices: [...postQuiz.choices, newChoice],
        });
        console.log("postnormalQuiz", postQuiz);
    };

    const handleClickDeletechoice = (id: string) => {
        setPostQuiz({
            ...postQuiz,
            choices: postQuiz.choices.filter((choice) => choice.uuid !== id),
        });
    };
    const handleChangeNormalQuiz = (e: any, id?: string) => {
        if (e.target.name === "category") {
            if (e.target.checked) {
                setPostQuiz((prev) => {
                    return {
                        ...prev,
                        [e.target.name]: [
                            ...postQuiz.category,
                            Number(e.target.value),
                        ],
                    };
                });
            } else {
                setPostQuiz((prev) => {
                    return {
                        ...prev,
                        [e.target.name]: [...postQuiz.category].filter(
                            (value) => value !== Number(e.target.value)
                        ),
                    };
                });
            }
        } else if (e.target.name === "choice" || e.target.name === "istrue") {
            setPostQuiz((prev) => ({
                ...prev,
                choices: prev.choices.map((choiceObj) => {
                    if (choiceObj.uuid === id) {
                        if (e.target.name === "choice") {
                            return {
                                ...choiceObj,
                                choice: e.target.value,
                            };
                        } else if (e.target.name === "istrue") {
                            return {
                                ...choiceObj,
                                istrue: e.target.value,
                            };
                        }
                    }
                    return choiceObj;
                }),
            }));
        } else {
            setPostQuiz({
                ...postQuiz,
                [e.target.name]: e.target.value,
            });
        }
    };
    const [postedQuizState, setPostedQuiz] = useState(postedQuiz);
    const handleClickDeleteQuiz = async (e: any, id: number) => {
        e.preventDefault();
        const csrf_token = document.head.querySelector(
            'meta[name="csrf-token"]'
        ).content;
        const res = await fetch(`/mazer/delete/quiz/${id}`, {
            method: "DELETE",
            headers: {
                "X-CSRF-TOKEN": csrf_token,
            },
        });
        if (res.ok) {
            const data = await res.json();
            toast({
                title: `削除が完了しました`,
            });
            setPostedQuiz((prev: any) => {
                return prev.filter((quiz: any) => quiz.id !== data.quiz.id);
            });
        }
    };
    console.log("postnprmalquiz", postQuiz);
    return (
        <>
            <div>
                <form onSubmit={handleNormalSubmit} className="mt-[0px]">
                    <Toaster />
                    <div className="flex justify-between">
                        <div className="font-bold text-xl text-gray-300">
                            quiz を作成
                        </div>
                        <button className="hover:bg-[#22e68b] hover:scale-105 duration-300 block rounded-[10px] bg-[#19ac68] px-[30px] py-[10px] font-bold">
                            保存
                        </button>
                    </div>
                    <label className="font-bold text-[20px] mt-[50px] block">
                        quiz
                        <span className="font-normal text-[10px]"> クイズ</span>
                    </label>
                    <textarea
                        value={postQuiz.quiz}
                        onChange={handleChangeNormalQuiz}
                        name="quiz"
                        className="mt-[20px] p-5 w-full border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#1c0930]"
                    ></textarea>
                    <label className="font-bold text-[20px] mt-[50px] block">
                        choices & true
                        <span className="font-normal text-[10px]">
                            {" "}
                            選択肢と正解
                        </span>
                    </label>
                    <div className="">
                        {postQuiz.choices.map((choiceEl, index) => (
                            <div
                                key={choiceEl.uuid}
                                className="flex items-center mt-5"
                            >
                                <div className="font-bold text-[30px] w-[30px]">
                                    {index + 1}
                                </div>
                                <input
                                    className="ml-[20px] p-5 min-w-[300px] border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#1c0930]"
                                    type="text"
                                    name="choice"
                                    onChange={(e) => {
                                        handleChangeNormalQuiz(
                                            e,
                                            choiceEl.uuid
                                        );
                                    }}
                                />
                                <select
                                    onChange={(e) =>
                                        handleChangeNormalQuiz(e, choiceEl.uuid)
                                    }
                                    className="bg-transparent ml-10 rounded-[10px]"
                                    name="istrue"
                                >
                                    <option value="true" className="">
                                        ○
                                    </option>
                                    <option value="false">×</option>
                                </select>
                                {postQuiz.choices.length > 1 && (
                                    <button
                                        className="text-[12px] font-bold ml-5 border rounded-[5px] duration-300 hover:bg-red-500 border-red-500 px-5 py-[8px]"
                                        onClick={() =>
                                            handleClickDeletechoice(
                                                choiceEl.uuid
                                            )
                                        }
                                    >
                                        delete choice
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div
                        onClick={handleClickAddChoice}
                        className="w-[200px] cursor-pointer border hover:bg-emerald-400 duration-300 border-emerald-400 rounded-[10px] mt-10 px-5 py-[8px] text-center"
                    >
                        add choice
                    </div>
                    <p className="font-bold text-[20px] mt-[50px] block">
                        categories
                        <span className="font-normal text-[10px]">
                            {" "}
                            カテゴリー
                        </span>
                    </p>
                    <div className="grid grid-cols-5 gap-5 mt-[50px]">
                        {categories.map((category: any) => (
                            <div key={category.id} className="relative">
                                <input
                                    onChange={handleChangeNormalQuiz}
                                    type="checkbox"
                                    name="category"
                                    value={category.id}
                                    id={category.id}
                                    className="relative duration-200 bg-zinc-700  text-emerald-600 focus:ring-0 rounded-[2px] w-[120px] h-[25px] p-1"
                                />
                                <label
                                    className="absolute top-0 text-white cursor-pointer flex items-center ml-1"
                                    htmlFor={category.id}
                                >
                                    <div className="w-[15px] h-auto">
                                        {parse(category.category_img)}
                                    </div>
                                    <p className="font-bold ml-1">
                                        {category.category}
                                    </p>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <p className="font-bold text-[20px] mt-[50px] block">
                            Explanation
                            <span className="font-normal text-[10px]">
                                {" "}
                                解説
                            </span>
                        </p>
                        <textarea
                            value={postQuiz.answer}
                            onChange={handleChangeNormalQuiz}
                            name="answer"
                            className="mt-[20px] p-5 w-full border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#1c0930]"
                        ></textarea>
                    </div>
                </form>
            </div>
            <AdminPostedQuiz
                postedQuiz={postedQuizState}
                handleClickDeleteQuiz={handleClickDeleteQuiz}
            />
        </>
    );
}
