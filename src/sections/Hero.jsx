import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
    return (
        <header
            id="home"
            aria-labelledby="hero-heading"
            className="relative h-screen w-full flex flex-col justify-center items-center bg-slate-200"
        >
            <article className="flex flex-col md:flex-row gap-4 lg:gap-8 md:justify-between justify-center items-center text-center w-[90%] mx-auto">
                <div className="flex flex-col justify-start items-start w-full">
                    {/* Subheading */}
                    <p className="text-lg md:text-2xl uppercase font-medium leading-tight text-gray-700 text-start">
                        Buy or Rent the Perfect Car Near You
                    </p>

                    {/* Main Heading */}
                    <h1
                        id="hero-heading"
                        className="font-sans max-w-[600px] text-start font-extrabold text-[32px] md:text-[48px] lg:text-[60px] leading-8 sm:leading-14 my-4 text-black"
                    >
                        Drive Your Dream Car Today
                    </h1>

                    {/* Supporting Text */}
                    <span className="text-md text-start md:text-lg font-normal text-gray-600 ">
                        Sell your old car effortlessly—no haggling, no hassle, just the best deal.
                    </span>
                </div>


                {/* Search Form */}
                <form
                    action=""
                    aria-labelledby="search-form-label"
                    className="flex flex-col   items-center lg:gap-4 gap-2 p-4 lg:p-8  bg-slate-50 shadow-md rounded-lg w-full lg:w-[40%] mx-auto lg:rounded-2xl z-50"
                >
                    <fieldset className="flex flex-col  gap-4 items-center w-full">
                        <legend id="search-form-label" className="sr-only">
                            Search for a car
                        </legend>

                        {/* Used Cars Dropdown */}
                        <label htmlFor="usedcars" className="sr-only">
                            Used Cars
                        </label>
                        <select
                            name="usedcars"
                            id="usedcars"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all"
                        >
                            <option disabled className="text-gray-400" value="used cars">
                                Used Cars
                            </option>
                            <option value="used">Used</option>
                            <option value="new">New</option>
                        </select>


                        {/* Any Makes Dropdown */}
                        <label htmlFor="anymakes" className="sr-only">
                            Any Makes
                        </label>
                        <select
                            name="anymakes"
                            id="anymakes"
                            className="w-full  p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all"
                        >
                            <option disabled value="Any Makes">
                                Any Makes
                            </option>
                            <option value="Ford">Ford</option>
                            <option value="Audi">Audi</option>
                            <option value="BMW">BMW</option>
                            <option value="Mercedes Benz">Mercedes Benz</option>
                            <option value="Honda">Honda</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Volkswagen">Volkswagen</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Subaru">Subaru</option>
                            <option value="Kia">Kia</option>
                            <option value="Lexus">Lexus</option>
                            <option value="Fiat">Fiat</option>
                            <option value="Mazda">Mazda</option>
                            <option value="Jeep">Jeep</option>
                            <option value="Land Rover">Land Rover</option>
                            <option value="Porsche">Porsche</option>
                        </select>

                        {/* Any Model Dropdown */}
                        <label htmlFor="anymodel" className="sr-only">
                            Any Model
                        </label>
                        <select
                            name="anymodel"
                            id="anymodel"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all"
                        >
                            <option value="anymodel" disabled>
                                Any Model?
                            </option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                        </select>

                        {/* All Prices Dropdown */}
                        <label htmlFor="allprices" className="sr-only">
                            All Prices
                        </label>
                        <select
                            name="allprices"
                            id="allprices"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all"
                        >
                            <option value="allprices" disabled>
                                All Prices
                            </option>
                            <option value="onetothousand">$1-$1000</option>
                            <option value="onetotwo">$1000-$10000</option>
                            <option value="twotothree">$10000-$100000</option>
                        </select>

                        {/* Search Button */}

                        <button
                            type="submit"
                            className="h-12 w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex justify-center items-center shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            aria-label="Search cars"
                        >
                            <CiSearch className="text-white" size={20} />
                        </button>


                    </fieldset>
                </form>
            </article>
            <img className="absolute -bottom-[30%] lg:-bottom-[30%] h-[420px] w-full object-contain z-0" src="/assets/car.png" alt="bgimage" />

        </header>
    );
};

export default Hero;
