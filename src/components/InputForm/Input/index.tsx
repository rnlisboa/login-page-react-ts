import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<any> {

}


function Input({...rest}:InputProps) {
    return (
        <input
            type={rest.type}
            id={rest.type}
            className='border-none outline-none bg-input-bg text-input-text-color rounded-lg h-14 py-[18px] px-[20.25px] placeholder:text-input-text-color'
            value={rest.value}
            placeholder={rest.placeholder}
            onChange={rest.onChange}
            required
        />
    )
}

export default Input;