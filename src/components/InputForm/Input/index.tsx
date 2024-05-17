
type InputProps = {
    value: string,
    setValue: (value: string) => void,
    placeholder: string,
    id: string,
    type: string
}


function Input({...props}:InputProps) {
    return (
        <input
            type={props.type}
            id={props.type}
            className='border-none outline-none bg-input-bg text-input-text-color rounded-lg h-14 py-[18px] px-[20.25px] placeholder:text-input-text-color'
            value={props.value}
            placeholder={props.placeholder}
            onChange={(e) => props.setValue(e.target.value)}
            required
        />
    )
}

export default Input;