

const Category = ({ Icon, text }) => {
    return (
        <li>
            <button
                className="h-[100px] w-[120px]  px-4 border border-[#e1dada] rounded-lg flex flex-col gap-4 justify-center items-center hover:bg-amber-50 transition-all delay-75 duration-300 ease-in-out"
                aria-label={text}
            >
                {Icon}
                <p className="text-center text-[16px] font-medium">{text}</p>
            </button>
        </li>
    )
}

export default Category