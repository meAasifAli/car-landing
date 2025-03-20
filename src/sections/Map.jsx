import React from 'react'

const Map = () => {
    return (
        <div className='w-full h-[400px]'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429155.6498436182!2d-117.43741925837581!3d32.824633031614475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95495497f80c9%3A0x5df0f4372635e247!2sSan%20Diego%20Zoo!5e0!3m2!1sen!2sin!4v1742435443995!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

    )
}

export default Map