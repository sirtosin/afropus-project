import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Add from '../components/Add'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Notification from '../components/Notification'
import VendorSidebar from '../components/VendorSidebar'

const Vendor = () => {
  const navigate = useNavigate()
  const [option, setOption] = useState('dashboard')
  const { user } = useSelector((state) => state.auth)

  const handleRedirect = () => {
    navigate('/login')
  }
  return (
    <>
      {user ?
        <main className='flex '>
          <div className="fixed left-0 top-20 z-20">

            <VendorSidebar setOption={setOption} option={option} />
          </div>
          <div className='h-screen  mx-auto my-9 overflow-y-auto scroll-smooth scrollbar-hide'>
            {option === 'dashboard' && <Dashboard />}
            {option === 'add' && <Add />}
            {option === 'notification' && <Notification />}
          </div>
        </main> : <p className=' max-w-xs cursor-pointer  mx-auto flex items-center justify-center m-9 text-white p-4 text-3xl bg-orange-600 shadow rounded-lg' onClick={handleRedirect}>Login</p>}
    </>
  )
}

export default Vendor
