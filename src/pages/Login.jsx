import React, { useState , useRef} from 'react'
import { register, login } from "../features/slice/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)
  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(name, password)
    dispatch(register({ name, password, email }))
  }
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(name, password)
    dispatch(login({ name, email, password}))
  }
  return (
    <div>
      {user ? <p className='text-center text-4xl m-8 capitalize font-serif text-blue-500'> you are logged in as {user.name}</p> :
        <section className='flex flex-col items-center justify-center h-screen '>
          <div className='flex space-x-4'>

            <h1 className='text-3xl font-semibold'>Login /</h1>

            <h1 className='text-3xl font-semibold'>Register</h1>
          </div>
          <form >

            <input type="text" placeholder="name"
              className='input'
              onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="email"
              className='input'
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password"
              className='input'
              onChange={(e) => setPassword(e.target.value)} />

            <div className='flex items-center justify-center p-2'>
              <input type="submit"
                className='input-btn '
                onClick={handleLogin}
                value="Login" /><input
                onClick={handleRegister}
                type="submit"
                className='p-4 border-none outline-none rounded-lg shadow w-[100%] bg-orange-600 text-white font-bold text-2xl cursor-pointer m-4 hover:bg-orange-500 ' value="Register" />
            </div>
          
          </form>
        </section>
      }
    
    </div>
  )
}

export default Login
