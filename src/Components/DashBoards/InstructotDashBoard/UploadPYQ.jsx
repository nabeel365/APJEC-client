import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";

const UploadPYQ = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    subject: "",
    title: "",
    file: null,
    exam: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!formData.subject || !formData.title || !formData.file || !formData.exam) {
  //     Swal.fire("Error", "All fields are required!", "error");
  //     return;
  //   }

  //   const payload = new FormData();
  //   const pyqData = [
  //     {
  //       subject: formData.subject,
  //       title: formData.title,
  //       exam: formData.exam,
  //       uploadedBy: user?.email,
  //     },
  //   ];

  //   payload.append("file", formData.file);
  //   payload.append("data", JSON.stringify(pyqData));

  //   try {
  //     await axios.post(`${import.meta.env.VITE_BACKEND_URL}/pyqs`, payload);
  //     Swal.fire("Success", "PYQ uploaded successfully!", "success");
  //     setFormData({ subject: "", title: "", file: null, exam: "" });
  //   } catch (error) {
  //     Swal.fire("Error", "Failed to upload PYQ!", "error");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the form data
    const payload = new FormData();
    payload.append("subject", formData.subject);
    payload.append("title", formData.title);
    payload.append("file", formData.file);
    payload.append("exam", formData.exam);
    payload.append("uploadedBy", user?.email);
  
    // For debugging: Log the payload content
    for (let [key, value] of payload.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    try {
      // Make POST request to the backend
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/pyqs`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      Swal.fire("Success", "PYQ uploaded successfully!", "success");
      setFormData({ subject: "", title: "", file: null, exam: "" });
    } catch (error) {
      console.error("Upload Error:", error.response?.data || error.message);
      Swal.fire("Error", "Failed to upload PYQ!", "error");
    }
  };
  
  


  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-[#2b6777] mb-6">
        Upload PYQs
      </h1>
      <form
        className="w-full max-w-lg mx-auto bg-white rounded-lg p-8 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-[#2b6777] font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter subject name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#2b6777] font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter PYQ title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#2b6777] font-semibold mb-2">
            File
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#2b6777] font-semibold mb-2">
            For which exam are you uploading?
          </label>
          <select
            name="exam"
            value={formData.exam}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">Select an exam</option>
            <option value="AMU">AMU</option>
            <option value="JMI">JMI</option>
            <option value="CULET">CULET</option>
            <option value="Other">CLAT</option>
            <option value="Other">MHCET</option>
            <option value="Other">Other</option>



          </select>
        </div>

        <button
          type="submit"
          className="bg-[#2b6777] text-white font-semibold py-2 px-4 rounded-lg"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPYQ;
