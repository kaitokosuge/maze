import { LabelHTMLAttributes } from "react";

export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={
                `block text-[12px] text-gray-400 font-bold mt-[10px] ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
