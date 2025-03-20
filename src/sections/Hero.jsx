import React, { useMemo } from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { inputStyles } from "../static/styles";
import { motion } from "motion/react"
import { IoCall } from "react-icons/io5";

const Hero = () => {
    const years = useMemo(() => Array.from({ length: 24 }, (_, i) => (2001 + i).toString()), []);

    return (
        <header
            id="home"
            aria-labelledby="hero-heading"
            className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-tr from-blue-900 to-blue-800 px-4  py-4 sm:py-0"
        >
            <article className="flex flex-col md:flex-row gap-4 lg:gap-10 md:justify-between justify-center items-center text-center w-full max-w-7xl mx-auto">
                {/* Left Content */}
                <div className="flex flex-col  justify-start items-start w-full max-w-2xl">
                    {/* Star Ratings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex items-center gap-2">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar key={index} size={20} className="text-yellow-500" />
                            ))}
                        </div>
                        <span className="text-sm font-normal text-gray-200">4.8 (1,000+ reviews)</span>
                    </motion.div>

                    {/* Supporting Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-lg font-medium text-gray-200 mt-2 text-start">
                        Free Pickup | Instant Offer | Hassle-Free Process.
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        id="hero-heading"
                        className="font-sans z-10 text-start font-extrabold text-3xl text-gray-100 md:text-5xl lg:text-6xl leading-16 mt-4 "
                    >
                        Sell Your Junk or Used Car in San Diego – Get Paid Instantly!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-base text-start md:text-lg text-gray-200 max-w-2xl mt-4 z-10">
                        Got a junk or second-hand car you no longer need? We make selling your car quick, easy, and hassle-free!
                        No haggling, no long waits, and absolutely no hidden fees—just fast cash for your car with free towing included.

                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex flex-col gap-4 sm:flex-row items-center py-8 w-full"
                    >
                        <button className="flex justify-center items-center p-2 rounded-lg w-full sm:w-auto border border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-black transition duration-300 ease-in-out">
                            <a href="tel:+16198307005" className="flex items-center  p-3 gap-3">
                                <IoCall size={25} />
                                <span className="text-gray-300 text-lg font-medium">Call US</span>
                            </a>
                        </button>
                        <button className="flex justify-center items-center p-2 rounded-lg bg-white w-full sm:w-auto">
                            <a target="_blank" href="https://wa.me/16198307005" className="flex items-center  p-3 gap-3">
                                <FaWhatsapp size={25} />
                                <span className="text-lg font-medium">WhatsApp</span>
                            </a>
                        </button>
                    </motion.div>
                </div>

                {/* Right Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    aria-labelledby="search-form-label"
                    className="flex flex-col z-10 gap-4 p-6 bg-white shadow-md rounded-lg w-full max-w-md mx-auto lg:rounded-2xl"
                >
                    <fieldset className="flex flex-col gap-4">
                        <legend id="search-form-label" className="sr-only">
                            Search for a car
                        </legend>

                        {/* Name Input */}
                        <label htmlFor="name" className="sr-only">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name?"
                            className={inputStyles}
                        />

                        {/* Car Brand Input */}
                        <label htmlFor="brand" className="sr-only">
                            Car Brand
                        </label>
                        <input
                            id="brand"
                            type="text"
                            placeholder="Car Brand"
                            className={inputStyles}
                        />

                        {/* Car Model Input */}
                        <label htmlFor="model" className="sr-only">
                            Car Model
                        </label>
                        <input
                            id="model"
                            type="text"
                            placeholder="Car Model"
                            className={inputStyles}
                        />

                        {/* Year Select */}
                        <label htmlFor="year" className="sr-only">
                            Year
                        </label>
                        <select id="year" className={inputStyles}>
                            {years.map((year, id) => (
                                <option key={id} value={year}>{year}</option>
                            ))}
                        </select>

                        {/* Phone Number */}
                        <label htmlFor="phone" className="sr-only">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            className={inputStyles}
                        />

                        {/* Expected Price */}
                        <label htmlFor="price" className="sr-only">
                            Expected Price
                        </label>
                        <select id="price" className={inputStyles}>
                            <option value="" disabled selected>
                                Expected Price
                            </option>
                            <option value="0-1000">$0 - $1,000</option>
                            <option value="1000-2000">$1,000 - $2,000</option>
                            <option value="2000-5000">$2,000 - $5,000</option>
                            <option value="5000+">$5,000+</option>
                        </select>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="h-12 w-full rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-all flex justify-center items-center shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            aria-label="Get Estimate Now"
                        >
                            Get Estimate Now
                        </button>
                    </fieldset>
                </motion.form>
            </article>


        </header>
    );
};

export default Hero;


