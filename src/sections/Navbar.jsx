import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {

    return (
        <>
            <nav>
                <ul className="lg:flex items-center gap-8 hidden ">
                    <li className="relative group">
                        <a href="#" className="font-sans font-normal text-sm">About</a>
                        <div
                            className="absolute -bottom-1 left-0 h-1 bg-slate-300 w-0 group-hover:w-full transition-all duration-300">
                        </div>
                    </li>

                    <li className="relative group">
                        <a href="#" className="font-sans font-normal text-sm">Contact us</a>
                        <div
                            className="absolute -bottom-1 left-0 h-1 bg-slate-300 w-0 group-hover:w-full transition-all duration-300">
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
                isMenuOpen && <ul className="absolute -bottom-35 right-0 bg-amber-50 z-50 p-4 rounded-2xl">
                    <li className="relative group">
                        <a href="#" className="font-sans font-normal text-sm">About</a>

                    </li>
                    <li className="relative group">
                        <a href="#" className="font-sans font-normal text-sm">Car</a>

                    </li>
                    <li className="relative group">
                        <a href="#" className="font-sans font-normal text-sm">Become a Partner</a>


                    </li>
                    <li className="relative group">
                        <a href="#" className="font-sans font-normal text-sm">Terms and Conditions</a>

                    </li>
                    <li className="relative group">
                        <a href="#" className="font-sans font-normal text-sm">Contact us</a>

                    </li>
                </ul>
            }
        </>
    )
}

export default Navbar