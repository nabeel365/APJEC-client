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
      content: `TERMS & CONDITIONS
These Terms & Conditions (Terms) of
(a) use of our website: www.apjec.org or any products or services in connection with the Application, Website, or products (Services).
(b) any modes of registration or usage of products, including through SD cards, tablets, or other storage or transmitting devices, are between APJEC (Company/We/Us/Our) and its users (User/You/Your).
Please read the Terms and the privacy policy of the company (privacy policy) with respect to registration with us, the use of the website, services, and products carefully before using the website, services, or products. In the event of any discrepancy between the Terms and any other policies with respect to the website, services, or products, the provisions of the Terms shall prevail.
Your use/access/browsing of the Website or the Services or products or registration (with or without payment/with or without a subscription) through any means shall signify Your acceptance of the Terms and Your agreement to be legally bound by the same.
If You do not agree with the Terms or the Privacy Policy, please do not use the Website or avail of the Services or products. Any access to our services, applications, or products through registrations/subscriptions is non-transferable.
COMMUNICATION TO THE STUDENTS
•	If there is any class cancellation or change in the schedule of the program, students shall be informed by mail/SMS/through the STUDYBYTECH website.
•	Students are responsible to check for updates from time to time.
STUDENT FEEDBACK & GRIEVANCE REDRESSAL
•	In order to improve the quality of services provided to students, APJEC actively seeks, appreciates and acts upon Feedback from students about its services time to time.
•	Students/Parents can approach with their queries for assistance guidance.
DECLARATION BY THE STUDENT
I have-
•	Read & understand the above and I am aware of the services APJEC shall provide to the students.
•	Understood that the student’s performance depends on the continuing/participating interest on his/her part.
CUSTOMER CARE:
We make all our best endeavors to provide You with a pleasant experience. In the unlikely event that You face any issues, please contact us at apjec.education@gmail.com

.`,
    },
    returnPolicy: {
      title: "Privacy Policy",
      content: `Privacy and Policy of APJEC
At APJ Abdul Kalam Education Centre, we are committed to ensuring the privacy and security of your personal information. This Privacy and Policy document outlines how we collect, use, and protect the information you provide while using our platform.
Collection of Information:
We collect various types of information, including personal, contact, and academic details, to enhance your experience on our platform and for further admission process. This information is gathered through registration forms and the use of cookies to improve the quality of our services.
Use of Information:
The information we collect is utilized for personalizing your educational experience, admission process, improving our services, and ensuring the overall functionality of our platform. We do not sell or share your information with third parties without your explicit consent.
User Rights:
You will have the right to access, correct, or delete your personal information. Our platform will provide an easy-to-use mechanism for you to exercise these rights. Your privacy preferences matter, and we respect your choices.
Contact Information:
If you have any questions or concerns about our privacy policy or the handling of your data, please contact our support team apjec.education@gmail.com . We are here to address any queries and ensure your experience with APJEC is secure and enjoyable.
Thank you for entrusting us with your education. We are dedicated to providing you with a safe and enriching learning environment.
APJEC Privacy and Policy Team

.`,
    },
    termsAndConditions: {
      title: "Refund and Cancellation",
      content: `REFUND & CANCELLATION POLICIES
Refund Policy
Refund Policies for Registration Form fees:
o	Once you have done registration – no refund will be offered.
•	Students who have been enrolled in an online class have any query related to payments: apjec.education@gmail.com 

.`,
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
          <button className="text-blue-600 underline" onClick={() => openModal("payment")}>Payment</button>
          <button className="text-green-600 underline" onClick={() => openModal("returnPolicy")}>Return Policy</button>
          <button className="text-red-600 underline" onClick={() => openModal("termsAndConditions")}>Terms & Conditions</button>
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
