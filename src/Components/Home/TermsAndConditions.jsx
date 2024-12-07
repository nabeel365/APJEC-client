import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F6F6F2] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#2b6777] mb-6">Terms and Conditions</h1>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <p className="text-gray-700 mb-4">
          Welcome to APJ Educational Institution (APJEC). By using our platform, you agree to comply with and be bound by the following terms and conditions. Please read these carefully before using the website.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By accessing and using APJEC, you accept and agree to be bound by these terms and conditions. If you do not agree, please refrain from using our platform.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">2. Use of the Platform</h2>
        <p className="text-gray-700 mb-4">
          You agree to use the platform only for lawful purposes and in accordance with these terms. You must not use the platform to:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Engage in any unlawful or fraudulent activity.</li>
          <li>Transmit or distribute harmful or malicious content.</li>
          <li>Violate the intellectual property rights of others.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">3. User Accounts</h2>
        <p className="text-gray-700 mb-4">
          If you create an account on our platform, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">4. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content on the APJEC platform, including text, graphics, logos, and images, is the intellectual property of APJEC or its licensors. Unauthorized use is strictly prohibited.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">5. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          APJEC will not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">6. Termination</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to terminate or suspend access to our platform without prior notice for conduct that we believe violates these terms or is harmful to other users.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">7. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          APJEC reserves the right to update or modify these terms at any time. Your continued use of the platform constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">8. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in India.
        </p>

        <h2 className="text-2xl font-bold text-[#388087] mt-4 mb-2">9. Contact Information</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about these terms, please contact us at <span className="text-[#2b6777]">support@apjec.com</span>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
