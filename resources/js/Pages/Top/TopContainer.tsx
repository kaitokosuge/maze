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
    comments,
    likescount,
    likeCheck,
    testquiz,
}: any) {
    const [stateQuizzes, setQuizzes] = useState(quizzes);

    return (
        <>
            <div className="flex">
                <div className="md:w-[15%] w-0 md:block md:left-0 left-[-280px] relative">
                    <Sidebar
                        categories={categories}
                        user={user}
                        allRate={allRate}
                    />
                </div>
                <div className="md:w-[85%] w-full">
                    <Header />
                    <TopMain
                        quizzes={quizzes}
                        todayQuiz={todayQuiz}
                        user={user}
                        comments={comments}
                        likescount={likescount}
                        likeCheck={likeCheck}
                        testquiz={testquiz}
                    />
                </div>
            </div>
            <div className="bg-footer w-full h-[60px] fixed bottom-0"></div>
        </>
    );
}
