// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // if using react-router

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to QuizMaster!
      </h1>

      {/* Description */}
      <p className="text-lg mb-8 text-center max-w-xl">
        QuizMaster is your fun and interactive quiz platform! Test your knowledge on 
        various topics and challenge yourself or your friends. Get started by creating 
        an account or logging in if you’re already a member.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/register')}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>

        <button
          onClick={() => navigate('/login')}
          className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;