import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-start'>
                <div>
                    <img src={assets.ZEN_G_LOGO_WHITE} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 text-start'>The voice of Gen Z, printed on a tee. Bold designs, unapologetic vibes, and trending styles for the ones who keep it real. Wear your mood, express your truth, and rep the culture.</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 '>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>DELEVERY</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+8801622790628</li>
                        <li>fashion.gzen@gmail.com</li>
                        <li>facebook.com/fashion.zen.g</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text center'>Copywrite 2024</p>
            </div>
        </div>
    )
}

export default Footer