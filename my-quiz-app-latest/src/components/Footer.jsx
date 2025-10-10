// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Quizzy</h2>
          <p className="text-sm">© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        </div>

        {/* Navigation links */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="/" className="hover:text-white transition">Home</a>
          </li>
          <li>
            <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
          </li>
          <li>
            <a href="/contactus" className="hover:text-white transition">Contact Us</a>
          </li>
          <li>
            <a href="/aboutus" className="hover:text-white transition">About Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;