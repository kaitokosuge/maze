import React, { useState } from "react";
import { User } from "@/types";
import Page from "../Presentation/Page";
import { TopContainerProps } from "@/types/TopContainerProps";

export default function TopContainer({
    user,
    quizzes,
    categories,
    todayQuiz,
}: any) {
    const [stateQuizzes, setQuizzes] = useState(quizzes);

    return (
        <>
            <Page
                user={user}
                todayQuiz={todayQuiz}
                quizzes={stateQuizzes}
                categories={categories}
            />
        </>
    );
}
