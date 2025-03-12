import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
    return (
        <header
            id="home"
            aria-labelledby="hero-heading"
            className="relative h-screen flex flex-col justify-center items-center bg-slate-200"
        >
            <article className="flex flex-col gap-8 justify-center items-center text-center">
                <p className="text-lg font-normal leading-[24px] text-black">
                    Find cars for sale and for rent near you.
                </p>
                <h1
                    id="hero-heading"
                    className="font-sans font-bold text-[60px] leading-[48px] my-6"
                >
                    Find Your Dream Car
                </h1>

                {/* Search Form */}
                <form
                    action=""
                    aria-labelledby="search-form-label"
                    className="flex justify-center items-center gap-4 p-8 h-[70px] bg-white shadow-md rounded-full z-50"
                >
                    <fieldset className="flex gap-4 items-center">
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
                            className="p-2 border rounded-lg"
                        >
                            <option disabled value="used cars">
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
                            className="p-2 border rounded-lg max-h-40 overflow-y-auto"
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
                            className="p-2 border rounded-lg"
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
                            className="p-2 border rounded-lg"
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
                            className="h-10 w-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors flex justify-center items-center"
                            aria-label="Search cars"
                        >
                            <CiSearch className="text-white text-center" size={20} />
                        </button>
                    </fieldset>
                </form>
            </article>

            {/* Background Car Image */}
            <img
                className="w-[1000px] h-[800px] object-contain z-0 absolute bottom-[-50%]"
                src="https://demoapus1.com/boxcar/wp-content/uploads/2023/11/slider51.png"
                alt="Luxury car available for rent or sale"
            />
        </header>
    );
};

export default Hero;
