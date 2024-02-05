import React from "react";

export default function AdminCalender(props: any) {
    const { days } = props;
    console.log("days", days);
    return (
        <div className="mt-[100px] ">
            <h2>｜Today's Quiz schedule</h2>
            <div className="border border-pink-950 mt-[20px] rounded-[20px] p-5 flex justify-between">
                {days.map((day: string) => (
                    <div className="w-[12%] border-r border-pink-950 last:border-none">
                        <p className="font-bold text-gray-400 text-3xl text-center">
                            {day}
                        </p>
                        <p className="text-center text-gray-500 font-bold mt-[30px]">
                            empty
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
