import React from 'react'
import { BsFillFuelPumpDieselFill } from 'react-icons/bs'
import { GiGearStickPattern } from 'react-icons/gi'
import { IoIosSpeedometer } from 'react-icons/io'
import { MdArrowOutward } from 'react-icons/md'

const Car = () => {
    return (
        <div className='w-[350px] mr-6 h-[500px] rounded-2xl'>
            <img className='w-full h-[200px] object-cover rounded-t-2xl' src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/car9-660x440.jpg" alt="item 1" />
            <div className='pt-4 bg-black px-6 flex flex-col justify-center items-start rounded-b-2xl'>
                <h2 className='text-white font-medium text-lg text-center'>Food Transit 2021</h2>
                <p className='text-white font-normal text-sm text-center'>4.0 D5 PowerPulse Monentum ...</p>
                <div className='flex justify-between items-center w-full mt-4 '>
                    <div>
                        <IoIosSpeedometer size={30} color='#fff' />
                        <h2 className='text-white font-normal text-sm mt-2'>20 Miles</h2>
                    </div>
                    <div>
                        <BsFillFuelPumpDieselFill size={30} color='#fff' />
                        <h2 className='text-white font-normal text-sm mt-2'>Petrol</h2>
                    </div>
                    <div>
                        <GiGearStickPattern size={30} color='#fff' />
                        <h2 className='text-white font-normal text-sm mt-2'>Manual</h2>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full mt-4 pb-4'>
                    <div>

                        <h1 className='text-white font-bold text-xl mt-2'>$9000</h1>
                    </div>
                    <button className='flex items-center gap-4 bg-[#425bac] py-2 px-2 rounded-lg'>
                        <h2 className='text-white font-normal text-sm mt-2'>View Details</h2>
                        <MdArrowOutward size={20} color='#fff' />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Car