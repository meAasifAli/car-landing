import Category from '../components/Category'
import { TbCarSuv } from "react-icons/tb";
import { FaCar, FaCarAlt, FaShuttleVan, FaTruckPickup } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import Banners from '../sections/Banners';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Car from '../components/Car';
import ChooseCard from '../components/ChooseCard';
import Hero from '../sections/Hero';
const Home = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <main>
            {/* Hero Section */}
            <Hero />
            <section id="category" aria-labelledby="category-heading" className="lg:pt-[200px] md:pt-[100px] pt-[50px] pb-8 lg:pb-16 w-full lg:w-[90%] mx-auto">
                <h1 id="category-heading" className="text-3xl font-bold text-center">Browse By Type</h1>
                <ul className="flex flex-row overflow-x-scroll gap-4  lg:gap-8 items-center mt-8 lg:mt-16">
                    <Category text="SUV" Icon={<TbCarSuv size={40} />} />
                    <Category text="Sedan" Icon={<FaCar size={40} />} />
                    <Category text="Hatchback" Icon={<FaTruckPickup size={40} />} />
                    <Category text="Coupe" Icon={<FaCarAlt size={40} />} />
                    <Category text="Hybrid" Icon={<FaCarAlt size={40} />} />
                    <Category text="Convertible" Icon={<FaCarAlt size={40} />} />
                    <Category text="Van" Icon={<FaShuttleVan size={40} />} />
                    <Category text="Truck" Icon={<CiDeliveryTruck size={40} />} />
                    <Category text="Electric" Icon={<MdElectricCar size={40} />} />
                </ul>
            </section>
            <Banners />
            <section id="searched-cars" aria-labelledby='searched-cars-heading' className='w-[90%] mx-auto py-4 md:py-8 lg:py-16'>
                <h1 id='searched-cars-heading' className="text-3xl font-bold text-center py-8">Most Searched Cars</h1>
                <Carousel
                    className='lg:py-16 md:py-8 py-4'
                    responsive={responsive}
                    swipeable
                    autoPlay

                >
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                </Carousel>
            </section>
            <section id="choose-us" aria-labelledby='choose-us-heading' className='w-[90%] mx-auto '>
                <h1 id='choose-us-heading' className="text-3xl font-bold text-center py-4 lg:py-8">Why Show US?</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:py-16 md:py-8 py-4 gap-4">
                    <ChooseCard
                        imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/11/f1.svg"}
                        title={"Special Financing Offers"}
                        des={"Our stress-free finance department that can find financial solutions to save you money."}
                    />
                    <ChooseCard
                        imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/f2.svg"}
                        title={"Trusted Car Dealership"}
                        des={"Our stress-free finance department that can find financial solutions to save you money."}
                    />
                    <ChooseCard
                        imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/f3.svg"}
                        title={"Transparent Pricing"}
                        des={"Our stress-free finance department that can find financial solutions to save you money."}
                    />
                    <ChooseCard
                        imgSrc={"https://demoapus1.com/boxcar/wp-content/uploads/2023/09/f4.svg"}
                        title={"Expert Car Service"}
                        des={"Our stress-free finance department that can find financial solutions to save you money."}
                    />

                </div>
            </section>
            <section id="searched-cars" aria-labelledby='searched-cars-heading' className='w-[90%] mx-auto lg:py-16 py-4 md:py-8'>
                <h1 id='searched-cars-heading' className="text-3xl font-bold text-center py-8">Latest Cars</h1>
                <Carousel
                    className='lg:py-16 md:py-8 py-4'
                    responsive={responsive}
                    swipeable
                    autoPlay

                >
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                    <Car />
                </Carousel>
            </section>
            <section id="blogs" aria-labelledby='blogs' className='bg-blue-100 h-screen flex  flex-col lg:flex-row justify-center lg:justify-between md:px-8 px-4 lg:px-16 items-center py-4'>
                <div>
                    <h3 className='text-3xl font-bold tracking-widest leading-10'>Explore Our Premium Brands</h3>
                    <p className='text-sm font-normal leading-6 tracking-wider max-w-[450px] mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis est quisquam consequatur error tempora dolore ab quam, assumenda voluptatem.</p>
                    <button className='bg-black p-4 text-cyan-50 my-6 rounded-2xl hover:bg-black/70 hover:transition-all delay-75 duration-500 ease-linear'>
                        Show All Brands
                    </button>
                </div>
                <div>
                    <img className='lg:h-[500px] lg:w-[500px] md:w-[300px] md:h-[300px] h-[300px] w-[300px]  object-contain' src="https://demoapus1.com/boxcar/wp-content/uploads/2023/09/logo-brand.png" alt="bg-img" />
                </div>
            </section>
            <section id='news-letter' aria-labelledby='news-letter' className='flex flex-col justify-center items-center py-16 '>
                <h1 className='text-3xl font-medium tracking-wider leading-6'>Join Cash4Cars</h1>
                <p className='text-sm font-normal mt-4'>Receive pricing updates, shopping tips & more!</p>

                <form action="" id='news-letter' className='border border-black p-3 lg:p-4 rounded-2xl mt-4 lg:mt-8  lg:w-[500px] flex items-center w-[90%] mx-auto'>
                    <input type="text" placeholder='Enter your email' className='outline-0 py-2 w-full' />
                    <button className='bg-black p-2 text-white rounded-2xl'>Signup</button>
                </form>
            </section>
        </main >
    )
}

export default Home
