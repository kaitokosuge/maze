import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'bg-force px-[10px] py-[12px] outline-0 ring-0 border-t-0 border-x-0 border-b-2 border-gray-700 focus:border-b-gray-400 focus:ring-0 focus:outline-0 duration-500 bg-[#140034]  w-full mt-[10px] text-white font-bold text-[18px]'
            }
            ref={localRef}
        />
    );
});
