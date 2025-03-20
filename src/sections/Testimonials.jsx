import React from "react";
import Testimonial from "../components/Testimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "motion/react"

const Testimonials = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30, // Ensures spacing
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 20,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 10,
        },
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="testimonials"
            aria-labelledby="testimonial-heading"
            className="lg:my-8 my-4 py-4 sm:py-0 sm:h-screen flex flex-col items-center justify-center bg-blue-950"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20, }}
                whileInView={{ opacity: 1, y: 0, }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                id="testimonial-heading"
                className="lg:text-3xl md:text-2xl sm:text-xl text-xl text-white font-bold text-center lg:py-16 md:py-8 py-4"
            >
                What Customers Say About Us!
            </motion.h1>

            <Carousel
                className="w-[90%] mx-auto"
                responsive={responsive}
                swipeable
                draggable
                autoPlay
                infinite
                keyBoardControl
                transitionDuration={500}
                customTransition="transform 500ms ease-in-out"
                itemClass="px-2" // Adds spacing between items
                containerClass="pb-6" // Prevents layout shifting
            >
                {[
                    {
                        imgSrc: "/assets/sarahm.jpg",
                        rating: "4.0",
                        name: "Sarah M. – San Diego, CA",
                        des: "I had an old truck sitting in my driveway for years, and I finally decided to get rid of it. Mario and his team made the process so simple! They gave me a fair offer over the phone, picked it up the same day, and paid me cash on the spot. Super easy and hassle-free!",
                    },
                    {
                        imgSrc: "/assets/james.jpg",
                        rating: "5.0",
                        name: "James R. – Chula Vista, CA",
                        des: "I was skeptical about selling my junk car without a title, but Mario and his staff handled everything professionally. All I needed was my ID and registration, and they took care of the rest. Highly recommend if you’re looking to sell your car fast!",
                    },
                    {
                        imgSrc: "/assets/maria.jpg",
                        rating: "5.0",
                        name: "Maria Luiza. – Oceanside, CA",
                        des: "I failed my smog test and didn’t want to waste money on repairs. Mario offered me a great price, even though my car couldn’t pass the test. The whole process was smooth, and they towed it for free! Honest and reliable team!",
                    },
                    {
                        imgSrc: "/assets/davidh.jpg",
                        rating: "4.0",
                        name: "David H. – Escondido, CA",
                        des: "After calling several places, I was getting ridiculously low offers for my old pickup. Then I called Mario at Ecology Cash For Cars, and he beat every other offer. No haggling, no waiting—just quick cash in hand. Definitely recommend!",
                    },
                    {
                        imgSrc: "/assets/jessica.jpg",
                        rating: "4.0",
                        name: "Jessica Colleen. – La Mesa, CA",
                        des: "Selling my broken-down car was easier than I expected. The staff was friendly, professional, and very efficient. I filled out the online form, got a quote within minutes, and had my car picked up the same day. No hidden fees, no last-minute surprises—just great service!",
                    },
                    {
                        imgSrc: "/assets/robert.jpg",
                        rating: "4.0",
                        name: "Roberto T. – El Cajon, CA",
                        des: "I had an old work truck that was completely rusted out, and I figured no one would buy it. Mario and his team not only gave me a great offer but also picked it up for free. It was a smooth and professional experience from start to finish!",
                    },
                    {
                        imgSrc: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
                        rating: "4.0",
                        name: "Emily P. – National City, CA",
                        des: "I was worried about selling my junk car because I didn’t want to deal with pushy buyers. This company made it easy—they gave me a solid offer and stuck to it. The tow truck driver was on time and super friendly. Mario runs a great business!",
                    },
                    {
                        imgSrc: "/assets/michealb.jpg",
                        rating: "4.0",
                        name: "Michael B. – Poway, CA",
                        des: "I had a wrecked car taking up space, and Mario’s team took it off my hands with no hassle. They gave me cash on the spot and even handled the paperwork. If you need to get rid of a junk car, this is the place to call!",
                    },
                    {
                        imgSrc: "/assets/juans.jpg",
                        rating: "4.0",
                        name: "Juan S. – San Marcos, CA",
                        des: "Tenía un coche viejo que ya no servía y no sabía qué hacer con él. Llamé a Mario y me ofreció un precio justo de inmediato. Su equipo vino el mismo día, lo recogió gratis y me pagaron en efectivo. ¡Excelente servicio y muy recomendados!",
                    },
                    {
                        imgSrc: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
                        rating: "4.0",
                        name: "Lupita R. – Chula Vista, CA",
                        des: "¡Increíble servicio! Mario y su equipo fueron muy profesionales y amables. Vendí mi camioneta en menos de un día sin complicaciones. Me dieron un buen precio y recogieron el vehículo sin costo. Si tienes un coche viejo, ¡este es el lugar para venderlo!",
                    },
                ].map((testimonial, id) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        key={id} className="flex justify-center">
                        <Testimonial
                            imgSrc={testimonial.imgSrc}
                            rating={testimonial.rating}
                            name={testimonial.name}
                            des={testimonial.des}
                        />
                    </motion.div>
                ))}
            </Carousel>
        </motion.section>
    );
};

export default Testimonials;
