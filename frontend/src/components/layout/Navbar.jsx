import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="font-bold text-xl">CUG</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Home</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">About Us</Link>
              <Link to="/team" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Our Team</Link>
              <Link to="/events" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Events</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Contact Us</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Home</Link>
            <Link to="/about" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">About Us</Link>
            <Link to="/team" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Our Team</Link>
            <Link to="/events" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Events</Link>
            <Link to="/contact" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
