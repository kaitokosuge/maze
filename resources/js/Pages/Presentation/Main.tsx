import { Quiz, Quizzes } from "@/types/Data/quiz";
import React from "react";

export default function Main({ quizzes, todayQuiz }: any) {
    console.log("main quiz", quizzes);
    return (
        <div className="bg-[#00142C] pt-[100px]">
            {todayQuiz.quiz}
            {quizzes.map((quiz: Quiz) => (
                <>
                    <p>{quiz.quiz}</p>
                    <div>
                        {quiz.choices.map((choice, index) => (
                            <div key={choice.id}>
                                <p>
                                    {index + 1}
                                    {choice.choice}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
}
