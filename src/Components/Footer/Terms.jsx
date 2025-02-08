import React from "react";

const TermsAndConditions = () => (
  <div className="p-10 bg-[#F6F6F2] text-[#2b6777]">
    <h1 className="text-3xl font-bold border-b-2 border-[#388087] pb-2">Terms & Conditions</h1>
    <p className="mt-4">These Terms & Conditions (Terms) govern the use of our website: <a href="https://www.apjec.org" className="text-[#388087]">www.apjec.org</a> and any associated services.</p>
    <h2 className="text-xl font-semibold mt-6">Communication to the Students</h2>
    <ul className="list-disc pl-6">
      <li>Any class cancellations or schedule changes will be informed via mail/SMS/website.</li>
      <li>Students are responsible for checking updates regularly.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6">Student Feedback & Grievance Redressal</h2>
    <ul className="list-disc pl-6">
      <li>Feedback from students is appreciated and acted upon.</li>
      <li>Students/Parents can reach out for guidance or queries.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6">Customer Care</h2>
    <p>For any issues, contact us at <a href="mailto:apjec.education@gmail.com" className="text-[#388087]">apjec.education@gmail.com</a></p>
  </div>
);

export default TermsAndConditions;
