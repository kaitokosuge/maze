import React from "react";
import Header from "../Presentation/Header";
import Sidebar from "../Presentation/Sidebar";
import AdminCalender from "./Presentation/AdminCalender";
import AdminForm from "./Presentation/AdminForm";

export default function AdminContainer(props: any) {
    const {
        categories,
        days,
        showDays,
        reserveQuizzes,
        user,
        allRate,
        postedTodayQuiz,
        postedQuiz,
    } = props;
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
                <div className={`bg-[#00142C] w-[85%] min-h-screen pb-10`}>
                    <Header />
                    <div className="pl-[40px] pr-[50px] pt-[60px]">
                        <h2 className="maze--title text-[30px] font-bold">
                            <span className="maze--title--gra">MAZER</span>{" "}
                            <span className="text-[16px] text-gray-500">
                                for ADMIN
                            </span>
                        </h2>
                        <AdminCalender
                            reserveQuizzes={reserveQuizzes}
                            days={days}
                        />
                        <AdminForm
                            days={days}
                            categories={categories}
                            showDays={showDays}
                            postedTodayQuiz={postedTodayQuiz}
                            postedQuiz={postedQuiz}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
