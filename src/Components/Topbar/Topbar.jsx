import React from 'react'
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import tweeter from '../../assets/tweeter.png'
import viber from '../../assets/viber.png'
import whatsapp from '../../assets/whatsapp.png'

const Topbar = () => {
  return (
    <div className='bg-green-700 text-white text-xl w-screen h-[69.59px] flex justify-between'>
        <div className='flex'>

        <div className='flex p-5 items-center gap-1 ml-5'>
        <FaGlobeAmericas/>
        <h1>Beaumont.com.np</h1>
        </div>
        <div className='flex p-5 items-center gap-1 ml-5'>
        <FaPhoneSquareAlt/>
        <h1>+977 985-2054171</h1>
        </div>
        </div>

        <div className='flex items-center'>
            <p className='flex cursor-pointer hover:text-orange-300'>Privacy Policy</p>
            <p className='pl-3'>|</p>
            <p className='pl-2'> Beaumont &#169; All Rights Reserved. Design & Developed by Bardali </p>
        </div>

        <div className='flex gap-3 items-center pr-[50px] '>
        <div>
            <img src={facebook} className='w-[35px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110' />
        </div>
        <div>
            <img src={whatsapp} className='w-[35px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110' />
        </div>
        <div>
            <img src={instagram} className='w-[35px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110' />
        </div>
        <div>
            <img src={viber} className='w-[35px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110' />
        </div>
        <div>
            <img src={tweeter} className='w-[35px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110' />
        </div>
        </div>
        

      
      
    </div>
  )
}

export default Topbar
