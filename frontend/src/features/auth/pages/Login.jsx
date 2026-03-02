import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Add your login logic here
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="bg-gray-200 p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700 text-sm">Email or Username</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-gray-700 text-sm">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-lg opacity-100 hover:opacity-70 transition-opacity cursor-pointer"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600 text-sm">
            Don't have an account?  
           <Link to="/registration" className="text-red-500  text-xl decoration-none"> Registration</Link>
            </div>
      </div>
    </div>
  )
}

export default Login