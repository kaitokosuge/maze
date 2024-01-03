import React from 'react'
import { Categories, CategoriesProps } from '@/types/Data/categories';
import Sidebar from '../Presentation/Sidebar';
import { Quizzes } from '@/types/Data/quiz';
import Header from '../Presentation/Header';

export default function CategoryContainer( props: any ) {
  const { category , quizzes , categories} = props;
  console.log(quizzes)
  return (
        <div className='flex'>
          <div className='w-[15%]'>
              <Sidebar categories={ categories } />
          </div>
          <div className='bg-[#00142C] w-[85%]'>
            <Header />
            <img src={ category.category_img } className="w-[100px] h-[100px]"/>
            <h2>{ category.category}</h2>
            <p>{ category.category_desc }</p>
              { quizzes.map((quiz: any) => (
                <div>
                  <p>{ quiz.quiz }</p>
                  <div>
                    { quiz.choices.map((choice: any,index: number) => (
                      <p key={ choice.id }>{ index + 1 }{ choice.choice }</p>
                    )) }
                  </div>
                </div>
              )) }
          </div>
        </div>
  )
}
