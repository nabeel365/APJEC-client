import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ViewPYQs = () => {
  const [exams, setExams] = useState([]); // List of exams
  const [selectedExam, setSelectedExam] = useState(""); // Currently selected exam
  const [pyqs, setPYQs] = useState([]); // List of PYQs for the selected exam

  // Fetch unique exam names
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/pyqs`);
        // Assuming the response contains an array of objects with an 'exam' field
        const examsList = response.data.map(item => item.exam); // Extract only the exam names
        setExams(examsList);
      } catch (error) {
        console.error("Error fetching exams:", error);
        Swal.fire("Error", "Failed to load exams!", "error");
      }
    };
    fetchExams();
  }, []);

  // Fetch PYQs for the selected exam
  useEffect(() => {
    const fetchPYQs = async () => {
      if (!selectedExam) {
        setPYQs([]); // Reset PYQs when no exam is selected
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/pyqs?exam=${selectedExam}`
        );
        console.log(response.data); // Debugging the response

        // Find the selected exam's pyqs array
        const selectedExamData = response.data.find(
          (examData) => examData.exam === selectedExam
        );

        if (selectedExamData) {
          setPYQs(selectedExamData.pyqs || []); // Access pyqs array inside the selected exam object
        } else {
          setPYQs([]); // If no data found for the selected exam
        }
      } catch (error) {
        console.error("Error fetching PYQs:", error);
        Swal.fire("Error", "Failed to load PYQs!", "error");
      }
    };
    fetchPYQs();
  }, [selectedExam]);

  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-[#2b6777] mb-6">
        View PYQs 
      </h1>

      {/* Dropdown for selecting exam */}
      <div className="mb-6">
        <label className="block text-[#2b6777] font-semibold mb-2">
          Select Exam
        </label>
        <select
          className="w-full border border-gray-300 rounded-lg p-2"
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
        >
          <option value="" disabled>
            -- Choose Exam --
          </option>
          {exams.map((exam, index) => (
            <option key={index} value={exam}>
              {exam}
            </option>
          ))}
        </select>
      </div>

      {/* Displaying the filtered PYQs */}
      {pyqs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pyqs.map((pyq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-[#388087]"
            >
              <h2 className="text-lg font-bold text-[#2b6777]">{pyq.title}</h2>
              <p className="text-sm text-gray-600">Subject: {pyq.subject}</p>
              <a
                href={pyq.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="text-[#2b6777] underline mt-2 inline-block"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">
          {selectedExam
            ? "No PYQs available for the selected exam."
            : "Select an exam to view PYQs."}
        </p>
      )}
    </div>
  );
};

export default ViewPYQs;
