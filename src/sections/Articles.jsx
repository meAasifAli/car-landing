import React from 'react'
import { articles } from '../static/data'

const Articles = () => {
    return (
        <section className='w-[90%] mx-auto py-8 md:py-8 lg:py-16 flex flex-col gap-4 lg:gap-8' id="content" aria-labelledby='content'>
            {
                articles.map((article, id) => (
                    <article key={id}>
                        <h2 className='font-bold text-lg md:text-2xl lg:text-2xl tracking-wider'>
                            {article.title}
                        </h2>
                        <p className='font-normal text-[16px] text-gray-600 py-4 leading-6 tracking-normal'>
                            {article.content}
                        </p>
                    </article>
                ))
            }


        </section>
    )
}

export default Articles