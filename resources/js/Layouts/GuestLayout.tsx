import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex sm:justify-center bg-[#00142C] overflow-hidden">
            <div className="w-[50%] bg-colorfull-100 h-screen relative z-10 overflow-hidden">
                <h1 className='maze--title text-white font-bold text-[180px] m-auto mt-[120px] w-fit'>MAZE</h1>
                <div className="maze--line line01"></div>
                <div className="maze--line line02"></div>
                <div className="maze--line line03"></div>
                <div className="maze--line line04"></div>
                <div className="maze--line line05"></div>
            </div>
            <div className="w-[50%] relative z-20">
                {children}
            </div>
        </div>
    );
}
