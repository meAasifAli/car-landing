import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import Navbar from './sections/Navbar'
import { IoIosCall } from "react-icons/io";
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';





const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    return (
        <>



            <header className="flex justify-between items-center p-2 md:p-2 lg:p-4 w-[90%] mx-auto h-30 relative">
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </header>
            {/* <div className='bg-blue-900 p-2 w-full flex justify-center items-center'>
                <IoIosCall className='text-xl text-white' />
                <a href="tel:+9111111111" className='text-lg text-white'>+91-8081785613</a>
            </div> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <footer className='bg-black text-white'>
                <div className='border-b-[0.5px] border-b-[#ccc] lg:h-[50vh] grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center w-full pt-16'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Company</h1>
                        <a href="#" className='text-sm font-normal'>about us</a>
                        <a href="#" className='text-sm font-normal'>Blog</a>
                        <a href="#" className='text-sm font-normal'>Services</a>
                        <a href="#" className='text-sm font-normal'>FAQS</a>
                        <a href="#" className='text-sm font-normal'>Terms</a>
                        <a href="#" className='text-sm font-normal'>Contact US</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Quick Links</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Our Brands</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Vehicle Type</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-xl font-medium'>Sales Hours</h1>
                        <a href="#" className='text-sm font-normal'>Get in Touch</a>
                        <a href="#" className='text-sm font-normal'>Help Center</a>
                        <a href="#" className='text-sm font-normal'>Live Chat</a>
                        <a href="#" className='text-sm font-normal'>How it Works</a>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center py-6 w-[90%] mx-auto'>
                    <p className='text-sm font-normal'>&copy; 2025 EcologyCash4Cars.com all rights reserved</p>
                    <div className='flex items-center gap-4'>
                        <a href='#' className='text-sm font-normal'>Terms and Conditions</a>
                        <p className='font-bold'>&middot;</p>
                        <a href='#' className='text-sm font-normal'>Privacy Notice</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App