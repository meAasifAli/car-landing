import { motion } from 'motion/react'

const Explore = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="banner-2" aria-labelledby='banner-2' className='bg-blue-100 lg:h-screen flex  flex-col lg:flex-row justify-center lg:justify-between md:px-8 px-4 lg:px-16 items-center py-4'>
            <div>
                <motion.h3

                    initial={{ opacity: 0, y: 20, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='sm:text-3xl text-2xl lg:text-5xl font-bold tracking-widest leading-10'>Frequent Brands We Buy</motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className='text-xs md:text-lg  font-normal leading-7 tracking-wider max-w-[700px] mt-6'>
                    Ecology cash for cars San Diego provides instant cash for vehicles,
                    whether they are junk, scrap, luxury, used or in any condition. We are based in San Diego and buy Toyotas, Fords, BMWs, Hondas, Mercedes-Benzes, Nissan and more. We also offer same-day free towing as well as competitive offers tailored for your car's worth. Our 3-step process is hassle-free, regardless of whether your vehicle is running, damaged, or broken. Call or submit your details online to receive an accurate quote and get paid immediately after we pick up the car. We serve all of San Diego County including La Jolla Chula Vista and Oceanside. Call us today to get a no-obligation, free offer for your unwanted vehicle.
                </motion.p>
                <motion.button initial={{ opacity: 0, y: 20, }}
                    whileInView={{ opacity: 1, y: 0, }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ scale: 1.02 }}
                    className='bg-black p-4 text-cyan-50 my-6 w-full lg:w-auto rounded-2xl hover:bg-black/70 hover:transition-all delay-75 duration-500 ease-linear'>
                    Call Us (Get $100 on these Brands)
                </motion.button>
            </div>
            <motion.div
                className="relative w-[300px] h-[300px] flex items-center justify-center rounded-full "
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {[
                    { src: "/assets/logos/acura.svg", alt: "Acura" },
                    { src: "/assets/logos/bmw.svg", alt: "BMW" },
                    { src: "/assets/logos/fiat.svg", alt: "Fiat" },
                    { src: "/assets/logos/ford.svg", alt: "Ford" },
                    { src: "/assets/logos/gmc.svg", alt: "GMC" },
                    { src: "/assets/logos/nissan.svg", alt: "Nissan" },
                    { src: "/assets/logos/honda.svg", alt: "Honda" },
                    { src: "/assets/logos/toyota.svg", alt: "Toyota" }
                ].map((logo, index) => {
                    const total = 8; // Total logos
                    const angle = (index / total) * 360; // Spread evenly
                    return (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="absolute w-12 h-12 object-contain"
                            style={{
                                transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`
                            }}
                        />
                    );
                })}
            </motion.div>

        </motion.section>
    )
}

export default Explore