import { count } from "console";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useToast } from "@/shadcn-ui/ui/use-toast";
import { Toaster } from "@/shadcn-ui/ui/toaster";
import { Filter } from "lucide-react";
import AdminPostedQuiz from "./AdminPostedQuiz";
import AdminPostedTodayQuiz from "./AdminPostedTodayQuiz";
import axios from "axios";

export default function AdminFormToday(props: any) {
    const { categories, showDays, postedTodayQuiz } = props;

    const { toast } = useToast();
    const [viewDays, setViewDays] = useState(showDays);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (postQuiz.day === "") {
            alert("日付を選択してください");
            return;
        }
        try {
            const data = postQuiz;
            const res = await axios.post("/mazer/store/quiz", data);
            if (res.status) {
                const result = res.data;
                if (result.alreadyReserve !== null) {
                    setPostQuiz(postQuiz);
                    alert(`${result.alreadyReserve}`);
                } else if (result.successReserve !== null) {
                    toast({
                        title: "クイズの投稿が完了しました",
                        description: `${postQuiz.day}に投稿されます`,
                    });
                    setViewDays((prev: any) => {
                        return prev.filter(
                            (day: string) => day !== postQuiz.day
                        );
                    });
                    setPostQuiz((prev) => {
                        return {
                            ...prev,
                            quiz: "",
                            day: "",
                            category: [],
                            choices: [
                                { uuid: uuidv4(), choice: "", istrue: "true" },
                            ],
                            answer: "",
                        };
                    });
                }
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    interface PostQuiz {
        quiz: string;
        day: string;
        category: number[];
        choices: Choices[];
        answer: string;
    }
    const [postQuiz, setPostQuiz] = useState<PostQuiz>({
        quiz: "",
        day: "",
        category: [],
        choices: [{ uuid: uuidv4(), choice: "", istrue: "true" }],
        answer: "",
    });
    const handleClickDay = (e: any) => {
        setPostQuiz({
            ...postQuiz,
            day: e.target.id,
        });
    };
    interface Choices {
        uuid: string;
        choice: string;
        istrue: string;
    }

    const handleClickAddChoice = () => {
        const newChoice = { uuid: uuidv4(), choice: "", istrue: "true" };
        console.log("newChoice", newChoice);
        setPostQuiz({
            ...postQuiz,
            choices: [...postQuiz.choices, newChoice],
        });
        console.log("postQuiz", postQuiz);
    };

    const handleClickDeletechoice = (id: string) => {
        setPostQuiz({
            ...postQuiz,
            choices: postQuiz.choices.filter((choice) => choice.uuid !== id),
        });
    };
    const handleChangeTodayQuiz = (e: any, id?: string) => {
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
    const [postedTodayQuizState, setPostedTodayQuiz] =
        useState(postedTodayQuiz);
    const handleClickDeleteQuiz = async (e: any, id: number) => {
        e.preventDefault();

        const res = await axios.delete(`/mazer/delete/quiz/${id}`);
        if (res.status) {
            const data = res.data;
            toast({
                title: `削除が完了しました`,
            });
            setPostedTodayQuiz((prev: any) => {
                return prev.filter((quiz: any) => quiz.id !== data.quiz.id);
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-[0px]">
                <Toaster />
                <div className="flex justify-between">
                    <div className="font-bold text-xl text-gray-300">
                        Today's quiz を作成
                    </div>
                    <button className="hover:bg-[#22e68b] hover:scale-105 duration-300 block rounded-[10px] bg-[#19ac68] px-[30px] py-[10px] font-bold">
                        保存
                    </button>
                </div>
                <p className="font-bold text-[20px] mt-[50px]">
                    Day
                    <span className="font-normal text-[10px]"> 公開日時</span>
                </p>
                <div className="mt-[20px] flex">
                    {viewDays.map((day: string) => (
                        <div
                            id={day}
                            onClick={handleClickDay}
                            className={
                                day === postQuiz.day
                                    ? "active:scale-90 text-xl font-bold p-5 border border-gray-500 duration-300 cursor-pointer bg-[#03063e]"
                                    : "active:scale-90 text-xl font-bold p-5 border border-gray-500 duration-300 cursor-pointer hover:bg-[#340a38]"
                            }
                        >
                            {day.slice(5)}
                        </div>
                    ))}
                </div>
                <label className="font-bold text-[20px] mt-[100px] block">
                    quiz
                    <span className="font-normal text-[10px]"> クイズ</span>
                </label>
                <textarea
                    value={postQuiz.quiz}
                    onChange={handleChangeTodayQuiz}
                    name="quiz"
                    className="mt-[20px] p-5 w-full border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
                    required
                ></textarea>
                <label className="font-bold text-[20px] mt-[100px] block">
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
                                className="ml-[20px] p-5 min-w-[300px] border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
                                type="text"
                                name="choice"
                                onChange={(e) => {
                                    handleChangeTodayQuiz(e, choiceEl.uuid);
                                }}
                            />
                            <select
                                onChange={(e) =>
                                    handleChangeTodayQuiz(e, choiceEl.uuid)
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
                                        handleClickDeletechoice(choiceEl.uuid)
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
                <p className="font-bold text-[20px] mt-[100px] block">
                    categories
                    <span className="font-normal text-[10px]"> カテゴリー</span>
                </p>
                <div className="grid grid-cols-5 gap-5 mt-[50px]">
                    {categories.map((category: any) => (
                        <div key={category.id} className="relative">
                            <input
                                onChange={handleChangeTodayQuiz}
                                type="checkbox"
                                name="category"
                                value={category.id}
                                id={category.id}
                                className="w-full relative duration-200 bg-[#001E41] p-5 rounded-[10px]  text-emerald-600 focus:ring-0 hover:bg-emerald-600 h-[25px]"
                                checked={postQuiz.category.includes(
                                    category.id
                                )}
                            />
                            <label
                                className="w-full absolute top-0 text-white cursor-pointer flex items-center mt-[8px]"
                                htmlFor={category.id}
                            >
                                <div className="w-[15px] h-auto ml-5">
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
                    <p className="font-bold text-[20px] mt-[100px] block">
                        Explanation
                        <span className="font-normal text-[10px]"> 解説</span>
                    </p>
                    <textarea
                        onChange={handleChangeTodayQuiz}
                        value={postQuiz.answer}
                        name="answer"
                        className="mt-[20px] p-5 w-full border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
                        required
                    ></textarea>
                </div>
            </form>
            <AdminPostedTodayQuiz
                postedTodayQuiz={postedTodayQuizState}
                handleClickDeleteQuiz={handleClickDeleteQuiz}
            />
        </>
    );
}
