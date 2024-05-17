type LabelProps = {
    htmlFor: string,
    label: string,
}

function Label({label,htmlFor}:LabelProps) {
    return (
        <label className='font-bold' htmlFor={htmlFor}>{label}</label>
    )
}

export default Label;