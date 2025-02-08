import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const policies = {
    payment: {
      title: "Terms & Conditions",
      content: `
        <h2>Terms & Conditions</h2>
        
        <h3>1. Use of Our Services</h3>
        <p>These Terms & Conditions govern the use of:</p>
        <ul>
          <li>Our website: <a href="https://www.apjec.org" target="_blank">www.apjec.org</a> or any associated services/products.</li>
          <li>Any modes of registration or usage of our products, including SD cards, tablets, or other storage/transmitting devices.</li>
        </ul>
        <p>By accessing, browsing, or registering (whether free or paid) on our platform, you agree to abide by these Terms & Conditions.</p>
  
        <h3>2. Communication to Students</h3>
        <ul>
          <li>Any class cancellation or schedule changes will be informed via <b>email, SMS, or the STUDYBYTECH website</b>.</li>
          <li>Students are responsible for checking updates regularly.</li>
        </ul>
  
        <h3>3. Customer Care</h3>
        <p>For any issues, please contact us at: <b>📧 Email:</b> <a href="mailto:apjec.education@gmail.com">apjec.education@gmail.com</a></p>
      `,
    },
  
    returnPolicy: {
      title: "Privacy Policy",
      content: `
        <h2>Privacy Policy</h2>
        <p>At <b>APJ Abdul Kalam Education Centre (APJEC)</b>, we are committed to ensuring the privacy and security of your personal data.</p>
  
        <h3>1. Collection of Information</h3>
        <ul>
          <li><b>Personal & Contact Details</b> (for registration and communication).</li>
          <li><b>Academic Information</b> (for admission and course personalization).</li>
          <li><b>Cookies & Tracking Data</b> (to improve user experience).</li>
        </ul>
  
        <h3>2. Contact Information</h3>
        <p>For privacy-related queries, contact us at: <b>📧 Email:</b> <a href="mailto:apjec.education@gmail.com">apjec.education@gmail.com</a></p>
      `,
    },
  
    termsAndConditions: {
      title: "Refund and Cancellation",
      content: `
        <h2>Refund & Cancellation Policies</h2>
  
        <h3>1. Refund Policy</h3>
        <p><b>Registration Fees:</b> Once registered, <b>no refunds</b> will be provided.</p>
  
        <h3>2. Payment-Related Queries</h3>
        <p>For any payment-related concerns, reach out to: <b>📧 Email:</b> <a href="mailto:apjec.education@gmail.com">apjec.education@gmail.com</a></p>
      `,
    },
  };
  
  const openModal = (policyKey) => {
    setModalTitle(policies[policyKey].title);
    setModalContent(policies[policyKey].content);
    setIsModalOpen(true);
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
          <button className="text-white-600 underline" onClick={() => openModal("payment")}>Terms & Conditions</button>
          <button className="text-white-600 underline" onClick={() => openModal("returnPolicy")}>Privacy and Policy</button>
          <button className="text-white-600 underline" onClick={() => openModal("termsAndConditions")}>Refund and Cancellation</button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{modalTitle}</h2>
              <p className="text-gray-700">{modalContent}</p>
              <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800" onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default Footer;    



