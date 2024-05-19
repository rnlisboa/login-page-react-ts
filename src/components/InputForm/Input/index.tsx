import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<any> {
    classes: string
}


function Input({classes = '',...rest}:InputProps) {
    return (
        <input
            className={`border-none outline-none bg-input-bg text-input-text-color h-14 py-[18px] px-[20.25px] placeholder:text-input-text-color ${classes}`}
            {...rest}
        />
    )
}

export default Input;