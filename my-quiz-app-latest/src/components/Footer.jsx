// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} QuizApp. All rights reserved.</p>

        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/dashboard" className="hover:text-gray-400 transition">Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}

