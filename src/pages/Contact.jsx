import React, { useState } from 'react'
import { CiLocationOn, CiMail, CiSearch } from 'react-icons/ci'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaPhone } from "react-icons/fa";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { IoIosCall } from 'react-icons/io';
import { motion } from 'motion/react'

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchYear, setSearchYear] = useState("")
    const [carBrand, setCarBrand] = useState("")
    const [carModel, setCarModel] = useState("")
    const [selectedYear, setSelectedYear] = useState("")


    const [vehcileCondition, setVehicleCondition] = useState("")
    const [mileage, setMileage] = useState(0)
    const [keysAvailable, setKeysAvailable] = useState(false)
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [currIndex, setCurrIndex] = useState(0)
    const years = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]

    const [filteredYears, setFilteredYears] = useState(years)



    const handleYearSelect = (item) => {
        setSelectedYear(item)
        setCurrIndex(1)
    }




    const handleSearchYear = (ev) => {
        const value = ev.target.value;
        setSearchYear(value);

        // Filter years based on input
        const filtered = years.filter((item) => item.includes(value));
        setFilteredYears(filtered);
    };









    const handleSetVehcileCondition = (item) => {
        setVehicleCondition(item)
        setCurrIndex(3)
    }

    const handleSetMileage = (val) => {
        setMileage(val)
    }

    const handleSetKeysAvailable = (bool) => {
        setKeysAvailable(bool)
        setCurrIndex(5)
    }


    const handleGetOffer = () => {
        console.log("selectedYear", selectedYear);

        console.log("vehcileCondition", vehcileCondition);
        console.log("mileage", mileage);
        console.log("keysAvailable", keysAvailable);
        console.log(phone);

        if (!selectedYear || !vehcileCondition || !mileage || !keysAvailable || !phone) {
            alert("Each field is required")
            return
        }

        setIsOpen(true)
    }


    const handleIncrementIndex = () => {
        if (currIndex === 0) {
            selectedYear === "" ? setCurrIndex(0) : setCurrIndex(currIndex + 1)
            selectedYear === "" && alert("Please Select a year")
        }
        else if (currIndex == 1) {
            carBrand === "" || carModel === "" ? setCurrIndex(1) : setCurrIndex(currIndex + 1)
            carBrand === "" || carModel === "" && alert("Please Select a car brand and model")
        }

        else if (currIndex === 2) {
            vehcileCondition === "" ? setCurrIndex(2) : setCurrIndex(currIndex + 1)
            vehcileCondition === "" && alert("please, choose a car condition")
        }
        else if (currIndex === 3) {
            mileage === 0 ? setCurrIndex(3) : setCurrIndex(currIndex + 1)
            mileage === 0 && alert("please, enter a mileage")
        }
        else if (currIndex === 4) {
            keysAvailable === false ? setCurrIndex(4) : setCurrIndex(currIndex + 1)
        }
        else if (currIndex === 5) {
            phone === "" || email === "" || name === "" ? setCurrIndex(5) : setCurrIndex(currIndex + 1)
            phone === "" || email === "" || name === "" && alert("please, enter a Phone nunmber")
        }
        else {
            setCurrIndex(currIndex + 1)
        }
    }


    return (
        <div className='flex flex-col items-center justify-center w-full bg-gray-50'>
            <section
                id="contact-hero"
                className="w-full h-screen flex flex-col justify-center items-center text-center relative px-6 sm:px-10"
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/80"></div>

                {/* Content */}
                <div className="relative z-10 text-white max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-3xl sm:text-5xl font-bold mb-4">
                        Sell Your Car Fast & Hassle-Free
                    </motion.h1>
                    <motion.p

                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-base sm:text-lg text-gray-200 mb-6">
                        Get an instant offer and sell your car with ease. No hidden fees, no
                        unnecessary paperwork—just a quick and easy process!
                    </motion.p>

                    {/* Call-to-Action */}
                    <motion.button
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md ">
                        <a href="#form"> Get Your Instant Offer</a>
                    </motion.button>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-6 sm:px-12 bg-gray-100">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2

                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-2xl sm:text-4xl font-bold mb-6 text-gray-900">
                        Why Sell With Us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-base sm:text-lg text-gray-700 mb-8">
                        We make selling your car easy, transparent, and rewarding.
                    </motion.p>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                Instant Cash Offer
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Get a competitive, no-obligation offer for your car within minutes.
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                Hassle-Free Process
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                We handle all paperwork and pickup—zero stress for you.
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                Secure & Fast Payment
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600">
                                Get paid quickly and securely with no hidden fees or deductions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>




            {/* Main Content */}
            <div id='form' className='flex flex-col lg:flex-row items-start justify-center max-w-7xl mx-auto gap-8 p-4 sm:p-8 w-full'>
                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='flex-1 w-full lg:w-2/3'>
                    <div className='bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl'>
                        {/* Form Header */}
                        <div className='bg-gradient-to-r from-blue-900 to-blue-700 w-full p-6 rounded-t-2xl'>
                            <h1 className='text-white font-semibold text-xl'>
                                {currIndex === 0 && "Car Make"}
                                {currIndex === 1 && "Car Brand | Model"}
                                {currIndex === 2 && "Does your Vehicle start and Drive?"}
                                {currIndex === 3 && "Enter Your Vehicle Mileage"}
                                {currIndex === 4 && "Keys Available?"}
                                {currIndex === 5 && "Personal Information"}
                            </h1>
                        </div>

                        {/* Form Content */}
                        <div
                            className='overflow-y-auto h-[50vh] p-6'>
                            {currIndex === 0 && (
                                <div>
                                    <div className='flex items-center border-b border-gray-200 pb-4'>
                                        <CiSearch size={20} className='text-blue-600' />
                                        <input
                                            value={searchYear}
                                            onChange={handleSearchYear}
                                            placeholder='Search Car Make'
                                            className='w-full p-2 focus:outline-none placeholder-gray-400'
                                            type='search'
                                        />
                                    </div>
                                    <ul className='mt-4 space-y-2'>
                                        {filteredYears.map((item, id) => (
                                            <li
                                                key={id}
                                                onClick={() => handleYearSelect(item)}
                                                className={`${selectedYear === item
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-gray-50 hover:bg-blue-100"
                                                    } py-3 px-4 rounded-lg cursor-pointer transition-all duration-200`}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {currIndex === 1 && (
                                <form className='space-y-6'>
                                    <div>
                                        <label htmlFor='brand' className='block text-gray-700 font-medium mb-2'>
                                            Car Brand
                                        </label>
                                        <input
                                            id='brand'
                                            value={carBrand}
                                            onChange={(ev) => setCarBrand(ev.target.value)}
                                            placeholder='Enter Car Brand'
                                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='model' className='block text-gray-700 font-medium mb-2'>
                                            Model
                                        </label>
                                        <input
                                            id='model'
                                            value={carModel}
                                            onChange={(ev) => setCarModel(ev.target.value)}
                                            placeholder='Enter Car Model'
                                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                                        />
                                    </div>
                                </form>
                            )}

                            {currIndex === 2 && (
                                <ul className='space-y-2'>
                                    {[
                                        { value: "startsanddrives", label: "Starts And Drives" },
                                        { value: "startsbutdoesnotdrive", label: "Starts But Doesn't Drive" },
                                        { value: "doesnotstart", label: "Doesn't Start" },
                                    ].map((option, id) => (
                                        <li
                                            key={id}
                                            onClick={() => handleSetVehcileCondition(option.value)}
                                            className={`${vehcileCondition === option.value
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-50 hover:bg-blue-100"
                                                } py-3 px-4 rounded-lg cursor-pointer transition-all duration-200`}
                                        >
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {currIndex === 3 && (
                                <input
                                    value={mileage}
                                    onChange={(e) => handleSetMileage(e.target.value)}
                                    placeholder='Vehicle Mileage (miles)'
                                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                                    type='number'
                                />
                            )}

                            {currIndex === 4 && (
                                <ul className='space-y-2'>
                                    {[
                                        { value: true, label: "Yes" },
                                        { value: false, label: "No" },
                                    ].map((option, id) => (
                                        <li
                                            key={id}
                                            onClick={() => handleSetKeysAvailable(option.value)}
                                            className={`${keysAvailable === option.value
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-50 hover:bg-blue-100"
                                                } py-3 px-4 rounded-lg cursor-pointer transition-all duration-200`}
                                        >
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {currIndex === 5 && (
                                <form className='space-y-6'>
                                    <div>
                                        <label htmlFor='phone' className='block text-gray-700 font-medium mb-2'>
                                            Phone Number
                                        </label>
                                        <input
                                            id='phone'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder='Enter Phone Number'
                                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>
                                            Your Name
                                        </label>
                                        <input
                                            id='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Enter Your Name'
                                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                                            Email Address
                                        </label>
                                        <input
                                            id='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Enter Email Address'
                                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                                            type='email'
                                        />
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className='w-full flex justify-between mt-8'>
                        <button
                            onClick={() => setCurrIndex((prev) => prev - 1)}
                            disabled={currIndex === 0}
                            className='disabled:bg-gray-300 disabled:cursor-not-allowed bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-all'
                        >
                            <FaArrowAltCircleLeft size={20} />
                            Prev
                        </button>
                        {currIndex === 5 ? (
                            <button
                                onClick={handleGetOffer}
                                className='bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all'
                            >
                                Get an Offer
                            </button>
                        ) : (
                            <button
                                onClick={handleIncrementIndex}
                                className='bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-all'
                            >
                                Next
                                <FaArrowAltCircleRight size={20} />
                            </button>
                        )}
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 ">
                            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                                <DialogPanel className="max-w-full  space-y-4 border bg-black p-12 rounded-2xl">
                                    <DialogTitle className="font-bold text-white">Your Instant Offer</DialogTitle>
                                    <Description className={"text-white"}>We are ready to pick your </Description>
                                    <p className='text-md font-medium text-white'>we pay you</p>
                                    <h1 className='font-extrabold text-5xl text-green-700'>$5000</h1>
                                    <div className="flex gap-4">
                                        <button className='bg-red-700 text-white p-2' onClick={() => setIsOpen(false)}>Cancel offer</button>
                                        <button className='bg-blue-500 text-white p-2' onClick={() => setIsOpen(false)}>Accept offer</button>
                                    </div>
                                </DialogPanel>
                            </div>
                        </Dialog>
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='flex-1 w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-xl'>
                    <h1 className='text-2xl font-bold text-gray-800'>Interested to Sell Your Car?</h1>
                    <p className='text-gray-500 mt-2'>We are ready to pick your car</p>
                    <ul className='mt-6 space-y-4'>
                        <li className='flex items-center gap-4'>
                            <CiLocationOn className='text-blue-600 text-xl' />
                            <span className='text-gray-700'>123 Main St, San Diego, USA</span>
                        </li>
                        <li className='flex items-center gap-4'>
                            <IoIosCall className='text-blue-600 text-xl' />
                            <a href='tel:+16198307005' className='text-gray-700 hover:text-blue-600'>
                                +16198307005
                            </a>
                        </li>
                        <li className='flex items-center gap-4'>
                            <CiMail className='text-blue-600 text-xl' />
                            <a href='mailto:ecologycash4car.com' className='text-gray-700 hover:text-blue-600'>
                                ecologycash4car.com
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Call-to-Action Section */}
            <motion.section
                initial={{ opacity: 0, y: 20, }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='w-full bg-gradient-to-r from-blue-900 to-blue-700 py-12 text-center'>
                <h2 className='text-3xl font-bold text-white mb-4'>Ready to Sell Your Car?</h2>
                <p className='text-lg text-gray-200 mb-6'>Get an instant offer today!</p>
                <button
                    className='bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all'
                >
                    <a href="tel:+16198307005">
                        Get Started
                    </a>
                </button>
            </motion.section>
        </div>
    )
}

export default Contact
