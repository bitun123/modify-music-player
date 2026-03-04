import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Login() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { handleLogin, loading } = useAuth()

  const navigate = useNavigate()


  if (loading) {
    return <div><h1>
      Loading .......
    </h1></div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleLogin({ userName, email, password });
      navigate("/")
    } catch (error) {
      console.log(error)
    }


  }


  return (
    <div className='w-full min-h-screen flex justify-center items-center  bg-gradient-to-br from-indigo-500 to-purple-700'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-2xl font-semibold'>
          Login
        </h1>
        <form className='flex flex-col gap-3' onSubmit={(e) => {
          handleSubmit(e)
        }}>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text" placeholder="Enter your name" className='w-[20rem] text-xl  font-semibold px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all' />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text" placeholder="Enter your email" className=' w-[20rem] text-xl  font-semibold  px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all' />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder="Enter your password" className=' w-[20rem] font-semibold text-xl   px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all' />
          <button className=' font-semibold cursor-pointer px-2 py-2 bg-linear-to-r from-indigo-700 to-purple-800 text-white rounded  active:scale-95' >
            Submit
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/registration" className='text-blue-500 underline'>Register</Link>
        </p>
      </div>
    </div>


  )

}

export default Login