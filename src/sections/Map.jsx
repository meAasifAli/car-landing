import { motion } from 'motion/react'

const Map = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, }}
            whileInView={{ opacity: 1, y: 0, }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='w-full h-[400px]'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13448.399258709504!2d-116.919919!3d32.576862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94703ae5c2cd1%3A0x3992b73ef529d910!2sQuick%20Auto%20Wrecking!5e0!3m2!1sen!2sus!4v1742485600880!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </motion.div >

    )
}

export default Map