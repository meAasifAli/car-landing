import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cars } from "../static/data";
import Car from "../components/Car";

const SearchedCars = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30, // Ensures spacing
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            partialVisibilityGutter: 20,
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            partialVisibilityGutter: 10,
        },
    };

    return (
        <section
            id="searched-cars"
            aria-labelledby="searched-cars-heading"
            className="w-[90%] mx-auto my-4 lg:my-8"
        >
            <h1
                id="searched-cars-heading"
                className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bold text-center py-4 lg:py-16"
            >
                Most Searched Cars
            </h1>

            {/* Carousel */}
            <Carousel
                className="py-4"
                responsive={responsive}
                swipeable
                draggable
                autoPlay
                infinite
                keyBoardControl
                transitionDuration={500}
                customTransition="transform 500ms ease-in-out"
                itemClass="px-2" // Ensures spacing between items
                containerClass="pb-6" // Prevents cropping
            >
                {cars.map((item, id) => (
                    <div key={id} className="flex justify-center"> {/* Centers items */}
                        <Car
                            imgSrc={item.imgSrc}
                            title={item.title}
                            des={item.des}
                            fuelType={item.fuelType}
                            location={item.location}
                            marketPrice={item.marketOffer}
                            ourPrice={item.ourOffer}
                            miles={item.miles}
                        />
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default SearchedCars;
