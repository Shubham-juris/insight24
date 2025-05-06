import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mic } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'News', path: '/news' },
    { name: 'Broadcast', path: '/broadcast' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <header className="bg-gradient-to-r from-pink-600 to-purple-800 fixed w-full z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mic className="text-white transform transition-all hover:scale-110" size={30} />
            <span className="text-2xl font-extrabold bg-clip-text text-white">
              Insight24
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-pink-400 transition duration-300 font-medium text-lg transform hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none transform hover:scale-110 transition-all"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-2 bg-pink-700 rounded-lg shadow-md p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-yellow-300 transition duration-300 font-medium text-lg"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
