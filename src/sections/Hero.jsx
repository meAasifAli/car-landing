import React from "react";


const Hero = () => {
    const years = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]
    return (
        <header
            id="home"
            aria-labelledby="hero-heading"
            className="relative lg:h-screen h-[140vh] w-full flex flex-col justify-center items-center bg-slate-200"
        >
            <article className="flex flex-col md:flex-row gap-4 lg:gap-8 md:justify-between justify-center items-center text-center w-[90%] mx-auto">
                <div className="flex flex-col justify-start items-start w-full">

                    {/* Supporting Text */}
                    <span className="text-md text-start md:text-lg font-normal text-gray-600 ">
                        Free Pickup | Instant Offer | Hassle-Free Process.
                    </span>
                    {/* Main Heading */}
                    <h1
                        id="hero-heading"
                        className="font-sans max-w-[800px] text-start font-extrabold text-[24px] md:text-[48px] lg:text-[60px] leading-8 sm:leading-16 my-4 text-black"
                    >
                        Sell Your Junk or Used Car in San Diego – Get Paid Instantly!
                    </h1>
                    <span className="lg:text-sm text-xs max-w-[600px] text-start font-normal text-gray-600 z-50 ">Got a junk or second-hand car you no longer need? We make selling your car quick, easy, and hassle-free! No haggling, no long waits, and absolutely no hidden fees—just fast cash for your car with free towing included. Whether it’s wrecked, non-running, or simply unwanted, we’ll give you a fair offer on the spot. Sell your car today and get instant cash with San Diego’s most trusted car buyers!</span>
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
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input type="text" placeholder="Your Name?" className="w-full p-2 lg:p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" />


                        {/* Any Makes Dropdown */}
                        <label htmlFor="anymakes" className="sr-only">
                            Car Brand
                        </label>
                        {/* <select
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
                        </select> */}
                        <input type="text" placeholder="Car Brand" className="w-full p-2 lg:p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" />

                        {/* Any Model Dropdown */}
                        <label htmlFor="anymodel" className="sr-only">
                            Car Model
                        </label>

                        <input type="text" placeholder="Car Model" className="w-full p-2 lg:p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" />
                        <label className="sr-only" htmlFor="year">
                            Year
                        </label>
                        <select className="w-full p-2 lg:p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" name="" id="">
                            {
                                years.map((year) => {
                                    return <option value={year}>{year}</option>
                                })
                            }
                        </select>
                        <label htmlFor="phone" className="sr-only">
                            phone
                        </label>
                        <input placeholder="Phone Number" className="w-full p-2 lg:p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" type="tel" name="" id="" />
                        {/* All Prices Dropdown */}
                        <label htmlFor="Expected-Price" className="sr-only">
                            Expected Price
                        </label>
                        <select
                            name="Expected-Price"
                            id="Expected-Price"
                            className="w-full p-2 lg:p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all"
                        >
                            <option value="allprices" disabled>
                                Expected Price
                            </option>
                            <option value="onetothousand">$0-$1000</option>
                            <option value="onetotwo">$1000-$2000</option>
                            <option value="twotothree">$2000-$5000</option>
                            <option value="twotothree">$5000+</option>
                        </select>

                        {/* Search Button */}

                        <button
                            type="submit"
                            className="h-12 w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all flex justify-center items-center shadow-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            aria-label="Search cars"
                        >
                            Get Estimate Now
                        </button>


                    </fieldset>
                </form>
            </article>
            <img className="absolute -bottom-[20%] lg:-bottom-[25%] h-[420px] lg:h-[45%] w-full object-contain z-0" src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png" alt="bgimage" />
        </header>
    );
};

export default Hero;
