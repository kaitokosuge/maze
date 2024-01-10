import React from "react";
import { TopContainerProps } from "@/types/TopContainerProps";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

export default function Page({ user, quizzes, categories, todayQuiz }: any) {
    return (
        <div>
            <div className="flex">
                <div className="w-[15%] h-screen relative">
                    <Sidebar categories={categories} />
                </div>
                <div className="w-[85%]">
                    <Header />
                    <Main quizzes={quizzes} todayQuiz={todayQuiz} />
                </div>
            </div>
        </div>
    );
}
