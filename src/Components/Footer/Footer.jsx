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
      **TERMS & CONDITIONS**
  
      These Terms & Conditions (Terms) of:
      
      (a) Use of our website: [www.apjec.org](https://www.apjec.org) or any products or services in connection with the Application, Website, or Products (Services).  
      (b) Any modes of registration or usage of products, including through SD cards, tablets, or other storage or transmitting devices, are between **APJEC** (Company/We/Us/Our) and its users (User/You/Your).
  
      Please read the **Terms and the Privacy Policy** carefully before using the Website, Services, or Products. In case of any discrepancy between the Terms and any other policies, the **Terms shall prevail**.
  
      **By using our Website or Services, you agree to these Terms. If you do not agree, please do not use our Services.**  
      Access to our services through registrations/subscriptions is **non-transferable**.
  
      ---
  
      ### **COMMUNICATION TO THE STUDENTS**
      - If there is any **class cancellation** or **change in the schedule**, students will be informed by **email, SMS, or via the APJEC website**.
      - Students are responsible for checking for updates regularly.
  
      ---
  
      ### **STUDENT FEEDBACK & GRIEVANCE REDRESSAL**
      - APJEC actively **seeks, appreciates, and acts upon feedback** from students to improve its services.
      - Students/Parents can approach the administration for assistance and guidance.
  
      ---
  
      ### **DECLARATION BY THE STUDENT**
      - I have read and understood the **above Terms** and the **services provided by APJEC**.
      - I understand that my **performance depends on my active participation**.
  
      ---
  
      ### **CUSTOMER CARE**
      We strive to provide the best experience for you. If you face any issues, please contact us at:  
      📧 **[apjec.education@gmail.com](mailto:apjec.education@gmail.com)**
      `,
    },
  
    returnPolicy: {
      title: "Privacy and Policy",
      content: `
      **PRIVACY POLICY OF APJEC**
  
      At **APJ Abdul Kalam Education Centre**, we are committed to ensuring the **privacy and security of your personal information**. This Privacy Policy outlines how we collect, use, and protect your data.
  
      ---
  
      ### **Collection of Information**
      - We collect **personal, contact, and academic details** to enhance your experience on our platform.
      - Information is gathered through **registration forms** and the use of **cookies** to improve service quality.
  
      ---
  
      ### **Use of Information**
      - The collected information is used for:
        - Personalizing your **educational experience**.
        - Facilitating the **admission process**.
        - Improving our services and platform functionality.
      - **We do not sell or share your data with third parties without your explicit consent.**
  
      ---
  
      ### **User Rights**
      - You have the right to **access, correct, or delete** your personal information.
      - Our platform provides an **easy-to-use mechanism** to exercise these rights.
  
      ---
  
      ### **Contact Information**
      If you have any **questions or concerns** about our Privacy Policy, please reach out to:  
      📧 **[apjec.education@gmail.com](mailto:apjec.education@gmail.com)**  
  
      Thank you for entrusting us with your education. We are dedicated to providing a **safe and enriching learning environment**.
  
      **- APJEC Privacy and Policy Team**
      `,
    },
  
    termsAndConditions: {
      title: "Refund & Cancellation Policy",
      content: `
      **REFUND & CANCELLATION POLICY**
  
      ### **Refund Policy**
      - **Registration fees are non-refundable** once the registration is completed.
      - Students enrolled in **online classes** who have payment-related queries can contact:  
        📧 **[apjec.education@gmail.com](mailto:apjec.education@gmail.com)**
  
      **For further assistance, reach out to our support team.**
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



