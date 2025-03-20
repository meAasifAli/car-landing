import React from 'react'
import { locations } from '../static/data'
import { CiLocationOn } from 'react-icons/ci'

const Locations = () => {
    return (
        <section id='car-locations' aria-labelledby='car-locations' className='lg:my-16 my-4'>
            <h1 className='md:text-2xl sm:text-xl text-xl font-bold tracking-wider leading-10 text-center  underline py-4 lg:py-16'>We Buy Cars in all these cities</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 mt-8 mx-auto w-[90%] py-8">
                {locations?.map((location, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <CiLocationOn size={20} className='text-blue-900' />
                        <span className='text-xs sm:text-sm text-blue-900'>{location}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Locations