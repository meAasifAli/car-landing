import React from 'react'
import { locations } from '../static/data'
import { CiLocationOn } from 'react-icons/ci'
import { motion } from 'motion/react'

const Locations = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id='car-locations' aria-labelledby='car-locations' className='lg:my-16 my-4'>
            <motion.h1
                initial={{ opacity: 0, y: 20, }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='md:text-2xl sm:text-xl text-xl font-bold tracking-wider leading-10 text-center  underline py-4 lg:py-16'>We Buy Cars in all these cities</motion.h1>
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 mt-8 mx-auto w-[90%] py-8">
                {locations?.map((location, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        key={index} className="flex items-center space-x-2">
                        <CiLocationOn size={20} className='text-blue-900' />
                        <span className='text-xs sm:text-sm text-blue-900'>{location}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    )
}

export default Locations