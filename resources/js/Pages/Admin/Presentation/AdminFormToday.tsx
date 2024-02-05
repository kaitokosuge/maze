import { count } from "console";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";

export default function AdminFormToday(props: any) {
    const { days, categories } = props;
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
        } catch (error) {
            console.log(error);
        }
    };
    const [choices, handleChoices] = useState<Choices[]>([
        { uuid: uuidv4(), choice: "", istrue: "true" },
    ]);
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
            console.log("choicess", choices);
            console.log(e.target.value);
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
    console.log("postquiz", postQuiz);
    const handleSubmitTodayQuiz = () => {};
    return (
        <>
            <form onSubmit={handleSubmit} className="mt-[0px]">
                <div className="flex justify-between">
                    <div className="font-bold text-xl text-gray-300">
                        Today's quiz を作成
                    </div>
                    <button
                        onClick={handleSubmitTodayQuiz}
                        className="block rounded-[10px] bg-[#2522e6] px-[30px] py-[10px] font-bold"
                    >
                        保存
                    </button>
                </div>
                <p className="font-bold text-[20px] mt-[50px]">
                    Day
                    <span className="font-normal text-[10px]"> 公開日時</span>
                </p>
                <div className="mt-[20px] flex">
                    {days.map((day: string) => (
                        <div
                            id={day}
                            onClick={handleClickDay}
                            className={
                                day === postQuiz.day
                                    ? "text-xl font-bold p-5 border border-gray-500 duration-300 cursor-pointer bg-[#03063e]"
                                    : "text-xl font-bold p-5 border border-gray-500 duration-300 cursor-pointer hover:bg-[#340a38]"
                            }
                        >
                            {day}
                        </div>
                    ))}
                </div>
                <label className="font-bold text-[20px] mt-[50px] block">
                    quiz
                    <span className="font-normal text-[10px]"> クイズ</span>
                </label>
                <textarea
                    onChange={handleChangeTodayQuiz}
                    name="quiz"
                    className="mt-[20px] p-5 w-full border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
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
                        <div key={choiceEl.uuid}>
                            <div>{index + 1}</div>
                            <input
                                className="mt-[20px] p-5 border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
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
                                className="bg-transparent"
                                name="istrue"
                            >
                                <option value="true">○</option>
                                <option value="false">×</option>
                            </select>
                            {postQuiz.choices.length > 1 && (
                                <button
                                    onClick={() =>
                                        handleClickDeletechoice(choiceEl.uuid)
                                    }
                                >
                                    delete
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                <div
                    onClick={handleClickAddChoice}
                    className="w-[200px] cursor-pointer"
                >
                    add
                </div>
                <p className="font-bold text-[20px] mt-[50px] block">
                    categories
                    <span className="font-normal text-[10px]"> カテゴリー</span>
                </p>
                <div className="flex mt-[20px]">
                    {categories.map((category: any) => (
                        <div key={category.id}>
                            <input
                                onChange={handleChangeTodayQuiz}
                                type="checkbox"
                                name="category"
                                value={category.id}
                            />
                            <label className="text-white">
                                {category.category}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="">
                    <p className="font-bold text-[20px] mt-[50px] block">
                        Explanation
                        <span className="font-normal text-[10px]"> 解説</span>
                    </p>
                    <textarea
                        onChange={handleChangeTodayQuiz}
                        name="answer"
                        className="mt-[20px] p-5 w-full border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
                    ></textarea>
                </div>
            </form>
        </>
    );
}
