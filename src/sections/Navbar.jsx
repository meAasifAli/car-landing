import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul className="flex items-center gap-8">
                <li className="relative group">
                    <a href="#" className="font-sans font-normal text-sm">About</a>
                    <div
                        className="absolute -bottom-1 left-0 h-1 bg-[#F55757] w-0 group-hover:w-full transition-all duration-300">
                    </div>
                </li>
                <li className="relative group">
                    <a href="#" className="font-sans font-normal text-sm">Car</a>
                    <div
                        className="absolute -bottom-1 left-0 h-1 bg-[#F55757] w-0 group-hover:w-full transition-all duration-300">
                    </div>
                </li>
                <li className="relative group">
                    <a href="#" className="font-sans font-normal text-sm">Become a Partner</a>
                    <div
                        className="absolute -bottom-1 left-0 h-1 bg-[#F55757] w-0 group-hover:w-full transition-all duration-300">
                    </div>

                </li>
                <li className="relative group">
                    <a href="#" className="font-sans font-normal text-sm">Terms and Conditions</a>
                    <div
                        className="absolute -bottom-1 left-0 h-1 bg-[#F55757] w-0 group-hover:w-full transition-all duration-300">
                    </div>
                </li>
                <li className="relative group">
                    <a href="#" className="font-sans font-normal text-sm">Contact us</a>
                    <div
                        className="absolute -bottom-1 left-0 h-1 bg-[#F55757] w-0 group-hover:w-full transition-all duration-300">
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar