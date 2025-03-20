import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { inputStyles } from "../static/styles";

const Hero = () => {
    const years = useMemo(() => Array.from({ length: 24 }, (_, i) => (2001 + i).toString()), []);

    return (
        <header
            id="home"
            aria-labelledby="hero-heading"
            className="relative min-h-screen w-full flex flex-col justify-center items-center bg-slate-200 px-4  py-4 sm:py-0"
        >
            <article className="flex flex-col md:flex-row gap-6 lg:gap-10 md:justify-between justify-center items-center text-center w-full max-w-7xl mx-auto">
                {/* Left Content */}
                <div className="flex flex-col justify-start items-start w-full max-w-2xl">
                    {/* Star Ratings */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar key={index} size={20} className="text-yellow-500" />
                            ))}
                        </div>
                        <span className="text-sm font-normal text-gray-700">4.8 (1,000+ reviews)</span>
                    </div>

                    {/* Supporting Text */}
                    <p className="text-lg font-medium text-gray-700 mt-2 text-start">
                        Free Pickup | Instant Offer | Hassle-Free Process.
                    </p>

                    {/* Main Heading */}
                    <h1
                        id="hero-heading"
                        className="font-sans z-10 text-start font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight mt-4 text-black"
                    >
                        Sell Your Junk or Used Car in San Diego – Get Paid Instantly!
                    </h1>

                    <p className="text-base text-start md:text-lg text-gray-600 max-w-2xl mt-4 z-10">
                        Got a junk or second-hand car you no longer need? We make selling your car quick, easy, and hassle-free!
                        No haggling, no long waits, and absolutely no hidden fees—just fast cash for your car with free towing included.
                        Whether it’s wrecked, non-running, or simply unwanted, we’ll give you a fair offer on the spot.
                    </p>
                </div>

                {/* Right Form */}
                <form
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
                </form>
            </article>

            {/* Background Image */}
            <img
                className="hidden sm:flex absolute z-0 -bottom-40 h-56 md:h-72 lg:h-96 w-full object-contain"
                src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png"
                alt="Background image of a car"
                loading="lazy"
            />
        </header>
    );
};

export default Hero;


