import Banners from '../sections/Banners';
import Hero from '../sections/Hero';
import Categories from '../sections/Categories';
import Articles from '../sections/Articles';
import Chooseus from '../sections/Chooseus';
import Searchedcars from '../sections/Searchedcars';
import Testimonials from '../sections/Testimonials';
import Locations from '../sections/Locations';
import Explore from '../sections/Explore';
import Newsletter from '../sections/Newsletter';
import Map from '../sections/Map';

const Home = () => {

    return (
        <main>
            {/* Hero Section */}
            <Hero />
            <Categories />
            <Banners />
            <Articles />
            <Chooseus />
            <Searchedcars />
            <Testimonials />
            <Locations />
            <Map />
            <Explore />
            <Newsletter />
        </main >
    )
}

export default Home
