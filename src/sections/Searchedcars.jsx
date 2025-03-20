import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cars } from '../static/data';
import Car from '../components/Car';

const Searchedcars = () => {
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
        <section id="searched-cars" aria-labelledby='searched-cars-heading' className='w-[90%] mx-auto my-4 lg:my-8 '>
            <h1 id='searched-cars-heading' className="lg:text-3xl md:text-2xl sm:tex-xl text-xl font-bold text-center py-4 lg:py-16">Most Searched Cars</h1>
            <Carousel
                className='py-4'
                responsive={responsive}
                swipeable
                autoPlay

            >
                {
                    cars.map((item, id) => (
                        <Car imgSrc={item.imgSrc} key={id} title={item.title} des={item.des} fuelType={item.fuelType} location={item.location} marketPrice={item.marketOffer} ourPrice={item.ourOffer} miles={item.miles} />
                    ))
                }

            </Carousel>
        </section>
    )
}

export default Searchedcars