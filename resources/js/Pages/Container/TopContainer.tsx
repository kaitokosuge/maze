import React, { useState } from 'react'
import { User } from '@/types';
import Page from '../Presentation/Page';
import { TopContainerProps } from '@/types/TopContainerProps';



export default function TopContainer( { user , quizzes , categories }: TopContainerProps ) {
    const [ stateQuizzes , setQuizzes ] = useState(quizzes);
    return (
        <>
            <Page user={ user } quizzes={ stateQuizzes } categories={ categories }/>
        </>
    )
}
