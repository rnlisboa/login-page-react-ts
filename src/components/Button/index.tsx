
type ButtonProps = {
    type: "submit" | "reset" | "button" | undefined,
    value: string,
}

function Button({...props}:ButtonProps){
    return (
        <button className='bg-button-bg h-14 text-white rounded-lg' type={props.type}>{props.value}</button>
    )
}

export default Button;