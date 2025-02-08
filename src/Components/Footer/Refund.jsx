import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when the page loads
  }, []);

  return (
    <div className="p-10 bg-[#C2EDCE] text-[#2b6777]">
      <h1 className="text-3xl font-bold border-b-2 border-[#388087] pb-2">Refund & Cancellation Policies</h1>

      <h2 className="text-xl font-semibold mt-6">Refund Policy</h2>
      <ul className="list-disc pl-6">
        <li>Registration fees are non-refundable.</li>
        <li>
          For payment-related queries, contact 
          <a href="mailto:apjec.education@gmail.com" className="text-[#388087]"> apjec.education@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default RefundPolicy;
