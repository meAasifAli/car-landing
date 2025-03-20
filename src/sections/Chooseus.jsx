import React from 'react'
import ChooseCard from '../components/ChooseCard'
import { motion } from 'motion/react'

const Chooseus = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="choose-us" aria-labelledby='choose-us-heading' className='py-4 sm:py-0 sm:h-screen md:h-screen lg:h-screen flex flex-col justify-center items-center bg-blue-900'>
            <motion.h1
                initial={{ opacity: 0, y: 20, }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                id='choose-us-heading' className="lg:text-3xl md:text-2xl sm:tex-xl text-xl font-bold text-center py-4 lg:py-16 text-white">Why Show US?</motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20, }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  gap-4 mt-4 w-[90%] mx-auto">
                <ChooseCard
                    imgSrc={"https://cdn-icons-mp4.flaticon.com/512/12147/12147233.mp4"}
                    title={"Get the Best Price for Your Car"}
                    des={"We offer top-dollar, fair, and competitive cash offers for your junk or used car in minutes—no waiting, no hassle!."}
                />
                <ChooseCard
                    imgSrc={"https://cdn-icons-mp4.flaticon.com/512/16045/16045990.mp4"}
                    title={"Fast, Simple & Convenient"}
                    des={" Skip the stress of private sales. We handle everything—from free pickup to instant cash payment, with zero hidden fees."}
                />
                <ChooseCard
                    imgSrc={"https://cdn-icons-mp4.flaticon.com/512/18996/18996227.mp4"}
                    title={"Safe, Secure & Reliable"}
                    des={" We are a licensed, reputable car buyer with hundreds of satisfied sellers. No scams, no lowball offers—just a fair deal!"}
                />
                <ChooseCard
                    imgSrc={"https://cdn-icons-mp4.flaticon.com/512/16072/16072612.mp4"}
                    title={"We Come to You – No Towing Fees!"}
                    des={"No need to drop off your car! We offer free pickup & inspection anywhere in San Diego, making the process seamless."}
                />

            </motion.div>
        </motion.section>
    )
}

export default Chooseus