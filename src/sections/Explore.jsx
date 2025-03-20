import React from 'react'

const Explore = () => {
    return (
        <section id="banner-2" aria-labelledby='banner-2' className='bg-blue-100 lg:h-screen flex  flex-col lg:flex-row justify-center lg:justify-between md:px-8 px-4 lg:px-16 items-center py-4'>
            <div>
                <h3 className='text-3xl font-bold tracking-widest leading-10'>Explore Our Premium Brands</h3>
                <p className='text-sm font-normal leading-6 tracking-wider max-w-[600px] mt-6'>At Ecology Cash For Cars, we work with a wide range of vehicle brands, ensuring that no matter what type of car you own, we have a solution for you. From economy cars to luxury brands, we purchase vehicles of all makes and models. Whether you own a Toyota, Ford, BMW, Honda, Mercedes-Benz, Chevrolet, Nissan, or any other brand, we will offer you the best price. Our streamlined process makes selling your car easy, fast, and profitable. Get in touch today and turn your car into cash!</p>
                <button className='bg-black p-4 text-cyan-50 my-6 rounded-2xl hover:bg-black/70 hover:transition-all delay-75 duration-500 ease-linear'>
                    Show All Brands
                </button>
            </div>
            <div>
                <img className='lg:h-[500px] lg:w-[500px] md:w-[300px] md:h-[300px] h-[300px] w-[300px]  object-contain' src="https://demoapus1.com/boxcar/wp-content/uploads/2023/09/logo-brand.png" alt="bg-img" />
            </div>
        </section>
    )
}

export default Explore