import React from "react";
import parse from "html-react-parser";

export default function AdminPostedTodayQuiz(props: any) {
    const { postedTodayQuiz, handleClickDeleteQuiz } = props;
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return (
        <div className="bg-profile mt-10 rounded-[20px] p-10">
            <div className="">
                <div className="font-bold text-xl text-gray-300">
                    Today's quiz your history. You can delete quiz.
                </div>

                {postedTodayQuiz.map((quiz: any) => (
                    <>
                        <div className="mt-10 p-10 bg-stone-950 rounded-[20px]">
                            <div className="">
                                {formattedDate < quiz.showDay ? (
                                    <>
                                        <p className="text-orange-500 font-bold text-[14px]">
                                            公開予定:{quiz.showDay}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-emerald-500 font-bold text-[14px]">
                                            公開中:{quiz.showDay}
                                        </p>
                                    </>
                                )}
                            </div>
                            <div className="flex items-start justify-between mt-5">
                                <p className="w-[75%] font-bold duration-700 opacity-100">
                                    {quiz.quiz}
                                </p>
                                <button
                                    onClick={(e) => {
                                        const isConfirmed = window.confirm(
                                            `title:"${quiz.quiz}"のクイズを削除しますか？`
                                        );
                                        if (isConfirmed) {
                                            handleClickDeleteQuiz(e, quiz.id);
                                        }
                                    }}
                                    className="hover:bg-[#9e1919] hover:scale-105 duration-300 block rounded-[10px] bg-[#6f1111] px-[30px] py-[10px] font-bold"
                                >
                                    削除する
                                </button>
                            </div>

                            <div className="grid grid-cols-6 gap-5 mt-10">
                                {quiz.categories.map((category: any) => (
                                    <div className="flex items-center">
                                        <div className="w-[15px] h-auto">
                                            {parse(category.category_img)}
                                        </div>
                                        <p className="font-bold text-[14px] ml-1">
                                            {category.category}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-3 gap-5 mt-10">
                                {quiz.choices.map((choice: any) => (
                                    <div
                                        className={
                                            choice.isTrue === 1
                                                ? "rounded-[10px] border border-gray-800 p-5 bg-emerald-900 cursor-pointer "
                                                : "rounded-[10px] border border-gray-800 p-5 cursor-pointer "
                                        }
                                    >
                                        <div>
                                            <p>{choice.choice}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="font-bold duration-700 opacity-100 mt-10">
                                {quiz.answer}
                            </p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
