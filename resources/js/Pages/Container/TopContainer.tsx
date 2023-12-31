import React from 'react'
import { User } from '@/types';
import Page from '../Presentation/Page';
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
export interface TopContainerProps {
    user:User;
    quizzes:Array<Quiz>;
    categories:Array<Category>;
}

export default function TopContainer( { user , quizzes , categories }: TopContainerProps ) {
    console.log('quiz',quizzes);
    console.log('user',user);
    console.log('categories',categories);
    return (
        <>
            <Page user={ user } quizzes={ quizzes } categories={ categories }/>
        </>
    )
}
