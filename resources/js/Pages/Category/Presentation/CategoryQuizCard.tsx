import React, { useState } from 'react'

export default function CategoryQuizCard(props:any) {
    const { quizzes } = props;
    const [ isClick , setIsClick ] = useState(-1);
    const handleQuizShow = (index:number) => {
        if(index === isClick){
            setIsClick(-1);
        } else{
            setIsClick(index);
        }
    }
    return (
    <div className='mt-10'>
                { quizzes.map((quiz: any , index: number) => (
                  <>
                    <div className='px-5 py-[30px] bg-[#001E41] rounded-[20px] mt-5 flex items-center justify-between'>
                        <p className='font-bold text-[16px] text-limit'>{ index + 1 } { quiz.quiz }</p>
                        <data className='font-bold text-[12px] text-gray-500'>{ quiz.created_at.slice(0,-17) }</data>
                        <p className='font-bold text-[12px] text-gray-500'>{ quiz.user.name }</p>
                        <div>
                            {quiz.is_user_true.some(ob => ob.id === 2) === true ? <p className='font-bold text-[#00FFA3]'>done!!!</p> : <p className='font-bold text-[#1b5841]'>not done</p>}
                        </div>
                        <p onClick={ () => handleQuizShow(index) }className='rounded-[10px] bg-[#002E64] w-[100px] text-center px-5 py-[7px] font-bold cursor-pointer'>open</p>
                    </div>
                    <div className={ isClick === index? 'duration-300 opacity-100 px-5 py-[30px] bg-[#001E41] rounded-[20px] mt-1 items-center justify-between' : 'fixed duration-500 bg-[#001E41] rounded-[20px] mt-5 h-0 w-0 opacity-0 items-center justify-between'}>
                        <p className={ isClick === index? 'duration-300 opacity-100':'opacity-0'}>{ quiz.quiz }</p>
                        { quiz.choices.map((choice: any,index: number) => (
                          <div className=''>
                            <p key={ choice.id }>{ index + 1 }{ choice.choice }</p>
                          </div>
                        )) }
                    </div>
                  </>
                )) }
              </div>
    )
}
