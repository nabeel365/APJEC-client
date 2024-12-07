import React, { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (Replace with actual backend API call)
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2b6777]">Career Opportunities</h1>
        <p className="text-lg text-[#388087] mt-2">
          Join our team of dedicated professionals and make a difference in education.
        </p>
      </div>

      {/* Job Listings */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">Open Positions</h2>
        <div className="space-y-4">
          <div className="bg-[#BADFE7] p-4 rounded shadow">
            <h3 className="text-xl font-bold text-[#2b6777]">Math Instructor</h3>
            <p className="text-[#388087]">Location: Remote | Type: Full-Time</p>
            <p className="text-[#2b6777] mt-2">
              We are seeking an experienced math instructor to teach grades 8-12. Candidates must have excellent communication skills and a passion for education.
            </p>
          </div>
          <div className="bg-[#C2EDCE] p-4 rounded shadow">
            <h3 className="text-xl font-bold text-[#2b6777]">Science Curriculum Developer</h3>
            <p className="text-[#388087]">Location: On-Site | Type: Part-Time</p>
            <p className="text-[#2b6777] mt-2">
              Help design engaging and interactive science curricula for middle and high school students. Prior experience in curriculum design is a plus.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">Contact Us</h2>
        <p className="text-[#388087] mb-6">
          Interested in any of the positions? Have questions? Reach out to us via the form below.
        </p>
        {successMessage && (
          <p className="text-green-600 mb-4">{successMessage}</p>
        )}
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
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
