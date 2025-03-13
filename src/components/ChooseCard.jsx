import React from 'react'

const ChooseCard = ({ imgSrc, title, des }) => {
    return (
        <div>
            <img className='h-[70px] w-[70px] object-contain' src={imgSrc} alt={title} />
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
