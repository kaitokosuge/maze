import { Categories, CategoriesProps } from '@/types/Data/categories';
import { TopContainerProps } from '@/types/TopContainerProps'
import React from 'react'
import { Link } from '@inertiajs/react'


export default function Sidebar({ categories }: CategoriesProps ) {
    return (
        <div className='bg-[#000238] fixed left-0 w-[15%] h-screen'>
            <h1 className='font-bold maze--title text-[30px] text-white w-[85%] m-auto flex items-center duration-300 p-5'><img src="/maze_logo.png" className="w-[40px] h-[40px]"/><span className='block pt-1'>MAZE</span></h1>
            <div className='border-t border-gray-500 w-[85%] m-auto py-5'>
                <Link href="/top" className='font-bold text-[16px] text-white w-[100%] p-5 m-auto hover:bg-[#001358] duration-300 flex rounded-[10px]'><img src="/home.png" className="w-[20px] h-[20px] mr-5 rounded-[5px]"/><span className='block'>HOME</span></Link>
                <Link href="/profile"className='font-bold text-[16px] text-white w-[100%] p-5 m-auto hover:bg-[#001358] duration-300 block rounded-[10px]'>profile</Link>
            </div>
            <div className='border-t border-gray-500 w-[85%] m-auto pt-5'>
                {categories.map((category) => (
                    <>
                        <Link href={`/quiz/${category.id}`} className='font-bold text-[16px] text-white w-[100%] p-5 m-auto hover:bg-[#000458] duration-300 rounded-[10px] flex items-center'><img src={ category.category_img } className="w-[20px] h-[20px] mr-5 rounded-[5px]"/><span className='block'>{ category.category }</span></Link>
                    </>
                ))}
            </div>
        </div>
    )
}
