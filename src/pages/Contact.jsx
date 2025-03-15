import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const Contact = () => {
    const [search, setSearch] = useState("")
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [selectedModel, setSelectedModel] = useState(null)
    const [vehcileCondition, setVehicleCondition] = useState("")
    const [mileage, setMileage] = useState(0)
    const [keysAvailable, setKeysAvailable] = useState(false)
    const [phone, setPhone] = useState("")
    const [currIndex, setCurrIndex] = useState(0)
    const years = ["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"]
    const carBrands = [
        { "id": 0, "name": "Toyota", "models": ["Camry", "Corolla", "RAV4", "Highlander", "Prius"] },
        { "id": 1, "name": "Honda", "models": ["Civic", "Accord", "CR-V", "Pilot", "Fit"] },
        { "id": 2, "name": "Ford", "models": ["Mustang", "F-150", "Explorer", "Escape", "Edge"] },
        { "id": 3, "name": "Chevrolet", "models": ["Malibu", "Silverado", "Equinox", "Tahoe", "Camaro"] },
        { "id": 4, "name": "BMW", "models": ["3 Series", "5 Series", "X5", "X3", "M4"] },
        { "id": 5, "name": "Audi", "models": ["A4", "A6", "Q5", "Q7", "R8"] },
        { "id": 6, "name": "Mercedes-Benz", "models": ["C-Class", "E-Class", "S-Class", "GLC", "GLE"] },
        { "id": 7, "name": "Tesla", "models": ["Model S", "Model 3", "Model X", "Model Y", "Roadster"] },
        { "id": 8, "name": "Nissan", "models": ["Altima", "Sentra", "Maxima", "Rogue", "GT-R"] },
        { "id": 9, "name": "Hyundai", "models": ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona"] },
        { "id": 10, "name": "Kia", "models": ["Sorento", "Sportage", "Telluride", "Optima", "Forte"] },
        { "id": 11, "name": "Volkswagen", "models": ["Passat", "Jetta", "Tiguan", "Golf", "Atlas"] },
        { "id": 12, "name": "Subaru", "models": ["Outback", "Forester", "Impreza", "Legacy", "WRX"] },
        { "id": 13, "name": "Mazda", "models": ["CX-5", "Mazda3", "Mazda6", "CX-9", "MX-5 Miata"] },
        { "id": 14, "name": "Jeep", "models": ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade"] },
        { "id": 15, "name": "Lexus", "models": ["RX", "ES", "NX", "GX", "LS"] },
        { "id": 16, "name": "Porsche", "models": ["911", "Cayenne", "Macan", "Panamera", "Taycan"] },
        { "id": 17, "name": "Ferrari", "models": ["488 GTB", "Roma", "F8 Tributo", "SF90 Stradale", "Portofino"] },
        { "id": 18, "name": "Lamborghini", "models": ["Huracán", "Aventador", "Urus", "Gallardo", "Murciélago"] },
        { "id": 19, "name": "McLaren", "models": ["720S", "570S", "650S", "Artura", "P1"] },
        { "id": 20, "name": "Bentley", "models": ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne"] },
        { "id": 21, "name": "Rolls-Royce", "models": ["Phantom", "Ghost", "Cullinan", "Dawn", "Wraith"] },
        { "id": 22, "name": "Jaguar", "models": ["F-Type", "XE", "XF", "E-PACE", "F-PACE"] },
        { "id": 23, "name": "Land Rover", "models": ["Range Rover", "Defender", "Discovery", "Evoque"] },
        { "id": 24, "name": "Volvo", "models": ["XC90", "XC60", "S60", "V60", "XC40"] },
        { "id": 25, "name": "Mitsubishi", "models": ["Outlander", "Pajero", "Lancer", "Eclipse Cross"] },
        { "id": 26, "name": "Peugeot", "models": ["208", "308", "3008", "5008", "2008"] },
        { "id": 27, "name": "Fiat", "models": ["500", "Panda", "Tipo", "500X", "124 Spider"] },
        { "id": 28, "name": "Alfa Romeo", "models": ["Giulia", "Stelvio", "Tonale", "4C"] },
        { "id": 29, "name": "Genesis", "models": ["G70", "G80", "G90", "GV70", "GV80"] },
        { "id": 30, "name": "Bugatti", "models": ["Chiron", "Veyron", "Divo", "Bolide"] },
        { "id": 31, "name": "Aston Martin", "models": ["DB11", "Vantage", "DBS", "Rapide", "Valhalla"] },
        { "id": 32, "name": "Cadillac", "models": ["Escalade", "CT5", "XT5", "CT4", "Lyriq"] },
        { "id": 33, "name": "Chrysler", "models": ["300", "Pacifica", "Voyager"] },
        { "id": 34, "name": "Dodge", "models": ["Charger", "Challenger", "Durango", "Hornet"] },
        { "id": 35, "name": "Buick", "models": ["Enclave", "Encore", "Regal", "LaCrosse"] },
        { "id": 36, "name": "Suzuki", "models": ["Swift", "Vitara", "Jimny", "Baleno"] },
        { "id": 37, "name": "Renault", "models": ["Clio", "Megane", "Captur", "Koleos"] },
        { "id": 38, "name": "Citroën", "models": ["C3", "C4", "C5 Aircross", "Berlingo"] },
        { "id": 39, "name": "Koenigsegg", "models": ["Jesko", "Regera", "Agera", "Gemera"] }
    ]


    const handleYearSelect = (item) => {
        setSelectedYear(item)
        setCurrIndex(1)
    }

    // console.log("selectedYear", selectedYear);
    // console.log("selectedBrand", selectedBrand);
    // console.log("selectedModel", selectedModel);
    // console.log("vehcileCondition", vehcileCondition);
    // console.log("keysAvailable", keysAvailable);





    const handleSelectedBrand = (item) => {
        setSelectedBrand(item)
        setCurrIndex(2)
    }

    // console.log(selectedBrand);

    const handleSelectedModel = (item) => {
        setSelectedModel(item)
        setCurrIndex(3)
    }


    const handleSetVehcileCondition = (item) => {
        setVehicleCondition(item)
        setCurrIndex(4)
    }

    const handleSetMileage = (val) => {
        setMileage(val)
    }

    const handleSetKeysAvailable = (bool) => {
        setKeysAvailable(bool)
        setCurrIndex(6)
    }

    const handleSetPhone = (val) => {
        setPhone(val)
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
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Car Make' className='w-full p-2 focus:outline-0' type="search" name="" id="" />
                        </div>
                        <ul className=' w-full border-0'>
                            {
                                years.map((item, id) => {
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
                        <h1 className='text-white font-medium'>Car Brand</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <div className='p-4 flex items-center border-b  border-b-gray-300 '>
                            <CiSearch size={20} color='blue' />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Car Brand' className='w-full p-2 focus:outline-0' type="search" name="" id="" />
                        </div>
                        <ul className=' w-full border-0'>
                            {
                                carBrands.map((item, id) => {
                                    return (
                                        <li onClick={() => handleSelectedBrand(item)} key={id} className={`${selectedBrand === item.name && "bg-blue-500 text-white"} py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer`}>{item.name}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>

                </form>
            }
            {
                currIndex === 2 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Car Model</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <div className='p-4 flex items-center border-b  border-b-gray-300 '>
                            <CiSearch size={20} color='blue' />
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder='Car Model' className='w-full p-2 focus:outline-0' type="search" name="" id="" />
                        </div>
                        <ul className=' w-full border-0'>
                            {
                                selectedBrand && selectedBrand?.models.map((item, id) => {
                                    return (
                                        <li onClick={() => handleSelectedModel(item)} key={id} className='py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer'>{item}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>

                </form>
            }
            {
                currIndex === 3 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Does your Vehicle start and Drive?</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <ul className=' w-full border-0'>
                            <li onClick={() => handleSetVehcileCondition("startsanddrives")} className='py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer'>Starts And Drives</li>
                            <li onClick={() => handleSetVehcileCondition("startsbutdoesnotdrive")} className='py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer'>Starts But Doesn't Drive</li>
                            <li onClick={() => handleSetVehcileCondition("doesnotstart")} className='py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer'>Doesn't Start</li>
                        </ul>
                    </div>

                </form>
            }

            {
                currIndex === 4 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Enter Your Vehcile Mileage</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <input value={mileage} onChange={e => handleSetMileage(e.target.value)} placeholder='Vehcile Mileage' className='w-full p-2 focus:outline-0 border-b-[0.5px] border-b-[#ccc]' type="number" name="" id="" />
                    </div>
                </form>
            }
            {
                currIndex === 5 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Keys Available?</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <ul className='w-full border-0'>
                            <li onClick={() => handleSetKeysAvailable(true)} className='py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer'>Yes</li>
                            <li onClick={() => handleSetKeysAvailable(false)} className='py-4 px-2 border-gray-300 hover:bg-blue-400 hover:text-white cursor-pointer'>No</li>
                        </ul>
                    </div>
                </form>
            }
            {
                currIndex === 6 && <form className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto shadow-lg rounded-2xl'>
                    <div className='bg-blue-400 w-full lg:p-4 p-2 rounded-t-2xl'>
                        <h1 className='text-white font-medium'>Your Phone Number?</h1>
                    </div>
                    <div className='overflow-y-scroll h-[50vh] w-full'>
                        <input value={phone} onChange={e => handleSetPhone(e.target.value)} placeholder='Phone Number' className='w-full p-2 focus:outline-0 border-b-[0.5px] border-b-[#ccc]' type="tel" name="" id="" />
                    </div>
                </form>
            }
            <div className='lg:w-[50%] md:w-[50%] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between py-8'>
                <button onClick={() => setCurrIndex(pre => pre - 1)} disabled={currIndex === 0} className='disabled:bg-gray-200 bg-black p-2 text-white rounded-lg flex items-center gap-2'>
                    <FaArrowAltCircleLeft size={20} />
                    prev
                </button>
                {
                    currIndex === 6 ? <button className='bg-black p-2 text-white rounded-lg flex items-center gap-2'>Get an Offer</button> : <button onClick={() => setCurrIndex(pre => pre === 6 ? pre : pre + 1)} className='bg-black p-2 text-white rounded-lg flex items-center gap-2'>
                        <FaArrowAltCircleRight size={20} />
                        next
                    </button>
                }
            </div>
        </div>
    )
}

export default Contact
