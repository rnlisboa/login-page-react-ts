import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
    
    classes?: string[]

}

function Button({ classes, ...rest }: ButtonProps) {
    return (
        <button
            className={`bg-button-bg text-white rounded-lg w-[272px] ${classes ? classes.join(' ') : ''}`}
            {...rest}>
            {rest.value}
        </button>
    )
}

export default Button;