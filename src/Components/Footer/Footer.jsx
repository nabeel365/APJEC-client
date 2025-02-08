import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
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
## TERMS & CONDITIONS

These Terms & Conditions (Terms) of:

(a) Use of our website: [www.apjec.org](https://www.apjec.org) or any products or services in connection with the Application, Website, or Products (Services).
(b) Any modes of registration or usage of products, including through SD cards, tablets, or other storage or transmitting devices, are between **APJEC** (Company/We/Us/Our) and its users (User/You/Your).

Please read the **Terms and the Privacy Policy** carefully before using the Website, Services, or Products. In case of any discrepancy between the Terms and any other policies, the **Terms shall prevail**.
      `,
    },
    returnPolicy: {
      title: "Privacy Policy",
      content: `
## PRIVACY POLICY OF APJEC

At **APJ Abdul Kalam Education Centre**, we are committed to ensuring the **privacy and security of your personal information**. This Privacy Policy outlines how we collect, use, and protect your data.
      `,
    },
    termsAndConditions: {
      title: "Refund & Cancellation Policy",
      content: `
## REFUND & CANCELLATION POLICY

### Refund Policy
- **Registration fees are non-refundable** once the registration is completed.
- Students enrolled in **online classes** who have payment-related queries can contact:
📧 **[apjec.education@gmail.com](mailto:apjec.education@gmail.com)**
      `,
    },
  };

  const openModal = (policyKey) => {
    setModalTitle(policies[policyKey].title);
    setModalContent(policies[policyKey].content);
    setIsModalOpen(true);
  };

  return (
    <footer className="bg-[#2b6777] text-white px-6 py-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img className="mx-auto md:mx-0" width="100" height="100" src="/images/apjec-logo.png" alt="APJEC Logo" />
          <h2 className="text-lg font-bold text-center md:text-left">APJEC - APJ Educational Institution</h2>
          <p className="text-sm leading-relaxed text-[#C2EDCE] text-center md:text-left">Empowering law students since 2022 with top-notch training to build successful careers.</p>
        </div>
        <div className="space-y-4 sm:text-center">
          <h3 className="text-[#BADFE7] font-semibold">Academics</h3>
        </div>
        <div className="space-y-4 sm:text-center">
          <h3 className="text-[#BADFE7] font-semibold">About APJEC</h3>
        </div>
        <div className="space-y-4 sm:text-center">
          <h3 className="text-[#BADFE7] font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-[#C2EDCE]" aria-label="Facebook"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-[#C2EDCE]" aria-label="Twitter"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#388087] pt-6 text-center text-sm text-[#C2EDCE]">
        <p>&copy; {new Date().getFullYear()} APJEC. All rights reserved.</p>
      </div>
      <div className="flex justify-center space-x-6 mt-10">
        <button className="text-white underline" onClick={() => openModal("payment")}>Terms & Conditions</button>
        <button className="text-white underline" onClick={() => openModal("returnPolicy")}>Privacy Policy</button>
        <button className="text-white underline" onClick={() => openModal("termsAndConditions")}>Refund & Cancellation Policy</button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{modalTitle}</h2>
            <ReactMarkdown className="text-gray-700">{modalContent}</ReactMarkdown>
            <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
