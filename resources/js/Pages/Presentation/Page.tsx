import React from 'react'
import { TopContainerProps } from '@/types/TopContainerProps';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';


export default function Page({ user , quizzes , categories }: TopContainerProps) {
  return (
    <div>
        <div className=''>
            <Header />
        </div>
        <div className=''>
            <Sidebar categories={ categories } />
        </div>
        <div className=''>
            <Main quizzes={ quizzes }/>
        </div>
    </div>
  )
}
