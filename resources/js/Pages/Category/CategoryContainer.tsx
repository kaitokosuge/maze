import React from 'react'
import { Categories, CategoriesProps } from '@/types/Data/categories';
import Sidebar from '../Presentation/Sidebar';
import { Quizzes } from '@/types/Data/quiz';
import Header from '../Presentation/Header';

export default function CategoryContainer( props: any ) {
  const { category , quizzes , categories } = props;
  console.log(quizzes)
  return (
        <div className='flex'>
          <div className='w-[15%]'>
              <Sidebar categories={ categories } />
          </div>
          <div className='bg-[#00142C] bg-test w-[85%] h-screen'>
            <Header />
            <div className='pt-[100px] pl-[40px] pr-5'>
              <div className='flex'>
                <img src={ category.category_img } className="w-[100px] h-[100px]"/>
                <div className='ml-5'>
                  <h2 className='font-bold text-4xl'>{ category.category}</h2>
                  <p className='text-gray-500 text-[12px] mt-5'>{ category.category_desc }</p>
                </div>
              </div>
              <div className='mt-10'>
                { quizzes.map((quiz: any , index: number) => (
                  <div className='px-5 py-[30px] bg-[#001E41] rounded-[20px] mt-5 flex items-center justify-between'>
                    <p className='font-bold text-[16px] text-limit'>{ index + 1 } { quiz.quiz }</p>
                    <data className='font-bold text-[12px]'>{ quiz.created_at.slice(0,-17) }</data>
                    <p className='font-bold text-[12px]'>{ quiz.user.name }</p>
                    <p className='rounded-[10px] bg-[#002E64] w-[100px] text-center px-5 py-[7px] font-bold cursor-pointer'>open</p>
                    {/* <div>
                      { quiz.choices.map((choice: any,index: number) => (
                        <div className=''>
                          <p key={ choice.id }>{ index + 1 }{ choice.choice }</p>
                        </div>
                      )) }
                    </div> */}
                  </div>
                )) }
              </div>
            </div>
          </div>
        </div>
  )
}
