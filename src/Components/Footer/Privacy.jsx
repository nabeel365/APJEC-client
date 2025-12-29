import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when the page loads
  }, []);

  return (
    <div className="p-10 bg-[#BADFE7] text-[#2b6777]">
      <h1 className="text-3xl font-bold border-b-2 border-[#388087] pb-2">
        Privacy Policy
      </h1>

      <p className="mt-4">
        <strong>APJ Abdul Kalam Education Centre</strong>
      </p>

      <p className="mt-2">
        At APJ Abdul Kalam Education Centre, we are committed to protecting the
        privacy and security of your personal information. This Privacy Policy
        explains how we collect, use, store, and safeguard the information you
        provide while accessing or using our platform, services, and website.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        1. Collection of Information
      </h2>
      <p className="mt-2">
        We may collect the following types of information:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Personal details such as name, date of birth, etc.</li>
        <li>Contact details such as email address and phone number.</li>
        <li>Academic information relevant to admissions or course enrollment.</li>
        <li>
          Usage data through cookies and similar technologies to improve user
          experience.
        </li>
      </ul>
      <p className="mt-2">
        This information is collected through registration forms, inquiries,
        enrollment processes, and interaction with our website.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        2. Use of Information
      </h2>
      <p className="mt-2">
        The information collected is used for the following purposes:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Processing admissions and enrollments.</li>
        <li>Personalizing the educational experience.</li>
        <li>
          Communicating academic updates, schedules, and notifications.
        </li>
        <li>Improving our services, content, and platform functionality.</li>
        <li>Maintaining internal records and compliance requirements.</li>
      </ul>
      <p className="mt-2">
        We do not sell, rent, or trade your personal information to third parties
        without your explicit consent, except where required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        3. Data Protection & Security
      </h2>
      <p className="mt-2">
        We take reasonable technical and administrative measures to protect your
        personal data from unauthorized access, loss, misuse, or alteration.
        While we strive to use commercially acceptable means to protect your
        information, no method of transmission over the internet is completely
        secure.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        4. User Rights
      </h2>
      <p className="mt-2">
        You have the right to:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Access your personal information.</li>
        <li>Request correction or update of inaccurate data.</li>
        <li>
          Request deletion of your personal information, subject to legal or
          academic record requirements.
        </li>
      </ul>
      <p className="mt-2">
        We provide reasonable mechanisms for users to exercise these rights upon
        request.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        5. Cookies Policy
      </h2>
      <p className="mt-2">
        Our website may use cookies to enhance user experience, analyze website
        traffic, and improve services. You may choose to disable cookies through
        your browser settings; however, some features of the website may not
        function optimally.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        6. Changes to This Policy
      </h2>
      <p className="mt-2">
        APJ Abdul Kalam Education Centre reserves the right to update or modify
        this Privacy Policy at any time. Any changes will be effective
        immediately upon posting on the website. Users are encouraged to review
        this policy periodically.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        7. Contact Information
      </h2>
      <p className="mt-2">
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or the handling of your data, please contact us at:
      </p>
      <p className="mt-1">
        📧{" "}
        <a
          href="mailto:apjec.education@gmail.com"
          className="text-[#388087]"
        >
          apjec.education@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
