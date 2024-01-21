import React from "react";

export default function AdminFormToday() {
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="mt-[0px]">
                <div className="flex justify-between">
                    <div className="font-bold text-xl text-gray-300">
                        Today's quiz を作成
                    </div>
                    <button className="block rounded-[10px] bg-[#2522e6] px-[30px] py-[10px] font-bold">
                        保存
                    </button>
                </div>
                <p className="font-bold text-[20px] mt-[50px]">
                    Day<span className="font-normal text-[10px]"> 日時</span>
                </p>
                <div className="mt-[20px] flex">
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                    <div className="text-xl font-bold p-5 border border-gray-500">
                        1/15
                    </div>
                </div>
                <label className="font-bold text-[20px] mt-[50px] block">
                    quiz
                    <span className="font-normal text-[10px]"> クイズ</span>
                </label>
                <textarea
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
                    <span>1</span>
                    <input
                        type="text"
                        className="mt-[20px] p-5 border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
                    />
                    <span className="w-[50px] h-[50px]">○</span>
                </div>
                <p className="font-bold text-[20px] mt-[50px] block">
                    categories
                    <span className="font-normal text-[10px]"> カテゴリー</span>
                </p>
                <div className="flex mt-[20px]">
                    <div>
                        <input
                            type="checkbox"
                            name="category"
                            id="JavaScript"
                        />
                        <label htmlFor="JavaScript" className="text-yellow-500">
                            JavaScript
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="category"
                            id="JavaScript"
                        />
                        <label htmlFor="JavaScript" className="text-blue-500">
                            Python
                        </label>
                    </div>
                </div>
                <div className="">
                    <p className="font-bold text-[20px] mt-[50px] block">
                        Explanation
                        <span className="font-normal text-[10px]"> 解説</span>
                    </p>
                    <textarea
                        name="answer"
                        className="mt-[20px] p-5 w-full border outline-none border-gray-600 rounded-[10px] focus:border-gray-400 focus:ring-0 focus:appearance-none focus:outline-none duration-300 bg-[#001E41]"
                    ></textarea>
                </div>
            </form>
        </>
    );
}
