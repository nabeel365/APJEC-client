import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaSun, FaMoon, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ toggleMode, isDarkMode }) => {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut();
    navigate('/')

  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // apjec haeding

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <nav className="bg-[#2b6777] shadow-lg">
      {/* Main Navbar Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-1">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              className="h-12 w-12 rounded-full"
              src="/images/apjec-logo.png"
              alt="APJEC Logo"
            />
            <span className="text-[#F6F6F2] text-xl font-semibold">
              {/* <h1> */}
              {isLargeScreen ? 'APJ Abdul Kalam Educational Center' : 'APJEC'}
              {/* </h1> */}
            </span>
          </div>

          {/* Links Section */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/aboutUs"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="/current"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
            >
              Current Affairs
            </Link>
            <Link
              to="/instructors"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
            >
              Instructors
            </Link>
            <Link
              to="/classes"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
            >
              Courses
            </Link>

            <Link
            to="/viewPYQs"
            onClick={handleMenuToggle} // Close menu on click
            className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
          >
            PYQs
          </Link>


            {user && (
              <Link
                to="/dashboard"
                className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
              >
                Dashboard
              </Link>
            )}
            <Link
              to="/help"
              className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-base font-medium"
            >
              Help
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
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

            {/* Dark/Light Mode Toggle */}
            {/* <button
              onClick={toggleMode}
              className="text-[#BADFE7] hover:text-[#C2EDCE]"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button> */}

            {/* Login/Logout */}
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogOut}
                  className="text-[#BADFE7] hover:text-[#C2EDCE] px-3 py-2 text-sm font-medium"
                >
                  LogOut
                </button>
                <img
                  className="h-10 w-10 rounded-full border-2 border-[#BADFE7]"
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

            {/* Hamburger Menu */}
            <button
              onClick={handleMenuToggle}
              className="md:hidden text-[#BADFE7] hover:text-[#C2EDCE]"
            >
              {isMenuOpen ? (
                <GiHamburgerMenu size={24} />
              ) : (
                <GiHamburgerMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-4 py-4 bg-[#388087] text-[#F6F6F2]">
          <Link to="/" className="block px-3 py-2 text-base font-medium">
            Home
          </Link>
          <Link to="/aboutUs" className="block px-3 py-2 text-base font-medium">
            About Us
          </Link>
          <Link to="/current" className="block px-3 py-2 text-base font-medium">
            Current Affairs
          </Link>
          <Link
            to="/instructors"
            className="block px-3 py-2 text-base font-medium"
          >
            Instructors
          </Link>
          <Link to="/classes" className="block px-3 py-2 text-base font-medium">
            Courses
          </Link>
          {user && (
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-base font-medium"
            >
              Dashboard
            </Link>
          )}
          <Link to="/help" className="block px-3 py-2 text-base font-medium">
            Help
          </Link>
        </div>
      </div> */}


      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-4 py-4 bg-[#388087] text-[#F6F6F2]">
          <Link
            to="/"
            onClick={handleMenuToggle} // Close menu on click
            className="block px-3 py-2 text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/aboutUs"
            onClick={handleMenuToggle} // Close menu on click
            className="block px-3 py-2 text-base font-medium"
          >
            About Us
          </Link>
          <Link
            to="/current"
            onClick={handleMenuToggle} // Close menu on click
            className="block px-3 py-2 text-base font-medium"
          >
            Current Affairs
          </Link>
          <Link
            to="/instructors"
            onClick={handleMenuToggle} // Close menu on click
            className="block px-3 py-2 text-base font-medium"
          >
            Instructors
          </Link>
          <Link
            to="/classes"
            onClick={handleMenuToggle} // Close menu on click
            className="block px-3 py-2 text-base font-medium"
          >
            Courses
          </Link>
          {user && (
            <Link
              to="/dashboard"
              onClick={handleMenuToggle} // Close menu on click
              className="block px-3 py-2 text-base font-medium"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/help"
            onClick={handleMenuToggle} // Close menu on click
            className="block px-3 py-2 text-base font-medium"
          >
            Help
          </Link>

          <Link
            to="/viewPYQs"
            onClick={handleMenuToggle} // Close menu on click
            className="block px-3 py-2 text-base font-medium"
          >
            PYQs
          </Link>
        </div>
      </div>





    </nav>
  );
};

export default Navbar;
