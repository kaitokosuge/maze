import React from 'react'

export default function Header() {
      
  return (
        <div className='fixed z-20 p-5 flex justify-end w-[85%]'>
            <input type="text" placeholder="🔎 serch quiz"className='tracking-wider focus:border-gray-300 focus:ring-0 duration-500 text-white border-gray-800 text-[16px] w-[500px] block rounded-[15px] bg-transparent'/>
        </div>
  ) 
}
