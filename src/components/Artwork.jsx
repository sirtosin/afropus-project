import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../features/slice/cartSlice'

const Artwork = ({ item }) => {
    const art = useSelector(state => state.art.art)
    const dispatch = useDispatch()
    const handleSingle = () => {
       
            dispatch(addProduct({ ...item, quantity: 1 }));
            alert("Added to cart");
        
    }

    return (
        <div key={item.id}>
            <div className='shadow-lg w-[300px] h-[330px] rounded-lg m-8'>
                <img className='w-[100%] h-[200px] object-cover' src={item.image} alt='card-image' />
                <aside className='flex items-center justify-center p-4'>
                    <div className=' font-bold font-serif p-3 text-gray-700'>
                        <h4>title: {item.title}</h4>
                        <p>Price: N{item.price}</p>

                    </div>

                    <button className='
                    text-gray-600
                    text-sm
                     bg-slate-200 shadow  transition-all duration-100 ease-out  rounded-lg p-3 font-bold font-serif hover:bg-slate-300' onClick={() => handleSingle()}>Add to Cart </button>
                </aside>
            </div>
        </div>
    )
}

export default Artwork
