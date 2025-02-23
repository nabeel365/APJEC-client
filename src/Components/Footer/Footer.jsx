import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <footer className="bg-[#2b6777] text-white px-6 py-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              className="mx-auto md:mx-0"
              width="100"
              height="100"
              src="/images/apjec-logo.png"
              alt="APJEC Logo"
            />
            <h2 className="text-lg font-bold text-center md:text-left">
              APJEC - APJ Educational Institution
            </h2>
            <p className="text-sm leading-relaxed text-[#C2EDCE] text-center md:text-left">
              Empowering law students since 2022 with top-notch training to build
              successful careers.
            </p>
          </div>

          <div className="space-y-4 sm:text-center">
            <h3 className="text-[#BADFE7] font-semibold">Academics</h3>
            <ul className="space-y-2 text-[#F6F6F2]">
              <li><a href="/classes" className="hover:text-[#C2EDCE]">Law Courses</a></li>
              <li><a href="#" className="hover:text-[#C2EDCE]">Admissions</a></li>
              <li><a href="#" className="hover:text-[#C2EDCE]">Research Programs</a></li>
              <li><a href="#" className="hover:text-[#C2EDCE]">Workshops</a></li>
            </ul>
          </div>

          <div className="space-y-4 sm:text-center">
            <h3 className="text-[#BADFE7] font-semibold">About APJEC</h3>
            <ul className="space-y-2 text-[#F6F6F2]">
              <li><a href="/aboutUs" className="hover:text-[#C2EDCE]">Our Mission</a></li>
              <li><a href="/aboutUs" className="hover:text-[#C2EDCE]">Our Vision</a></li>
              <li><a href="/team" className="hover:text-[#C2EDCE]">Leadership Team</a></li>
              <li><a href="/career" className="hover:text-[#C2EDCE]">Careers</a></li>
            </ul>
          </div>

          <div className="space-y-4 sm:text-center md:text-center lg:text-left">
            <h3 className="text-[#BADFE7] font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/apjec.edu" target="_blank" rel="noopener noreferrer" className="hover:text-[#C2EDCE]" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C2EDCE]" aria-label="Twitter"><FaTwitter size={24} /></a>
              <a href="https://t.me/apjec" target="_blank" rel="noopener noreferrer" className="hover:text-[#C2EDCE]" aria-label="Telegram"><FaTelegram size={24} /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C2EDCE]" aria-label="Whatsapp"><FaWhatsapp size={24} /></a>
              <a href="https://www.instagram.com/apjec.education/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C2EDCE]" aria-label="Instagram"><FaInstagram size={24} /></a>
            </div>
            <div className="text-sm text-[#C2EDCE]">
              <p><strong>Registered Office:</strong> Uttar Dariapur, Kaliachak, Malda, West Bengal, 732201</p>
              <p><strong>City Office:</strong> H-78/17, Batla House, Jamia Nagar, New Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#388087] pt-6 text-center text-sm text-[#C2EDCE]">
          <p>&copy; {new Date().getFullYear()} APJEC - APJ Educational Institution. All rights reserved.</p>
          <p>Contact: <a href="mailto:apjec.education@gmail.com" className="text-[#BADFE7] hover:text-[#C2EDCE]">apjec.education@gmail.com</a></p>
        </div>

        {/* Policy Links */}
        <div className="flex justify-center space-x-6 mt-10">
          <Link to="/terms"  className="text-white-600 underline">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="text-white-600 underline">
            Privacy and Policy
          </Link>
          <Link to="/refund" className="text-white-600 underline">
            Refund and Cancellation
          </Link>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
