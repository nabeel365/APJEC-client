import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with backend API later
    setSuccessMessage("Your admission enquiry has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen p-8">

      {/* ===================== SEO ===================== */}
      <Helmet>
        <title>
          Law Admission 2026 | CULET & CU BA LLB Admission Guidance – APJEC
        </title>

        <meta
          name="description"
          content="Get complete admission guidance for CULET 2026 and CU BA LLB programs with APJEC. Know eligibility, admission process, counselling and apply online."
        />

        <link
          rel="canonical"
          href="https://apjec.online/admissions"
        />
      </Helmet>

      {/* ===================== H1 ===================== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#2b6777]">
          Law Admissions 2026 – CULET & CU BA LLB Guidance
        </h1>
        <p className="text-lg text-[#388087] mt-3 max-w-3xl mx-auto">
          APJ Abdul Kalam Education Centre (APJEC) provides expert admission
          guidance for Calcutta University Law Entrance Test (CULET) 2026,
          CU BA LLB programs, and other law entrance examinations across
          West Bengal.
        </p>
      </div>

      {/* ===================== PROGRAMS OFFERED ===================== */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">
          Law Programs Offered
        </h2>

        <div className="space-y-4">
          <div className="bg-[#BADFE7] p-4 rounded shadow">
            <h3 className="text-xl font-bold text-[#2b6777]">
              Undergraduate Law Program (BA LLB)
            </h3>
            <p className="text-[#388087]">
              Eligibility: Passed 10+2 or equivalent examination as per
              Calcutta University norms.
            </p>
          </div>

          <div className="bg-[#C2EDCE] p-4 rounded shadow">
            <h3 className="text-xl font-bold text-[#2b6777]">
              Postgraduate Law Program (LLM)
            </h3>
            <p className="text-[#388087]">
              Eligibility: Bachelor’s degree in Law from a recognized
              university.
            </p>
          </div>
        </div>
      </div>

      {/* ===================== ADMISSION PROCESS ===================== */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">
          Admission Process for Law Courses
        </h2>

        <ol className="list-decimal ml-6 text-[#2b6777] space-y-2">
          <li>Fill out the online admission enquiry form.</li>
          <li>Receive counselling and entrance exam guidance.</li>
          <li>Appear for CULET or relevant law entrance examination.</li>
          <li>Participate in counselling and seat allotment.</li>
          <li>Confirm admission and complete fee payment.</li>
        </ol>
      </div>

      {/* ===================== ENQUIRY FORM ===================== */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">
          Admission Enquiry Form
        </h2>

        <p className="text-[#388087] mb-6">
          Have questions about CULET 2026 or CU BA LLB admission?
          Submit your enquiry and our counsellors will contact you.
        </p>

        {successMessage && (
          <p className="text-green-600 mb-4">
            {successMessage}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#2b6777] font-medium mb-2">
              Name
            </label>
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
            <label className="block text-[#2b6777] font-medium mb-2">
              Email
            </label>
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
            <label className="block text-[#2b6777] font-medium mb-2">
              Message
            </label>
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
            Submit Admission Enquiry
          </button>
        </form>
      </div>

    </div>
  );
};

export default Admissions;
