import { FaStar } from 'react-icons/fa'

const Testimonial = ({ imgSrc, name, des, rating }) => {
    return (
        <div className='w-[90%] mx-auto md:w-[400px] lg:w-[400px] shadow-md p-4 h-[310px] rounded-lg relative'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center justify-start gap-4'>
                    <img className='h-20 w-20 rounded-full object-cover' src={imgSrc} alt={name} />
                    <div>
                        <h3 className='font-medium text-[16px]'>{name}</h3>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <FaStar size={20} color='#FFD700' />
                                <FaStar size={20} color='#FFD700' />
                                <FaStar size={20} color='#FFD700' />
                                <FaStar size={20} color='#FFD700' />
                                <FaStar size={20} color='#FFD700' />
                            </div>
                            <p className='font-bold text-sm lg:text-lg'>&middot;</p>
                            <p className='font-bold text-sm lg:text-lg'>{rating}</p>
                        </div>
                    </div>
                </div>
                <img className='h-15 w-15 object-cover' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google" />
            </div>
            <p className='text-gray-700 mt-4 leading-6 tracking-wider text-sm testimonail-des'>{des}</p>
            <div className='absolute bottom-0 right-2'>
                <img className='h-20 w-20 object-contain' src="/assets/google.png" alt="google" />
            </div>
        </div>
    )
}

export default Testimonial