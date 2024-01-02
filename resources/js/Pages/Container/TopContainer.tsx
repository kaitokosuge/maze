import React, { useState } from 'react'
import { User } from '@/types';
import Page from '../Presentation/Page';
import { TopContainerProps } from '@/types/TopContainerProps';



export default function TopContainer( { user , quizzes , categories }: TopContainerProps ) {
    const [ stateQuizzes , setQuizzes ] = useState(quizzes);

    const fetchCategoryQuizzes = async (e: any) => {
        e.preventDefault();
        console.log('hicategory')
        const res = await fetch(`/get/quizzes/`,{
            method:'GET',
        })
        if(res.ok){
            const categoryQuizzes = await res.json();
            setQuizzes(categoryQuizzes)
        }
    }
    
    return (
        <>
            <Page 
                user={ user } quizzes={ stateQuizzes } categories={ categories }
            />
        </>
    )
}
