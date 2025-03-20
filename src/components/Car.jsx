import React from 'react'
import { BsFillFuelPumpDieselFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { IoIosSpeedometer } from 'react-icons/io'


const Car = ({ title, des, miles, fuelType, location, marketPrice, ourPrice, imgSrc }) => {
    return (
        <div className='w-[350px] mr-6 h-[500px] rounded-2xl'>
            <img className='w-full h-[200px] object-cover rounded-t-2xl' src={imgSrc} alt={imgSrc} />
            <div className='pt-4 bg-black px-6 flex flex-col justify-center items-start rounded-b-2xl'>
                <h2 className='text-white font-medium text-lg text-start line-clamp-1'>{title}</h2>
                <p className='text-white font-normal text-sm text-start line-clamp-1'>{des}</p>
                <div className='flex justify-between items-center w-full mt-4'>
                    <div>
                        <IoIosSpeedometer size={30} color='#fff' />
                        <h2 className='text-white font-normal text-sm mt-2'>{miles}</h2>
                    </div>
                    <div>
                        <BsFillFuelPumpDieselFill size={30} color='#fff' />
                        <h2 className='text-white font-normal text-sm mt-2'>{fuelType}</h2>
                    </div>
                    <div>
                        <CiLocationOn size={30} color='#fff' />
                        <h2 className='text-white font-normal text-sm mt-2'>{location}</h2>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full mt-4 pb-4'>
                    <div>

                        <h1 className='text-white font-bold text-xl mt-2'>{`$${marketPrice}`}</h1>
                    </div>
                    <button className='flex items-center gap-4 bg-[#425bac] py-2 px-2 rounded-lg'>
                        <h2 className='text-white font-normal text-sm '>Our Price | {`$${ourPrice}`}</h2>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Car