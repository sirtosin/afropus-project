import React from 'react'
import Profile from './Profile'
import { AiOutlineLogout, AiOutlineEdit, AiOutlineFileAdd, AiOutlineDashboard } from 'react-icons/ai'
import { IoIosNotificationsOutline } 
    from 'react-icons/io'
import { logout } from "../features/slice/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const VendorSidebar = ({ option, setOption }) => {
    const category = ['dashboard', 'add', 'notification']
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOwPAYKTeMGx-nB2EBjz5LBHzLgLxFrrrKw&usqp=CAU"
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleClick = (data) => {
        if (option) {
            setOption(data)
            // alert(data)
        }
    }
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    return (
        <>
            <div className=' flex flex-col text-3xl p-5 bg-white shadow-xl md:hidden'>
                
                <img src={img} className='w-12 h-12 rounded-full object-cover mb-6 cursor-pointer' alt="" />
                <AiOutlineDashboard className='mb-6 cursor-pointer text-blue-600 ' onClick={()=> handleClick('dashboard')} />
                <AiOutlineFileAdd className='mb-6 cursor-pointer text-green-600 ' onClick={() => handleClick('add')} />
                {/* <Link to='/edit/'>
                    <AiOutlineEdit className='mb-6 cursor-pointer text-orange-600 ' onClick={() => handleClick('edit')} />
                    </Link> */}
                <div>
                    <div className='flex items-center justify-center w-4 h-4 bg-red-600 rounded-full float-right' >
                        <p className='text-sm text-white'>2</p>
                        </div>
                    <IoIosNotificationsOutline className='mb-6 cursor-pointer text-yellow-700 ' onClick={() => handleClick('notification')} />
              </div>
                <AiOutlineLogout className='cursor-pointer text-red-600 ' onClick={handleLogout}/>
            </div>
            
            <div className='hidden md:flex flex-col w-[250px] bg-white shadow-xl'>
            <Profile img={img} />
            <div className='mt-5'>
                {category.map((data, index) => (
                    <div key={index} onClick={() => handleClick(data)}>
                        <h2 className='font-bold capitalize p-3 mt-1 ml-4 text-xl cursor-pointer'>
                            {data}
                        </h2>
                    </div>
                ))}
                    <span className='flex items-center justify-start cursor-pointer' onClick={handleLogout}>
                        <p className='font-bold capitalize p-3 mt-1 ml-4 text-xl '>logout</p> <AiOutlineLogout className='mt-2 text-xl text-red-600 ' />
          </span>
            </div>
            
            </div>
        </>
    )
}

export default VendorSidebar
