import React, { useState } from "react";

export default function AdminFormToday(props: any) {
    const { days, categories } = props;
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
        } catch (error) {
            console.log(error);
        }
    };
    //const [isClickDay, setIsClickDay] = useState<boolean>();
    const [postQuiz, setPostQuiz] = useState({
        quiz: "",
        day: "",
        category: [],
        choices: [],
        answer: "",
    });
    const handleClickDay = (e: any) => {
        setPostQuiz({
            ...postQuiz,
            day: e.target.id,
        });
    };
    const [choices, setChoices] = useState([0, 1]);

    const handleChangeTodayQuiz = (e: any) => {
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
                    console.log("done");
                    return {
                        ...prev,
                        [e.target.name]: [...postQuiz.category].filter(
                            (value) => value !== Number(e.target.value)
                        ),
                    };
                });
            }
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
                    {choices.map((choice, index) => (
                        <>
                            <span className="rounded-[20px]">{index + 1}</span>
                            <input
                                type="text"
                                className="mt-[20px] p-5 border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
                            />
                            <select className=" bg-inherit text-white rounded-[10px]">
                                <option className="text-white" value="◯">
                                    ○
                                </option>
                                <option className="text-white" value="false">
                                    ×
                                </option>
                            </select>
                        </>
                    ))}
                </div>
                <div className="cursor-pointer">add</div>
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
