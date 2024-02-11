import React, { useState } from "react";
import AdminFormNormal from "./AdminFormNormal";
import AdminFormToday from "./AdminFormToday";

export default function AdminForm(props: any) {
    const { days, categories, showDays, postedTodayQuiz, postedQuiz } = props;
    console.log("postedQuiz", postedQuiz);
    const [isTodayTab, setIsTodayTab] = useState<number>(0);
    const handleTabClick = (num: number) => {
        setIsTodayTab(num);
    };
    return (
        <div className="">
            <div className="mt-[50px]">
                <h3 className="maze--title">｜Quiz making area</h3>
            </div>
            <div className="flex mt-[20px]">
                <div
                    onClick={() => handleTabClick(0)}
                    className={
                        isTodayTab === 1
                            ? "bg-[#0c143d] px-[100px] py-[15px] rounded-t-[10px] cursor-pointer font-bold text-gray-600 hover:text-white duration-500"
                            : "bg-[#001E41] px-[100px] py-[15px] rounded-t-[10px] cursor-pointer font-bold"
                    }
                >
                    Today
                </div>
                <div
                    onClick={() => handleTabClick(1)}
                    className={
                        isTodayTab === 0
                            ? "bg-[#0c143d] px-[100px] py-[15px] rounded-t-[10px] ml-[30px] cursor-pointer font-bold text-gray-600 hover:text-white duration-500"
                            : "bg-[#340a38] px-[100px] py-[15px] rounded-t-[10px] ml-[30px] cursor-pointer font-bold"
                    }
                >
                    Normal
                </div>
            </div>

            {isTodayTab === 0 ? (
                <>
                    <div className="bg-[#001E41] p-10 rounded-b-2xl rounded-r-2xl pb-[100px]">
                        <AdminFormToday
                            days={days}
                            categories={categories}
                            showDays={showDays}
                            postedTodayQuiz={postedTodayQuiz}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-[#340a38] p-10 rounded-b-2xl rounded-r-2xl pb-[100px]">
                        <AdminFormNormal
                            categories={categories}
                            postedQuiz={postedQuiz}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
