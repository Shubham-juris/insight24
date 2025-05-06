import React, { useState } from 'react';
import { Menu, X, Mic } from 'lucide-react';

export default function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Home', 'Podcasts', 'News', 'Broadcast', 'Community'];

  return (
    <header className="bg-black/30 backdrop-blur-md fixed w-full z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mic className="text-pink-500" size={28} />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
              Insight24
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white hover:text-pink-400 transition duration-200 font-medium"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 rounded-md bg-purple-700 hover:bg-purple-800 text-sm font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-black/80 backdrop-blur-md`}
      >
        <div className="flex flex-col px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white hover:text-pink-400 transition font-medium"
            >
              {link}
            </a>
          ))}
          <button className="mt-4 w-full bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-md text-sm font-medium">
            Sign In
          </button>
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-md text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
