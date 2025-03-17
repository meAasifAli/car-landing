import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

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
        <div className='flex flex-col justify-center items-center h-screen'>
            {
                currIndex === 0 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Car Make</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <div className='p-4 flex items-center border-b  border-b-gray-300 '>
                            <CiSearch size={20} color='blue' />
                            <input value={searchYear} onChange={handleSearchYear} placeholder='Car Make' className='w-full p-2 focus:outline-0' type="search" name="" id="" />
                        </div>
                        <ul className=' w-full border-0'>
                            {
                                filteredYears.map((item, id) => {
                                    return (
                                        <li onClick={() => handleYearSelect(item)} key={id} className={`${selectedYear === item && "bg-blue-500 text-white"} py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer`}>{item}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>

                </form>
            }
            {
                currIndex === 1 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Car Brand | Model</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <form action="" className='px-4 flex flex-col gap-4 mt-8'>
                            <div>
                                <label htmlFor="Brand" className='text-gray-600 font-normal'>Car Brand</label>
                                <input value={carBrand} onChange={(ev) => setCarBrand(ev.target.value)} type="text" placeholder='Car Brand' className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" />
                            </div>
                            <div>
                                <label htmlFor="Model" className='text-gray-600 font-normal'>Model</label>
                                <input value={carModel} onChange={(ev) => setCarModel(ev.target.value)} type="text" placeholder='Car Model' className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" />
                            </div>
                        </form>
                    </div>
                </form>
            }

            {
                currIndex === 2 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Does your Vehicle start and Drive?</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <ul className=' w-full border-0'>
                            <li onClick={() => handleSetVehcileCondition("startsanddrives")} className={`${vehcileCondition === "startsanddrives" && "bg-blue-500 text-white"} py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer`}>Starts And Drives</li>
                            <li onClick={() => handleSetVehcileCondition("startsbutdoesnotdrive")} className={`${vehcileCondition === "startsbutdoesnotdrive" && "bg-blue-500 text-white"} py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer`}>Starts But Doesn't Drive</li>
                            <li onClick={() => handleSetVehcileCondition("doesnotstart")} className={`${vehcileCondition === "doesnotstart" && "bg-blue-500 text-white"} py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer`}>Doesn't Start</li>
                        </ul>
                    </div>

                </form>
            }

            {
                currIndex === 3 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Enter Your Vehcile Mileage</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <input value={mileage} onChange={e => handleSetMileage(e.target.value)} placeholder='Vehcile Mileage (miles)' className='w-full p-2 focus:outline-0 border-b-[0.5px] border-b-[#ccc] ' type="number" name="" id="" />
                    </div>
                </form>
            }
            {
                currIndex === 4 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Keys Available?</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <ul className='w-full border-0'>
                            <li onClick={() => handleSetKeysAvailable(true)} className={`${keysAvailable && "bg-blue-500 text-white"} py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer`}>Yes</li>
                            <li onClick={() => handleSetKeysAvailable(false)} className={`${!keysAvailable && "bg-blue-500 text-white"} py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer`}>No</li>
                        </ul>
                    </div>
                </form>
            }
            {
                currIndex === 5 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Personal Information</h1>
                    </div>
                    <div className=' h-[50vh]  flex flex-col gap-4 w-[90%] mx-auto py4 sm:py-6 md:py-8'>
                        <div>
                            <label htmlFor="phone" className='text-gray-600 font-normal'>
                                Phone Number
                            </label>
                            <input id='phone' value={phone} onChange={e => setPhone(e.target.value)} placeholder='Phone Number' className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" />
                        </div>
                        <div>
                            <label htmlFor="name">
                                Your Name
                            </label>
                            <input id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Your Name' className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" type="text" name="" />
                        </div>
                        <div>
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='test123@gmail.com' className="mt-2 w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50 transition-all" type="email" name="" />
                        </div>
                    </div>
                </form>
            }
            <div className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between py-8'>
                <button onClick={() => setCurrIndex(pre => pre - 1)} disabled={currIndex === 0} className='disabled:bg-gray-200 bg-black p-2 text-white rounded-lg flex items-center gap-2'>
                    <FaArrowAltCircleLeft size={20} />
                    prev
                </button>
                {
                    currIndex === 5 ? <button onClick={handleGetOffer} className='bg-black p-2 text-white rounded-lg flex items-center gap-2'>Get an Offer</button> : <button onClick={handleIncrementIndex} className='bg-black p-2 text-white rounded-lg flex items-center gap-2'>
                        <FaArrowAltCircleRight size={20} />
                        next
                    </button>
                }
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
        </div>
    )
}

export default Contact
