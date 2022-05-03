import React from 'react'
import img1 from '../assets/icon-1.png'
import img2 from '../assets/icon-2.png'
import img3 from '../assets/icon-3.png'
import img4 from '../assets/logo-1.png'
import img5 from '../assets/logo-2.png'
import img6 from '../assets/logo-3.png'
import img7 from '../assets/logo-4.png'
import img8 from '../assets/logo-5.png'
const Partners = () => {
    const partner = [
        img4, img5, img6, img7, img8
    ]
    const data = [
        {
            title: 'FREE Delivery',
            body: 'For Orders Over N10,000',
            img: img1
        },
        {
            title: 'DELIVERY ON TIME',
            body: 'Within Lagos',
            img: img2
        },
        {
            title: 'SECURE PAYMENT',
            body: '100% Secure Payment',
            img: img3
        },
    ]
    return (
        <div>
            <div className=' mt-5 md:flex justify-around '>

                {data.map((item, index) => (
                    <section key={index+ item.title} className='flex items-center justify-center space-x-5 mt-5 p-4'>
                        <img src={item.img} className='w-12 h-12 object-contain' />
                        <div>
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.body}</p>
                        </div>
                    </section>
                ))}

            </div>
            <section className='flex items-center justify-around
             bg-gray-800 p-2 mt-6'>

                {partner.map((item, index) => (
                    <div>
                        <img key={index} src={item} className='w-22 h-22 p-3 mt-4 object-contain' />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Partners
