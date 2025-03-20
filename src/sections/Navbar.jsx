import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center w-full lg:w-[90%] mx-auto h-30 py-2 lg:py-4 relative">
            <a href="/" className="focus:outline-none">
                <img src="/assets/logo2.png" alt="logo" className="lg:w-50 w-30 h-15 lg:h-20 object-cover" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
                {["about", "services", "contact"].map((route) => (
                    <li key={route} className="relative group list-none">
                        <Link
                            to={`/${route}`}
                            className="font-sans font-normal text-sm focus:outline-none"
                        >
                            {route.charAt(0).toUpperCase() + route.slice(1)} us
                        </Link>
                        <div className="absolute -bottom-1 left-0 h-1 bg-blue-300 w-0 group-hover:w-full transition-all duration-300"></div>
                    </li>
                ))}
                <li role="button" className="relative group list-none bg-blue-900 text-white px-4 py-4 rounded-md">
                    <a
                        href="tel:+16198307005"
                        className="font-sans font-normal text-sm focus:outline-none"
                    >
                        <IoIosCall size={20} color="#fff" className="inline-block mr-2" />
                        <span className="text-sm tex-white">Call Us</span>
                    </a>

                </li>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="lg:hidden focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <IoMdClose size={25} color="#000" /> : <RxHamburgerMenu size={25} color="#000" />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="absolute top-full right-0 bg-white shadow-lg z-50 p-4 rounded-xl w-[180px] flex flex-col gap-3">
                    {["about", "services", "contact"].map((route) => (
                        <li key={route} className="text-sm">
                            <Link to={`/${route}`} onClick={() => setIsMenuOpen(false)} className="focus:outline-none block">
                                {route.charAt(0).toUpperCase() + route.slice(1)} us
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
};

export default Navbar;
