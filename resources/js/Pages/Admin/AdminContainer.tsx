import React from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";
import AdminCalender from "./Presentation/AdminCalender";
import AdminForm from "./Presentation/AdminForm";

export default function AdminContainer(props: any) {
    const { categories, days, showDays, reserveQuizzes, user, allRate } = props;
    return (
        <div>
            <div className="flex">
                <div className="w-[15%]">
                    <Sidebar
                        categories={categories}
                        user={user}
                        allRate={allRate}
                    />
                </div>
                <div className={`bg-[#00142C] w-[85%] min-h-screen]`}>
                    <Header />
                    <div className="pl-[40px] pr-[50px] pt-[60px]">
                        <h2 className="text-[50px] font-bold">
                            <span className="maze--title maze--title--gra">
                                MAZE
                            </span>{" "}
                            <span className="text-[20px]">ADMIN</span>
                        </h2>
                        <AdminCalender
                            reserveQuizzes={reserveQuizzes}
                            days={days}
                        />
                        <AdminForm
                            days={days}
                            categories={categories}
                            showDays={showDays}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
