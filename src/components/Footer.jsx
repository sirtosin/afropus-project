import React from 'react'
import image from '../assets/web-logo.jpg'
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer className=' bg-black text-white'>
    <div className=' p-8 font-serif md:flex items-center justify-around'>
      <section className='p-5 m-4'>
        <img src={image} className='w-24 h-24' />
        <div className='p-1 mb-3'>
          <h4 className='mt-2 text-white'>Address: 8,kehinde Akamo ilupeju Lagos Nigeria</h4>
          <h4 className='mt-2 text-white'>
            Phone: +234 8140680757</h4>
          <h4 className='mt-2 text-white'>
            Email: Afropus@gmail.com</h4>
     </div>
        <div className='flex space-x-5 '>
          <BsFacebook className=' text-2xl hover:text-blue-600'/>
          <BsInstagram className='text-2xl hover:text-amber-700'/>
          <BsTwitter className='text-2xl  hover:text-blue-600' />
          <BsPinterest className='text-2xl  hover:text-red-500' />
        </div>
      </section>
      <section className='p-4 m-4 '>
          <h4 className='text-white'>
          Join Our Newsletter Now
        </h4>
          <p className='text-white'>
          Get E-Mail Updates About Our Latest Shop And Special Offers.

        </p>
        <div className='bg-gray-800 rounded-lg p-3 flex mt-3'>
          <input type='text' 
          className='w-full p-2 text-gray-200 bg-transparent border-none outline-none'
            placeholder='Enter Your Email' />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>subscribe</button>
       </div>
      </section>
      </div>

      <div className='w-[100%] mb-4 h-0.5 bg-white' />
      <h4 className='text-center text-white'>Copyright &copy; {new Date().getFullYear()} All Rights Reserved | Afropus &trade; </h4>
    </footer>
  )
}
export default Footer
