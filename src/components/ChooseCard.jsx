import React from 'react'

const ChooseCard = ({ imgSrc, title, des }) => {
    return (
        <div className='bg-white cursor-pointer  rounded-lg p-2 sm:p-3 md:p-4 hover:scale-105 delay-75 duration-300 ease-in-out'>
            <video
                className='h-[70px] w-[70px] object-cover'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={imgSrc} type="video/mp4" />
            </video>


            <div className='mt-8'>
                <h4 className='text-lg font-medium'>
                    {title}
                </h4>
                <p className='text-sm font-normal leading-6 mt-4'>
                    {des}
                </p>
            </div>
        </div>
    )
}

export default ChooseCard
