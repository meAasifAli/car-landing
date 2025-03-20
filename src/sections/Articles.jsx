import React from 'react'
import { articles } from '../static/data'
import { motion } from 'motion/react'

const Articles = () => {
    return (
        <section
            className='w-[90%] mx-auto py-8 md:py-8 lg:py-16 flex flex-col gap-4 lg:gap-8' id="content" aria-labelledby='content'>
            {
                articles.map((article, id) => (
                    <motion.article
                        initial={{ opacity: 0, y: 20, }}
                        whileInView={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        key={id}>
                        <h2 className='font-bold text-lg md:text-2xl lg:text-2xl tracking-wider'>
                            {article.title}
                        </h2>
                        <p className='font-normal text-[16px] text-gray-600 py-4 leading-6 tracking-normal'>
                            {article.content}
                        </p>
                    </motion.article>
                ))
            }


        </section>
    )
}

export default Articles