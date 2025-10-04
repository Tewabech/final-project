import { useState } from 'react'
import Login from './Components/Login'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Welcome, Guest! 👋</h1>
      <p className="text-lg mb-8 opacity-90">We’re glad you’re here. Let’s get started!</p>
       <button
        onClick={() => navigate('/login')}
        className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition"
      >
        Get Started
      </button>
    </div>
  
  )
}

export default App
