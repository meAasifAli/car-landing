import React from 'react'
import Banner from '../components/Banner'

const Banners = () => {
    return (
        <section className='flex flex-col md:flex-row items-center gap-8 w-[90%] mx-auto py-4 md:py-8 lg:py-16' id="banner" aria-labelledby='banner'>
            <Banner
                heading={"Looking to Sell Your Car?"}
                des={"We are dedicated to providing our customers with a smooth, hassle-free selling experience. Whether your car is old, damaged, or simply no longer needed, we make the process quick and easy. Our team ensures you receive a fair offer with exceptional service every step of the way."}
                imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/electric-car.svg"}
                alt="car-rent-image"
                bgColor="bg-slate-300"
            />
            <Banner
                heading={"Looking to Sell Your Junk Pickup Truck?"}
                des={"We make selling your old, damaged, or non-running truck easy and hassle-free. No matter the condition, we offer top dollar and provide free towing for a seamless experience. Our team is dedicated to offering exceptional service, ensuring a quick and stress-free process."}
                imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/electric-car2.svg"}
                alt="car-sell-image"
                bgColor="bg-red-100"
            />


        </section>
    )
}

export default Banners