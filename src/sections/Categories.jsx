import React, { useEffect, useRef, useState } from 'react'
import Category from '../components/Category';
import { TbCarSuv } from "react-icons/tb";
import { FaCar, FaCarAlt, FaShuttleVan, FaTruckPickup } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

const Categories = () => {
    const scrollRef = useRef(null)
    const [showButtons, setShowButtons] = useState(false);
    const checkScrollability = () => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            setShowButtons(scrollWidth > clientWidth);
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener("resize", checkScrollability);
        return () => window.removeEventListener("resize", checkScrollability);
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };
    return (
        <section id="category" aria-labelledby="category-heading" className="lg:pt-[150px] md:pt-[100px] pt-[50px] pb-8 lg:pb-16 w-full lg:w-[90%] mx-auto">
            <h1 id="category-heading" className="lg:text-3xl md:text-2xl sm:tex-xl text-xl font-bold text-center">Browse By Type</h1>
            <div className="relative">
                {showButtons && (
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full"
                    >
                        <CgChevronLeft size={20} />

                    </button>
                )}
                <ul
                    ref={scrollRef}
                    id="category-list"
                    className="flex flex-row overflow-x-scroll gap-4 lg:gap-8 items-center mt-8 lg:mt-16 scrollbar-hide"
                >
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
                {showButtons && (
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full"
                    >
                        <CgChevronRight size={20} />
                    </button>
                )}
            </div>
        </section>
    )
}

export default Categories