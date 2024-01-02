import React from 'react'
import { Categories, CategoriesProps } from '@/types/Data/categories';
import Sidebar from '../Presentation/Sidebar';
import { Quizzes } from '@/types/Data/quiz';

export default function CategoryContainer( props: any ) {
  const { category , quizzes , categories} = props;
  return (
        <>
          <div className=''>
              <Sidebar categories={ categories } />
          </div>
          <p>{ category.category}</p>
        </>
  )
}
