import React from 'react'
import { User } from '@/types';
interface Quiz {
    id: number;
    quiz: string;
    answer: string;
    image: string;
    user_id: number;
}
interface TopContainerProps {
    user:User,
    quiz:Quiz,
}

export default function TopContainer( {user , quiz}:TopContainerProps ) {
    console.log('user',user)
    console.log('quiz',quiz)
    return (
        <div>
            <p>{ user.name }</p>
            <p>hi</p>
        </div>
    )
}
