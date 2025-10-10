// src/components/Header.jsx
import React from 'react';
import logo from '../assets/maze3.png'; //  logo path

function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="font-bold text-xl">Quizzy</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="/" className="hover:text-gray-400 transition">Home</a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-gray-400 transition">Dashboard</a>
            </li>
            <li>
              <a href="/contactus" className="hover:text-gray-400 transition">Contact Us</a>
            </li>
            <li>
              <a href="/aboutus" className="hover:text-gray-400 transition">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;