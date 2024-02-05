import React from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";
import AdminCalender from "./Presentation/AdminCalender";
import AdminForm from "./Presentation/AdminForm";

export default function AdminContainer(props: any) {
    const { categories, days } = props;
    //console.log("s", categories);
    return (
        <div>
            <div className="flex">
                <div className="w-[15%]">
                    <Sidebar categories={categories} />
                </div>
                <div className={`bg-[#00142C] w-[85%] min-h-screen`}>
                    <Header />
                    <div className="pl-[40px] pr-[50px]">
                        <AdminCalender days={days} />
                        <AdminForm days={days} categories={categories} />
                    </div>
                </div>
            </div>
        </div>
    );
}
