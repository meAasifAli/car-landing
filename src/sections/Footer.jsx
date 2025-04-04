import React from 'react'
import { CiTimer } from 'react-icons/ci'
import { FaFacebook, FaWhatsapp, } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'


const Footer = () => {

    return (
        <footer className="bg-black text-white">
            <div className="border-b-[0.5px] border-b-[#ccc] py-4 lg:py-8 grid gap-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 w-[90%] mx-auto">
                <section aria-labelledby="contact-info">
                    <h2 id="contact-info" className="text-xl font-medium">EcologyCash4Car</h2>
                    <address className='py-4'>
                        <a href="tel:+16198307005" className="text-sm flex items-center gap-2">
                            <IoIosCall className="text-blue-900 text-lg" />
                            <span className="text-gray-400">Call Us: +1 (619) 830-7005</span>
                        </a>
                        <p className="text-sm flex items-center gap-2">
                            <CiTimer className="text-blue-900 text-lg" />
                            <span className="text-gray-400">Open Daily: 8 AM - 5 PM</span>
                        </p>
                    </address>
                    <div className="flex items-center gap-4 mt-4">
                        <a href="https://www.facebook.com/QuickAutoWrecking" aria-label="Facebook">
                            <FaFacebook size={25} className="text-blue-900" />
                        </a>
                        <a target="_blank" href="https://wa.me/16198307005" aria-label="Instagram">
                            <FaWhatsapp size={25} className="text-blue-900" />
                        </a>

                    </div>
                </section>

                <nav aria-labelledby="major-cities">
                    <h2 id="major-cities" className="text-xl font-medium">Major Cities</h2>
                    <ul>
                        <li><a href="#" className="text-sm text-gray-400">Los Angeles, CA
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400">Riverside, CA
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400">San Diego, CA</a></li>

                    </ul>
                </nav>

                <nav aria-labelledby="services">
                    <h2 id="services" className="text-xl font-medium">Our Services</h2>
                    <ul>
                        <li><a href="#" className="text-sm text-gray-400">Cash For Cars
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400">Sell My Car
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400">Car Buyers
                            Car Recycling
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400">Cash For Clunkers
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400">Cash For Junk Cars
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400"> Who Buys Wrecked Cars
                        </a></li>
                    </ul>
                </nav>



                <nav aria-labelledby='keywords'>
                    <ul>
                        <li><a href="#" className="text-sm text-gray-400">Junk My Car

                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400"> Sell Your Car

                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400">   Sell My Truck

                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400"> Who Buys Junk Cars

                        </a></li>

                        <li><a href="#" className="text-sm text-gray-400"> Cash For Clunkers
                        </a></li>
                        <li><a href="#" className="text-sm text-gray-400"> Cash For Junk Cars
                        </a></li>
                    </ul>
                </nav>

                <nav aria-labelledby="legal">
                    <h2 id="legal" className="text-xl font-medium">Legal</h2>
                    <ul>
                        <li><a href="#" className="text-sm text-gray-400">Terms and Conditions</a></li>
                        <li><a href="#" className="text-sm text-gray-400">Privacy Policy</a></li>
                    </ul>
                </nav>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center py-6 w-[90%] mx-auto">
                <p className="text-sm text-gray-400">&copy; 2025 EcologyCash4Cars.com - All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="#" className="text-sm text-gray-400">Terms and Conditions</a>
                    <p className="font-bold">&middot;</p>
                    <a href="#" className="text-sm text-gray-400">Privacy Policy</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer