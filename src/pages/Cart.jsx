import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Checkout from '../components/Checkout'
import { removeCartProduct, cartLogic } from '../features/slice/cartSlice';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const mycart = useSelector((state) => state.cart.products);

  const [show, setShow] = useState(false);
  const cart = useSelector(state => state.cart)
  const mytotal = useSelector((state) => state.cart.total);

  const handleCountUp = (id) => {
    // setQuantity(quantity + 1);
    setQuantity(quantity + 1)
    console.log('AFcount', quantity)

    const newC = mycart.map((item) => item._id === id ? { ...item, quantity: quantity } : item);
    console.log(newC);
    dispatch(cartLogic(newC));

  }
  const handleCountDown = (id) => {
    if (quantity <= 1) {
      setQuantity(1);
    }
    else {
      setQuantity(quantity - 1);
      const newC = mycart.map((item) => item._id === id ? { ...item, quantity: quantity  } : item);
      console.log(newC);
      dispatch(cartLogic(newC));
    }
  }
  const handleRemove = (id) => {
    dispatch(removeCartProduct(id));
  };

  const handleShow = () => {
    setShow(!show);
  }
  return (
    <div>
      <h2 className='title mt-5'> your cart</h2>
      {mycart.length > 0 ?
        mycart.map((product) => (
          <section className='flex items-start justify-start' key={product._id}>
            <img src={product.image} className='w-[100px] h-[100px rounded-lg shadow] object-contain m-5 md:w-[200px] h-[200px shadow]' alt="" />
            <div className='m-3 '>
              <h4 className='text-gray-500 ml-5 text-xl capitalize p-1'>Name: {product.title}</h4>
              <h4 className='text-gray-500 ml-5 text-xl p-1 -my-4'>
                <IoIosArrowUp className='ml-[5.9em] relative top-1.5 cursor-pointer' onClick={() => handleCountUp(product._id)} />
                Quantity: <span className='ml-9'>{product.quantity }</span>
                <IoIosArrowDown className='cursor-pointer ml-[5.9em] relative bottom-1.5 ' onClick={() => handleCountDown(product._id)} />

              </h4>
              <h4 className='text-gray-500 ml-5 text-xl p-1'>price: N{product.price}</h4>
              <h4 className=' ml-5 mb-9 text-xl text-red-600 font-bold capitalize p-1 cursor-pointer' onClick={() => handleRemove(product._id)}>remove</h4>
            </div>

          </section>)) : <h2 className='text-gray-500 text-2xl text-center m-9'>Your cart is empty</h2>}

      <div className='flex items-center justify-center'>
        <h1 className='text-center font-bold text-2xl uppercase mb-9'><span className='text-gray-600'>total: </span>N{mytotal}</h1>
        <h4 className='flex items-center justify-center p-2 uppercase -mt-2 border-none outline-none rounded-lg shadow w-[150px] bg-blue-600 text-white font-bold text-xl cursor-pointer m-4 hover:bg-blue-500' onClick={handleShow}> checkout</h4>
        {show ? <Checkout /> : null}
      </div>

    </div>
  )
}

export default Cart
