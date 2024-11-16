import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaSun, FaMoon, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = ({ toggleMode, isDarkMode }) => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2b6777] shadow-lg">
      {/* Main Navbar Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="/src/images/apjec-logo.png"
              alt="APJEC Logo"
            />
            <span className="ml-2 text-[#F6F6F2] text-lg font-semibold">
              Abul Pakir Jainulabdeen Educational Institution
            </span>
          </div>

          {/* Links Section (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/instructors"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-sm font-medium"
            >
              Instructors
            </Link>
            <Link
              to="/classes"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-sm font-medium"
            >
              Classes
            </Link>
            {user && (
              <Link
                to="/dashboard"
                className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-sm font-medium"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Section: Search, Theme, Social Media, and User */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 rounded-md text-sm bg-[#388087] text-white placeholder-[#C2EDCE]"
              />
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex space-x-3 text-[#BADFE7]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C2EDCE]"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C2EDCE]"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C2EDCE]"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Login/Logout and User */}
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogOut}
                  className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-sm font-medium"
                >
                  LogOut
                </button>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
            ) : (
              <Link
                to="/login"
                className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>
            )}

            {/* Dark/Light Mode Toggle */}
            <button onClick={toggleMode} className="text-[#BADFE7] hover:text-[#C2EDCE]">
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={handleMenuToggle}
              className="md:hidden text-[#BADFE7] hover:text-[#C2EDCE]"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-4 py-3 space-y-2 bg-[#388087] text-white">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link
            to="/instructors"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Instructors
          </Link>
          <Link to="/classes" className="block px-3 py-2 rounded-md text-base font-medium">
            Classes
          </Link>
          {user && (
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
