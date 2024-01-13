import React, { useState } from "react";
import AdminFormNormal from "./AdminFormNormal";
import AdminFormToday from "./AdminFormToday";

export default function AdminForm() {
    const [isTodayTab, setIsTodayTab] = useState<number>(0);
    const handleTabClick = (num: number) => {
        setIsTodayTab(num);
    };
    return (
        <div>
            <div className="mt-[50px]">
                <h2>｜Quiz making area</h2>
            </div>
            <div className="flex mt-[20px]">
                <div
                    onClick={() => handleTabClick(0)}
                    className={
                        isTodayTab === 1
                            ? "bg-[#001E41] px-[30px] py-[8px] rounded-t-[10px] cursor-pointer font-bold text-gray-600 hover:text-white duration-500"
                            : "bg-[#001E41] px-[30px] py-[8px] rounded-t-[10px] cursor-pointer font-bold"
                    }
                >
                    Today
                </div>
                <div
                    onClick={() => handleTabClick(1)}
                    className={
                        isTodayTab === 0
                            ? "bg-[#001E41] px-[30px] py-[8px] rounded-t-[10px] ml-[10px] cursor-pointer font-bold text-gray-600 hover:text-white duration-500"
                            : "bg-[#001E41] px-[30px] py-[8px] rounded-t-[10px] ml-[10px] cursor-pointer font-bold"
                    }
                >
                    Normal
                </div>
            </div>
            <div className="bg-[#001E41]">
                {isTodayTab === 0 ? (
                    <>
                        <AdminFormToday />
                    </>
                ) : (
                    <>
                        <AdminFormNormal />
                    </>
                )}
            </div>
        </div>
    );
}
