import React from 'react'

const Newsletter = () => {
    return (
        <section id='news-letter' aria-labelledby='news-letter' className='flex flex-col justify-center items-center py-16 '>
            <h1 className='text-3xl font-medium tracking-wider leading-6'>Join Cash4Cars</h1>
            <p className='text-sm font-normal mt-4'>Receive pricing updates, shopping tips & more!</p>

            <form action="" id='news-letter' className=' mt-4 lg:mt-8  lg:w-[500px] flex items-center gap-4 w-[90%] mx-auto'>
                <input type="text" placeholder='Enter your email' className='outline-0 py-2 w-full border border-black p-3 lg:p-4 rounded-2xl' />
                <button className='bg-black p-3 lg:p-4  text-white rounded-2xl'>Signup</button>
            </form>
        </section>
    )
}

export default Newsletter