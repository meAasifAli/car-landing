import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center w-[90%] mx-auto h-[80px] py-2 lg:py-4 relative">
            <a href="/" className="focus:outline-none">
                <h1 className="font-bold text-lg md:text-lg lg:text-xl">EcologyCash4Car</h1>
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
