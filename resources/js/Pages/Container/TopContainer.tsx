import React from 'react'
import { User } from '@/types';
import Page from '../Presentation/Page';
import { TopContainerProps } from '@/types/TopContainerProps';



export default function TopContainer( { user , quizzes , categories }: TopContainerProps ) {
    return (
        <>
            <Page user={ user } quizzes={ quizzes } categories={ categories }/>
        </>
    )
}
