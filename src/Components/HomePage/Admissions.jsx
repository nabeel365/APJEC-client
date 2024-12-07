import React, { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (Replace with actual backend API call)
    setSuccessMessage("Your inquiry has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#2b6777]">Admissions</h1>
        <p className="text-lg text-[#388087] mt-2">
          Join APJEC and take the first step towards a brighter future.
        </p>
      </div>

      {/* Program Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">Programs Offered</h2>
        <div className="space-y-4">
          <div className="bg-[#BADFE7] p-4 rounded shadow">
            <h3 className="text-xl font-bold text-[#2b6777]">Law Undergraduate Program</h3>
            <p className="text-[#388087]">Eligibility: High school graduate with a minimum of 60% marks.</p>
          </div>
          <div className="bg-[#C2EDCE] p-4 rounded shadow">
            <h3 className="text-xl font-bold text-[#2b6777]">Law Postgraduate Program</h3>
            <p className="text-[#388087]">Eligibility: Bachelor's degree in law with a minimum of 50% marks.</p>
          </div>
        </div>
      </div>

      {/* Admission Steps Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">Admission Process</h2>
        <ol className="list-decimal ml-6 text-[#2b6777] space-y-2">
          <li>Submit the online application form with required documents.</li>
          <li>Appear for the entrance test conducted by APJEC.</li>
          <li>Attend the interview round (if applicable).</li>
          <li>Receive the admission confirmation and pay the fees.</li>
        </ol>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">Contact Us</h2>
        <p className="text-[#388087] mb-6">
          Have questions about admissions? Reach out to us via the form below.
        </p>
        {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#2b6777] font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2b6777]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#2b6777] font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2b6777]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#2b6777] font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#2b6777]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-6 rounded"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admissions;
