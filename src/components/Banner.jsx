

const Banner = ({ heading, des, imgSrc, alt, bgColor }) => {
    return (
        <div role='banner' className={`relative h-[400px] flex-1/2 ${bgColor} rounded-3xl flex flex-col gap-4 justify-center items-start pl-16`}>
            <h1 className='font-semibold text-3xl max-w-2xs leading-10 tracking-wider'>{heading}</h1>
            <p className='text-sm font-normal max-w-sm leading-5 tracking-wider'>{des}</p>
            <button className='bg-black text-white px-4 py-2 rounded-lg hover:bg-black/60 transition-all duration-300'>Get Started</button>
            <img className='absolute bottom-10 right-10 h-[100px] w-[100px] object-cover' src={imgSrc} alt={alt} />
        </div>
    )
}

export default Banner