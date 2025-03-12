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


const App = () => {
    const [activeTab, setActiveTab] = useState("instock")
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
            <header className="flex justify-between items-center p-4 w-[90%] mx-auto h-[80px]">
                <a href="/">
                    <h1 className='font-bold text-xl'>EcologyCash4Car</h1>
                </a>
                <Navbar />
            </header>
            <main>
                {/* Hero Section */}
                <Hero />
                <section id="category" aria-labelledby="category-heading" className="pt-[200px] pb-16 w-[90%] mx-auto">
                    <h1 id="category-heading" className="text-3xl font-bold text-center">Browse By Type</h1>
                    <ul className="flex flex-row  gap-8 items-center mt-16">
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
            </main >
            <footer></footer>
        </>
    )
}

export default App