import React from 'react'
import { useSelector } from 'react-redux';

const Profile = ({ img }) => {
    const { user } = useSelector((state) => state.auth)
    return (
        <div>
            <section className='ml-5 md:flex items-center  justify-around mt-7 cursor-pointer'>
                <img src={img} alt="" className='w-12 h-12 rounded-full object-cover' />
                <div className=''>
                    <h3 className='font-bold '>{user.name}</h3>
                    <h3 className='font-bold text-gray-600 text-xs '>{user.email}</h3>
                    <p className='text-xs text-gray-400'>{user.category}</p>
                </div>
            </section>
            <section>

            </section>
    </div >
  )
}

export default Profile
