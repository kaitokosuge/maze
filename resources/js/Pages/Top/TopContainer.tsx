import React, { useState } from "react";
import Sidebar from "../Presentation/Sidebar";
import Header from "../Presentation/Header";
import Main from "./Presentation/TopMain";
import TopMain from "./Presentation/TopMain";

export default function TopContainer({
    user,
    quizzes,
    categories,
    todayQuiz,
    allRate,
}: any) {
    const [stateQuizzes, setQuizzes] = useState(quizzes);

    return (
        <>
            <div>
                <div className="flex">
                    <div className="w-[15%] h-screen relative">
                        <Sidebar
                            categories={categories}
                            user={user}
                            allRate={allRate}
                        />
                    </div>
                    <div className="w-[85%]">
                        <Header />
                        <TopMain
                            quizzes={quizzes}
                            todayQuiz={todayQuiz}
                            user={user}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
