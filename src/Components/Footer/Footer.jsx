import React, { useState } from "react";
import { Document, Page } from "react-pdf";
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
  const [pdfFile, setPdfFile] = useState("");

  const policies = {
    terms: { title: "Terms & Conditions", pdf: "/pdfs/TERMS.pdf" },
    privacy: { title: "Privacy Policy", pdf: "/pdfs/Privacy_and_Policy_of_APJEC.pdf" },
    refund: { title: "Refund & Cancellation Policy", pdf: "/pdfs/REFUND.pdf" },
  };

  const openModal = (policyKey) => {
    setModalTitle(policies[policyKey].title);
    setPdfFile(policies[policyKey].pdf);
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
        <button className="text-white underline" onClick={() => openModal("terms")}>
          Terms & Conditions
        </button>
        <button className="text-white underline" onClick={() => openModal("privacy")}>
          Privacy Policy
        </button>
        <button className="text-white underline" onClick={() => openModal("refund")}>
          Refund & Cancellation Policy
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{modalTitle}</h2>
            <Document file={pdfFile} onLoadError={console.error}>
              <Page pageNumber={1} />
            </Document>
            <button
              className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
