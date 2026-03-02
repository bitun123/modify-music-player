import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
const [email, setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign Up</h1>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="font-semibold text-gray-700 text-sm">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Choose a username"
              className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-700 text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
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
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-lg opacity-100 hover:opacity-70 transition-opacity"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>


          <button 
            type="submit" 
            className="w-full py-3 bg-gradient-to-br from-indigo-500 to-purple-700 text-white font-semibold rounded-md hover:shadow-lg hover:from-green-600 hover:to-teal-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6 text-gray-600 text-sm">
          Already have an account? <Link to="/login" className="text-green-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Registration