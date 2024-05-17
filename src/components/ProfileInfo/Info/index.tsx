function Info({info}: {info:string | undefined}){
    return (
        <div className="bg-input-bg rounded-lg h-14 py-[18px] px-[20.25px]">
            {info}
        </div>
    )
}

export default Info;