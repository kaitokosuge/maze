import { Quiz } from "@/types/Data/quiz";
import React from "react";

export default function TopAllQuiz(props: any) {
    const { quizzes } = props;
    return (
        <div>
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
