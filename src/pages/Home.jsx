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
import { useEffect, useRef, useState } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import Testimonial from '../components/Testimonial';
const Home = () => {
    const scrollRef = useRef(null)
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

    const [showButtons, setShowButtons] = useState(false);

    const checkScrollability = () => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            setShowButtons(scrollWidth > clientWidth);
        }
    };

    useEffect(() => {
        checkScrollability();
        window.addEventListener("resize", checkScrollability);
        return () => window.removeEventListener("resize", checkScrollability);
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };


    return (
        <main>
            {/* Hero Section */}
            <Hero />
            <section id="category" aria-labelledby="category-heading" className="lg:pt-[200px] md:pt-[100px] py-[150px] pb-8 lg:pb-16 w-full lg:w-[90%] mx-auto">
                <h1 id="category-heading" className="text-3xl font-bold text-center">Browse By Type</h1>
                <div className="relative">
                    {showButtons && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full"
                        >
                            <CgChevronLeft size={20} />

                        </button>
                    )}
                    <ul
                        ref={scrollRef}
                        id="category-list"
                        className="flex flex-row overflow-x-scroll gap-4 lg:gap-8 items-center mt-8 lg:mt-16 scrollbar-hide"
                    >
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
                    {showButtons && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full"
                        >
                            <CgChevronRight size={20} />
                        </button>
                    )}
                </div>
            </section>
            <Banners />
            <section className='w-[90%] mx-auto py-8 md:py-8 lg:py-16 flex flex-col gap-4 lg:gap-8' id="content" aria-labelledby='content'>
                <article>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-2xl tracking-wider'>Sell Your Car for Cash Without a Title in San Diego
                    </h2>
                    <p className='font-normal text-[16px] text-gray-600 py-4 leading-6 tracking-normal'>
                        Looking to sell your car but lost the title? No problem! At Ecology Cash For Cars, we understand that paperwork can sometimes go missing. Don’t let that stop you from selling your vehicle. Simply give us a call and let us know what documents you have. In most cases, a valid ID and a current or expired registration are enough to complete the sale. Unlike other competitors who may tell you that selling without a title is impossible, we work with you to ensure a smooth process. Get in touch today and get top cash for your car!
                    </p>
                </article>
                <article>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-2xl tracking-wider'>Sell Your Car Without a Smog Check in San Diego
                    </h2>
                    <p className='font-normal text-[16px] text-gray-600 py-4 leading-6 tracking-normal'>
                        Failed your smog test and don’t want to spend more money on repairs? You’re not alone! Many car owners choose to sell their vehicles after a failed smog check, and we are here to help. At Ecology Cash For Cars, we specialize in buying cars that have not passed smog inspections. Our environmentally friendly junk car program ensures your old vehicle is removed responsibly while putting cash in your pocket. Stop worrying about costly repairs and call us today to sell your car fast, even without a smog certificate.
                    </p>
                </article>
                <article>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-2xl tracking-wider'>Who Buys Junk Cars in San Diego?
                    </h2>
                    <p className='font-normal text-[16px] text-gray-600 py-4 leading-6 tracking-normal'>
                        If you're wondering where to sell your junk car in San Diego, look no further! Ecology Cash For Cars pays top dollar for unwanted vehicles. Our process is simple: we evaluate your car, make a fair cash offer, and handle everything from paperwork to towing. Whether your car is wrecked, non-running, or simply old, we’ll take it off your hands quickly and efficiently.
                    </p>
                </article>
                <article>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-2xl tracking-wider'>Best Cash for Cars in San Diego – We Pay the Most!

                    </h2>
                    <p className='font-normal text-[16px] text-gray-600 py-4 leading-6 tracking-normal'>
                        We take pride in being one of the most trusted cash-for-cars services in San Diego. With hundreds of satisfied customers, we ensure a hassle-free experience. Simply fill out our online quote request form or call us for an instant quote. Our car buyers will come to your location, inspect the car, and pay you cash on the spot. Sell your junk car today and contribute to a cleaner, greener environment while making instant money!
                        in San Diego
                    </p>
                </article>
                <article>
                    <h2 className='font-bold text-lg md:text-2xl lg:text-2xl tracking-wider'>Get Fast Cash for Cars in San Diego

                    </h2>
                    <p className='font-normal text-[16px] text-gray-600 py-4 leading-6 tracking-normal'>
                        Tired of receiving lowball offers from other junk car buyers? Ecology Cash For Cars guarantees the highest cash offers in San Diego. We pay what your car is worth—no hidden fees or gimmicks. Our same-day car buying service ensures you get cash in hand without any hassle. Call us now and sell your unwanted car today!
                    </p>
                </article>
            </section>
            <section id="searched-cars" aria-labelledby='searched-cars-heading' className='w-[90%] mx-auto py-4 md:py-8 lg:py-16'>
                <h1 id='searched-cars-heading' className="text-3xl font-bold text-center py-8">Most Searched Cars</h1>
                <Carousel
                    className='lg:py-16 md:py-8 py-4'
                    responsive={responsive}
                    swipeable
                    autoPlay

                >
                    <Car />

                </Carousel>
            </section>
            <section id="choose-us" aria-labelledby='choose-us-heading' className='w-[90%] mx-auto '>
                <h1 id='choose-us-heading' className="text-3xl font-bold text-center py-4 lg:py-8">Why Show US?</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center lg:py-16 md:py-8 py-4 gap-4">
                    <ChooseCard
                        imgSrc={"/assets/dollars.png"}
                        title={"Get the Best Price for Your Car"}
                        des={"We offer top-dollar, fair, and competitive cash offers for your junk or used car in minutes—no waiting, no hassle!."}
                    />
                    <ChooseCard
                        imgSrc={"/assets/fast.png"}
                        title={"Fast, Simple & Convenient"}
                        des={" Skip the stress of private sales. We handle everything—from free pickup to instant cash payment, with zero hidden fees."}
                    />
                    <ChooseCard
                        imgSrc={"/assets/insurance.png"}
                        title={"Safe, Secure & Reliable"}
                        des={" We are a licensed, reputable car buyer with hundreds of satisfied sellers. No scams, no lowball offers—just a fair deal!"}
                    />
                    <ChooseCard
                        imgSrc={"/assets/minus.png"}
                        title={"We Come to You – No Towing Fees!"}
                        des={"No need to drop off your car! We offer free pickup & inspection anywhere in San Diego, making the process seamless."}
                    />

                </div>
            </section>
            <section id="searched-cars" aria-labelledby='searched-cars-heading' className='w-[90%] mx-auto lg:py-16 py-4 md:py-8'>
                <h1 id='searched-cars-heading' className="text-3xl font-bold text-center py-8">What Customers say about us!</h1>
                <Carousel
                    className='lg:py-16 md:py-8 py-4'
                    responsive={responsive}
                    swipeable
                    autoPlay

                >
                    <Testimonial imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"} rating={"4.0"} name={"Sarah M. – San Diego, CA"} des={"I had an old truck sitting in my driveway for years, and I finally decided to get rid of it. Mario and his team made the process so simple! They gave me a fair offer over the phone, picked it up the same day, and paid me cash on the spot. Super easy and hassle-free!"} />
                    <Testimonial imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"} rating={"5.0"} name={" James R. – Chula Vista, CA"} des={"I was skeptical about selling my junk car without a title, but Mario and his staff handled everything professionally. All I needed was my ID and registration, and they took care of the rest. Highly recommend if you’re looking to sell your car fast!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"5.0"}
                        name={"Maria Luiza. – Oceanside, CA"}
                        des={"I failed my smog test and didn’t want to waste money on repairs. Mario offered me a great price, even though my car couldn’t pass the test. The whole process was smooth, and they towed it for free! Honest and reliable team!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"4.0"}
                        name={"David H. – Escondido, CA"}
                        des={"After calling several places, I was getting ridiculously low offers for my old pickup. Then I called Mario at Ecology Cash For Cars, and he beat every other offer. No haggling, no waiting—just quick cash in hand. Definitely recommend!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"4.0"}
                        name={"Jessica Colleen. – La Mesa, CA"}
                        des={"Selling my broken-down car was easier than I expected. The staff was friendly, professional, and very efficient. I filled out the online form, got a quote within minutes, and had my car picked up the same day. No hidden fees, no last-minute surprises—just great service!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"4.0"}
                        name={"Roberto T. – El Cajon, CA"}
                        des={"I had an old work truck that was completely rusted out, and I figured no one would buy it. Mario and his team not only gave me a great offer but also picked it up for free. It was a smooth and professional experience from start to finish!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"4.0"}
                        name={"Emily P. – National City, CA"}
                        des={"I was worried about selling my junk car because I didn’t want to deal with pushy buyers. This company made it easy—they gave me a solid offer and stuck to it. The tow truck driver was on time and super friendly. Mario runs a great business!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"4.0"}
                        name={"Michael B. – Poway, CA"}
                        des={"I had a wrecked car taking up space, and Mario’s team took it off my hands with no hassle. They gave me cash on the spot and even handled the paperwork. If you need to get rid of a junk car, this is the place to call!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"4.0"}
                        name={"Juan S. – San Marcos, CA"}
                        des={"Tenía un coche viejo que ya no servía y no sabía qué hacer con él. Llamé a Mario y me ofreció un precio justo de inmediato. Su equipo vino el mismo día, lo recogió gratis y me pagaron en efectivo. ¡Excelente servicio y muy recomendados!"} />
                    <Testimonial
                        imgSrc={"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"}
                        rating={"4.0"}
                        name={"Lupita R. – Chula Vista, CA"}
                        des={"¡Increíble servicio! Mario y su equipo fueron muy profesionales y amables. Vendí mi camioneta en menos de un día sin complicaciones. Me dieron un buen precio y recogieron el vehículo sin costo. Si tienes un coche viejo, ¡este es el lugar para venderlo!"} />
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
