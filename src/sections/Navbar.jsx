import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {

    return (
        <div>
            <nav>
                <ul className="lg:flex items-center gap-8 hidden ">
                    <li className="relative group">
                        <Link to={"/about"} className="font-sans font-normal text-sm">About us</Link>
                        <div
                            className="absolute -bottom-1 left-0 h-1 bg-blue-300 w-0 group-hover:w-full transition-all duration-300">
                        </div>
                    </li>
                    <li className="relative group">
                        <Link to={"/services"} className="font-sans font-normal text-sm">Services</Link>
                        <div
                            className="absolute -bottom-1 left-0 h-1 bg-blue-300 w-0 group-hover:w-full transition-all duration-300">
                        </div>
                    </li>
                    <li className="relative group">
                        <Link to={"/contact"} className="font-sans font-normal text-sm">Contact us</Link>
                        <div
                            className="absolute -bottom-1 left-0 h-1 bg-blue-300 w-0 group-hover:w-full transition-all duration-300">
                        </div>
                    </li>
                </ul>
                <button onClick={() => setIsMenuOpen(pre => !pre)} className='flex md:flex lg:hidden'>
                    {
                        isMenuOpen ? <IoMdClose size={25} color='#000' /> : <RxHamburgerMenu size={25} color='#000' />
                    }
                </button>

            </nav>
            {
                isMenuOpen && <ul className="absolute -bottom-15 right-0 bg-amber-50 z-50 p-4 rounded-2xl">
                    <li>
                        <Link to={"/about"} className="font-sans font-normal text-sm">About us</Link>
                    </li>
                    <li>
                        <Link to={"/services"} className="font-sans font-normal text-sm">Services</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="font-sans font-normal text-sm">Contact us</Link>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Navbar