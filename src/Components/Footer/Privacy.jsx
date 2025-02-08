import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when the page loads
  }, []);

  return (
    <div className="p-10 bg-[#BADFE7] text-[#2b6777]">
      <h1 className="text-3xl font-bold border-b-2 border-[#388087] pb-2">Privacy and Policy</h1>
      <p className="mt-4">
        At APJ Abdul Kalam Education Centre, we value your privacy. This document outlines how we collect, use, and protect your data.
      </p>

      <h2 className="text-xl font-semibold mt-6">Collection of Information</h2>
      <p>We collect personal and academic details to enhance user experience and for admission processes.</p>

      <h2 className="text-xl font-semibold mt-6">Use of Information</h2>
      <p>Your data is used to personalize services and improve functionality. We do not share it without consent.</p>

      <h2 className="text-xl font-semibold mt-6">User Rights</h2>
      <p>You have the right to access, modify, or delete your personal information.</p>

      <h2 className="text-xl font-semibold mt-6">Contact</h2>
      <p>
        For queries, contact 
        <a href="mailto:apjec.education@gmail.com" className="text-[#388087]"> apjec.education@gmail.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
