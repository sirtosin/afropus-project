import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import image from "../assets/afropuslogo.png"
import UPortrait from './UPortrait';
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  const handleShow = () => {
    setShow(!show);
  }

  return (
    <header className='sticky top-0 left-0 z-50 bg-white shadow p-5  '>
      <nav className='flex items-center justify-around space-x-3 max-w-7xl  mx-auto'>
        <Link to='/'>
          <img src={image} className='w-13 h-12 object-contain cursor-pointer' alt='website-logo' />
        </Link>
        <div className='hidden lg:flex space-x-8 text-2xl font-serif cursor-pointer text-gray-500 '>


          <Link className='m-4 shadow-xl rounded-md p-2 bg-red-600 animate-bounce text-white' to='' onClick={handleShow}>
            Order a Portrait
          </Link>
          {show ? <UPortrait /> : null}
          <Link className='m-4 hover:bg-slate-300 shadow-sm   rounded-lg p-2 ' to='about'>
            About us
          </Link>
          <Link className='m-4 hover:bg-slate-300 shadow-sm  rounded-lg  p-2' to='cart'>
            Cart
          </Link>
          <Link className='m-4 hover:bg-slate-300 shadow-sm  rounded-lg  p-2' to='vendor'>
            Vendor
          </Link>
          <Link className='m-4 hover:bg-slate-300 shadow-sm  rounded-lg  p-2' to='login'>
            Login
          </Link>

        </div>
        {!toggle ?
          <AiOutlineMenu onClick={handleToggle} className='text-3xl lg:hidden cursor-pointer' /> :
          <AiOutlineClose onClick={handleToggle} className='text-3xl cursor-pointer lg:hidden' />}
      </nav>
      {toggle ?
        <section className='h-screen mx-auto lg:hidden '>

          <div className='flex items-center justify-center   flex-col p-8 m-8 space-x-8 text-2xl font-serif text-gray-500' onClick={handleToggle}>

            <Link className=' shadow-sm rounded-lg p-2 cursor-pointer text-xl bg-red-600 text-white ml-9' to=''>
              Order a Portrait
            </Link>
            <Link className='m-3 hover:bg-slate-300 shadow-sm rounded-lg p-2 cursor-pointer text-xl' to='about'>
              About us
            </Link>
            <Link className='m-3 hover:bg-slate-300 shadow-sm rounded-lg p-2 cursor-pointer  text-xl' to='cart'>
              Cart
            </Link>
            <Link className='m-3 hover:bg-slate-300 shadow-sm rounded-lg p-2 cursor-pointer  text-xl' to='vendor'>
              Vendor
            </Link>
            <Link className='m-3 hover:bg-slate-300 shadow-sm rounded-lg p-2 cursor-pointer  text-xl' to='login'>
              Login
            </Link>

          </div>
        </section> : null}
    </header>
  )
}

export default Header
