import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
const Checkout = () => {
    const [toggle, setToggle] = useState(true);
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [show, setShow] = useState(true);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    }

    const handlePay = (e) => {
        e.preventDefault()
        console.log(name, address, phone)
        setShow(!show);

    }
    return (
        <>

            {toggle && show ?

                <div className='h-screen w-[100%] fixed top-0 left-0 z-50 bg-black opacity-90 flex items-center justify-center'>

                    <section className=' h-[500px] w-[500px] bg-white shadow-lg rounded-lg  p-5 m-5'>
                        <div className='flex items-center justify-center'>

                            <h5 className='title mb-9'>fill the form below</h5>
                            <AiOutlineClose onClick={handleToggle} className='text-3xl text-red-600 ml-[1.4em] -mt-9 font-bold cursor-pointer' />
                        </div>
                        <form >
                            <input type="text" placeholder="your name"
                                className='input'
                                onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="address"
                                className='input'
                                onChange={(e) => setAddress(e.target.value)} />
                            <input type="text" placeholder="phone"
                                className='input'
                                onChange={(e) => setPhone(e.target.value)} />

                            <div className='flex items-center justify-center p-2'>
                                <input type="submit"
                                    className='input-btn '
                                    onClick={handlePay}
                                    value="Pay Now" />
                            </div>

                        </form>
                    </section>
                </div>
                : null}
        </>
    )
}

export default Checkout
