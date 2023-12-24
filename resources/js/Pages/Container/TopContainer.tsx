import React from 'react'
import { User } from '@/types';
interface Quiz {
    id: number;
    quiz: string;
    answer: string;
    image: string;
    user_id: number;
}
interface Category {
    id:number;
    category:string;
    category_desc:string;
    category_img:string;
}
interface TopContainerProps {
    user:User,
    quiz:Quiz,
    categories:Category;
}

export default function TopContainer( { user , quiz , categories }: TopContainerProps ) {
    console.log('user',user)
    console.log('quiz',quiz)
    console.log('categories',categories)
    return (
        <div>
            <p>{ user.name }</p>
            <p>hi</p>
        </div>
    )
}
