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
  /* ===================== NEW STATE (ADDED) ===================== */
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    course: "CULET 2026 PROGOTI 3.0",
  });

  /* ===================== NEW FUNCTION (ADDED) ===================== */
  const submitEnquiry = async (e) => {
    e.preventDefault();

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiryForm),
    });

    alert("Enquiry submitted successfully");

    setEnquiryForm({
      name: "",
      phone: "",
      course: "CULET 2026 PROGOTI 3.0",
    });

    setShowEnquiry(false);
  };

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
              <a href="https://www.facebook.com/apjec.edu" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://t.me/apjec" target="_blank" rel="noopener noreferrer"><FaTelegram size={24} /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
              <a href="https://www.instagram.com/apjec.education/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            </div>
            <div className="text-sm text-[#C2EDCE]">
              <p><strong>Registered Office:</strong> Uttar Dariapur, Kaliachak, Malda, West Bengal, 732201</p>
              <p><strong>City Office:</strong> H-78/17, Batla House, Jamia Nagar, New Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#388087] pt-6 text-center text-sm text-[#C2EDCE]">
          <p>&copy; {new Date().getFullYear()} APJEC - APJ Educational Institution.</p>
          <p>Contact: <a href="mailto:apjec.education@gmail.com" className="underline">apjec.education@gmail.com</a></p>
        </div>

        {/* ===================== ENQUIRY BUTTON (ADDED) ===================== */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowEnquiry(true)}
            className="bg-[#C2EDCE] text-[#2b6777] px-6 py-2 rounded font-semibold hover:bg-[#BADFE7]"
          >
            Enquiry
          </button>
        </div>

        {/* ===================== POLICY LINKS (UNCHANGED) ===================== */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link to="/terms" className="underline">Terms & Conditions</Link>
          <Link to="/privacy" className="underline">Privacy and Policy</Link>
          <Link to="/refund" className="underline">Refund and Cancellation</Link>
        </div>
      </footer>

      {/* ===================== ENQUIRY MODAL (ADDED) ===================== */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={submitEnquiry}
            className="bg-white text-black p-6 rounded w-[300px]"
          >
            <h3 className="text-lg font-bold mb-4">Enquiry Form</h3>

            {/* <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full mb-3 border p-2"
              value={enquiryForm.name}
              onChange={(e) =>
                setEnquiryForm({ ...enquiryForm, name: e.target.value })
              }
            /> */}

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full mb-3 border p-2"
              value={enquiryForm.phone}
              onChange={(e) =>
                setEnquiryForm({ ...enquiryForm, phone: e.target.value })
              }
            />

            <select disabled className="w-full mb-4 border p-2">
              <option>CULET 2026 PROGOTI 3.0</option>
            </select>

            <div className="flex justify-between">
              <button type="submit" className="bg-[#2b6777] text-white px-4 py-2 rounded">
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowEnquiry(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Footer;
