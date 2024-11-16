import React from 'react';
import { FaFacebook, FaTwitter, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import "../Footer/Footer.css";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <footer className="footer bg-[#2b6777] text-white px-4 py-8 md:px-10 lg:px-20">
        
        {/* Main Content Layout */}
        <div className="max-w-screen-xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left">
          
          {/* Institution Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img 
              width="100" 
              height="100" 
              src="/src/images/apjec-logo.png" 
              alt="APJEC Logo" 
            />
            <h2 className="text-lg font-bold">APJEC - APJ Educational Institution</h2>
            <p className="text-sm leading-relaxed text-[#C2EDCE] text-center md:text-left">
              Empowering law students since 2022 with top-notch training to build successful careers.
            </p>
          </div>

          {/* Academics Section */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="footer-title text-[#BADFE7] font-semibold mb-3">Academics</h3>
            <ul className="space-y-2 text-[#F6F6F2] text-center md:text-left">
              <li><a href="#" className="link link-hover">Law Courses</a></li>
              <li><a href="#" className="link link-hover">Admissions</a></li>
              <li><a href="#" className="link link-hover">Research Programs</a></li>
              <li><a href="#" className="link link-hover">Workshops</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="footer-title text-[#BADFE7] font-semibold mb-3">About APJEC</h3>
            <ul className="space-y-2 text-[#F6F6F2] text-center md:text-left">
              <li><a href="#" className="link link-hover">Our Mission</a></li>
              <li><a href="#" className="link link-hover">Our Vision</a></li>
              <li><a href="#" className="link link-hover">Leadership Team</a></li>
              <li><a href="#" className="link link-hover">Careers</a></li>
            </ul>
          </div>

          {/* Social Media and Address Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="footer-title text-[#BADFE7] font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-[#F6F6F2]">
              <a href="https://www.facebook.com/apjec.edu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="https://t.me/apjec" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram size={24} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://www.instagram.com/apjec.education/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>

            <div className="mt-4 text-sm text-[#C2EDCE] text-center md:text-left">
              <p>Office Address:</p>
              <p>H-78/17,Batla House, Jamia Nagar,New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-12 text-center text-sm text-[#C2EDCE] space-y-2">
          <p>&copy; {new Date().getFullYear()} APJEC - APJ Educational Institution. All rights reserved.</p>
          <p>Contact: <a href="mailto:info@apjec.edu" className="text-[#BADFE7]">apjec.education@gmail com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
