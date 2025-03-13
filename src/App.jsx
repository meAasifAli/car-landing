import React, { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Category from './components/Category'
import { TbCarSuv } from "react-icons/tb";
import { FaCar, FaCarAlt, FaShuttleVan, FaTruckPickup } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import Banners from './sections/Banners';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Car from './components/Car';
import ChooseCard from './components/ChooseCard';


const App = () => {
    const [activeTab, setActiveTab] = useState("instock")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <header className="flex justify-between items-center p-2 md:p-2 lg:p-4 w-[90%] mx-auto h-[80px] relative">
                <a href="/">
                    <h1 className='font-bold text-lg md:text-lg lg:text-xl'>EcologyCash4Car</h1>
                </a>
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </header>
            <main>
                {/* Hero Section */}
                <Hero />
                <section id="category" aria-labelledby="category-heading" className="lg:pt-[200px] md:pt-[100px] pt-[50px] pb-8 lg:pb-16 w-full lg:w-[90%] mx-auto">
                    <h1 id="category-heading" className="text-3xl font-bold text-center">Browse By Type</h1>
                    <ul className="flex flex-row overflow-x-scroll gap-4  lg:gap-8 items-center mt-8 lg:mt-16">
                        <Category text="SUV" Icon={<TbCarSuv size={40} />} />
                        <Category text="Sedan" Icon={<FaCar size={40} />} />
                        <Category text="Hatchback" Icon={<FaTruckPickup size={40} />} />
                        <Category text="Coupe" Icon={<FaCarAlt size={40} />} />
                        <Category text="Hybrid" Icon={<FaCarAlt size={40} />} />
                        <Category text="Convertible" Icon={<FaCarAlt size={40} />} />
                        <Category text="Van" Icon={<FaShuttleVan size={40} />} />
                        <Category text="Truck" Icon={<CiDeliveryTruck size={40} />} />
                        <Category text="Electric" Icon={<MdElectricCar size={40} />} />
                    </ul>
                </section>
                <Banners />
                <section id="searched-cars" aria-labelledby='searched-cars-heading' className='w-[90%] mx-auto py-16'>
                    <h1 id='searched-cars-heading' className="text-3xl font-bold text-center py-8">Most Searched Cars</h1>
                    <div id="tabs" className='border-b border-b-[#f3f3f3]  w-full flex items-center justify-center gap-6'>
                        <div onClick={() => setActiveTab("instock")} className={`cursor-pointer pb-2 ${activeTab === "instock" && "border-b-2 border-b-[#425bac]"}`} role='button'>
                            <h3>In Stock</h3>
                        </div>
                        <div onClick={() => setActiveTab("sedan")} className={`cursor-pointer pb-2 ${activeTab === "sedan" && "border-b-2 border-b-[#425bac]"}`} role='button'>
                            <h3>Sedan</h3>
                        </div>
                        <div onClick={() => setActiveTab("suv")} className={`cursor-pointer pb-2 ${activeTab === "suv" && "border-b-2 border-b-[#425bac]"}`} role='button'>
                            <h3>SUV</h3>
                        </div>
                        <div onClick={() => setActiveTab("convertible")} className={`cursor-pointer pb-2 ${activeTab === "convertible" && "border-b-2 border-b-[#425bac]"}`} role='button'>
                            <h3>Convertible</h3>
                        </div>
                    </div>
                    <Carousel
                        className='py-16'
                        responsive={responsive}
                        swipeable
                        autoPlay

                    >
                        <Car />
                        <Car />
                        <Car />
                        <Car />
                        <Car />
                        <Car />
                    </Carousel>
                </section>
                <section id="choose-us" aria-labelledby='choose-us-heading' className='w-[90%] mx-auto '>
                    <h1 id='choose-us-heading' className="text-3xl font-bold text-center py-8">Why Show US?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-16 gap-4">
                        <ChooseCard
                            imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/11/f1.svg"}
                            title={"Special Financing Offers"}
                            des={"Our stress-free finance department that can find financial solutions to save you money."}
                        />
                        <ChooseCard
                            imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/f2.svg"}
                            title={"Trusted Car Dealership"}
                            des={"Our stress-free finance department that can find financial solutions to save you money."}
                        />
                        <ChooseCard
                            imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/f3.svg"}
                            title={"Transparent Pricing"}
                            des={"Our stress-free finance department that can find financial solutions to save you money."}
                        />
                        <ChooseCard
                            imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/f4.svg"}
                            title={"Expert Car Service"}
                            des={"Our stress-free finance department that can find financial solutions to save you money."}
                        />

                    </div>
                </section>
                <section id="searched-cars" aria-labelledby='searched-cars-heading' className='w-[90%] mx-auto py-16'>
                    <h1 id='searched-cars-heading' className="text-3xl font-bold text-center py-8">Latest Cars</h1>
                    <Carousel
                        className='py-16'
                        responsive={responsive}
                        swipeable
                        autoPlay

                    >
                        <Car />
                        <Car />
                        <Car />
                        <Car />
                        <Car />
                        <Car />
                    </Carousel>
                </section>
                <section id="blogs" aria-labelledby='blogs' className='bg-blue-100 h-screen flex justify-between px-16 items-center'>
                    <div>
                        <h3 className='text-3xl font-bold tracking-widest leading-10'>Explore Our Premium Brands</h3>
                        <p className='text-sm font-normal leading-6 tracking-wider max-w-[450px] mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis est quisquam consequatur error tempora dolore ab quam, assumenda voluptatem.</p>
                        <button className='bg-black p-4 text-cyan-50 my-6 rounded-2xl hover:bg-black/70 hover:transition-all delay-75 duration-500 ease-linear'>
                            Show All Brands
                        </button>
                    </div>
                    <div>
                        <img className='h-[500px] w-[500px]  object-contain' src="https://demoapus1.com/boxcar/wp-content/uploads/2023/09/logo-brand.png" alt="bg-img" />
                    </div>
                </section>
                <section id='news-letter' aria-labelledby='news-letter' className='flex flex-col justify-center items-center py-16'>
                    <h1 className='text-3xl font-medium tracking-wider leading-6'>Join Cash4Cars</h1>
                    <p className='text-sm font-normal mt-4'>Receive pricing updates, shopping tips & more!</p>

                    <form action="" id='news-letter' className='border border-black p-4 rounded-2xl mt-8 w-[500px] flex items-center'>
                        <input type="text" placeholder='Enter your email' className='outline-0 py-2 w-full' />
                        <button className='bg-black p-2 text-white rounded-2xl'>Signup</button>
                    </form>
                </section>
            </main >

            <footer>
                <div className='border-[0.5px] border-[#ccc] h-[50vh] grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center w-full pt-16'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Company</h1>
                        <a href="#" className='text-sm font-normal'>about us</a>
                        <a href="#" className='text-sm font-normal'>Blog</a>
                        <a href="#" className='text-sm font-normal'>Services</a>
                        <a href="#" className='text-sm font-normal'>FAQS</a>
                        <a href="#" className='text-sm font-normal'>Terms</a>
                        <a href="#" className='text-sm font-normal'>Contact US</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Quick Links</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Our Brands</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Vehicle Type</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Sales Hours</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                </div>
                <div className='flex justify-between items-center py-6 w-[90%] mx-auto'>
                    <p className='text-sm font-normal'>&copy; 2025 EcologyCash4Cars.com all rights reserved</p>
                    <div className='flex items-center gap-4'>
                        <a href='#' className='text-sm font-normal'>Terms and Conditions</a>
                        <p className='font-bold'>&middot;</p>
                        <a href='#' className='text-sm font-normal'>Privacy Notice</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App