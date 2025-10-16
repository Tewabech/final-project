// src/components/Header.jsx
import React from 'react';
import logo from '../assets/maze3.png'; //  logo path
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Header() {
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
             <Link to="/" className="hover:text-gray-400 transition">Home </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-gray-400 transition">Dashboard</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
            </li>
            <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

