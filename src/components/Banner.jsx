

const Banner = ({ heading, des, imgSrc, alt, bgColor }) => {
    return (
        <div role='banner' className={`relative lg:h-[400px] py-4 flex-1/2 ${bgColor} rounded-2xl flex flex-col gap-2 lg:gap-4 justify-center items-start pl-4 md:pl-8 lg:pl-16`}>
            <h1 className='font-semibold texl-xl md:text-2xl lg:text-3xl lg:max-w-2xs leading-10 tracking-wider'>{heading}</h1>
            <p className='text-sm font-normal leading-5 tracking-wider mb-2'>{des}</p>
            <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-black/60 transition-all duration-300'>Get Started</button>
            <img className='absolute right-5 bottom-2 lg:bottom-10 lg:right-10 h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] object-cover' src={imgSrc} alt={alt} />
        </div>
    )
}

export default Banner