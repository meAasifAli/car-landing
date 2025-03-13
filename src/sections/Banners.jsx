import React from 'react'
import Banner from '../components/Banner'

const Banners = () => {
    return (
        <section className='flex flex-col md:flex-row items-center gap-8 w-[90%] mx-auto py-4 md:py-8 lg:py-16' id="banner" aria-labelledby='banner'>
            <Banner
                heading={"Are You Looking for a car?"}
                des={"we are committed to providing our customers with the exceptional services."}
                imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/electric-car.svg"}
                alt="car-rent-image"
                bgColor="bg-slate-300"
            />
            <Banner
                heading={"DO you want to sell a car?"}
                des={"we are committed to providing our customers with the exceptional services."}
                imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/electric-car2.svg"}
                alt="car-sell-image"
                bgColor="bg-red-100"
            />


        </section>
    )
}

export default Banners