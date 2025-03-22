import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./sections/Navbar'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Footer = lazy(() => import('./sections/Footer'));
import { InfinitySpin } from 'react-loader-spinner'





const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    return (
        <Suspense fallback={<section className='flex justify-center items-center h-screen w-screen'>
            <InfinitySpin
                visible={true}
                width="200"
                color="blue"
                ariaLabel="infinity-spin-loading"
            />
        </section>}>
            <header className="flex justify-between items-center p-2 md:p-2 lg:p-4 w-[90%] mx-auto h-30 relative">
                <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </Suspense>
    )
}

export default App