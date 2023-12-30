import React from 'react'
import { User } from '@/types';
interface Quiz {
    id: number;
    quiz: string;
    answer: string;
    image: string;
    user_id: number;
    choices: Array<Choices>
}
interface Choices {
    id: number;
    choice: string;
}
interface Category {
    id:number;
    category:string;
    category_desc:string;
    category_img:string;
}
interface TopContainerProps {
    user:User;
    quiz:Array<Quiz>;
    categories:Array<Category>;
}

export default function TopContainer( { user , quiz , categories }: TopContainerProps ) {
    console.log(quiz);
    return (
        <>
            <p>{ user.name }</p>
            <p>{categories.map((category) => (
                <>
                    <p>{ category.category }</p>
                </>
            ))}</p>
            {quiz.map((question) => (
                <>
                    <p>{ question.quiz }</p>
                    <p>{ question.answer }</p>
                    <div>
                        { question.choices.map((choice) => (
                            <>
                                <p>{ choice.choice }</p>
                            </>
                        )) }
                    </div>
                </>
            ))}
        </>
    )
}
