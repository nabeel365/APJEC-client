import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const StudentAssignmentPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchAssignments();
    fetchSubmittedAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/student/assignments`
      );
      setAssignments(response.data);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const fetchSubmittedAssignments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/student/submitted-assignments`
      );
      setSubmittedAssignments(response.data);
    } catch (error) {
      console.error("Error fetching submitted assignments:", error);
    }
  };

  const handleFileUpload = async (assignmentId) => {
    if (submittedAssignments.some((sa) => sa.assignmentId === assignmentId)) {
      Swal.fire({
        icon: "error",
        title: "Assignment Already Submitted",
        text: "You cannot resubmit this assignment.",
      });
      return;
    }

    if (!selectedFile) {
      Swal.fire({
        icon: "error",
        title: "No File Selected",
        text: "Please select a file to upload.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("assignmentId", assignmentId);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/student/submit-assignment`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      Swal.fire({
        icon: "success",
        title: "Assignment Submitted",
        text: "Your assignment has been submitted successfully!",
      });
      fetchSubmittedAssignments();
      setSelectedFile(null);
    } catch (error) {
      console.error("Error submitting assignment:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Failed to submit the assignment. Please try again.",
      });
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F6F6F2",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#2b6777" }}>Student Assignments</h2>

      <div>
        <h3 style={{ color: "#388087" }}>Available Assignments</h3>
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <div
              key={assignment.id}
              style={{
                backgroundColor: "#BADFE7",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>Course:</strong> {assignment.courseName}
              </p>
              <p>
                <strong>Description:</strong> {assignment.description}
              </p>
              <p>
                <strong>Deadline:</strong> {new Date(
                  assignment.deadline
                ).toLocaleDateString()}
              </p>
              {submittedAssignments.some(
                (sa) => sa.assignmentId === assignment.id
              ) ? (
                <p style={{ color: "green" }}>
                  <strong>Status:</strong> Submitted
                </p>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    style={{ marginBottom: "10px" }}
                  />
                  <button
                    onClick={() => handleFileUpload(assignment.id)}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#388087",
                      color: "#F6F6F2",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Submit Assignment
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No assignments available.</p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#388087" }}>Submitted Assignments</h3>
        {submittedAssignments.length > 0 ? (
          submittedAssignments.map((submitted) => (
            <div
              key={submitted.assignmentId}
              style={{
                backgroundColor: "#C2EDCE",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>Course:</strong> {submitted.courseName}
              </p>
              <p>
                <strong>Review:</strong> {submitted.review || "Not Reviewed"}
              </p>
              <p>
                <strong>Marks:</strong> {submitted.marks || "Not Graded"}
              </p>
            </div>
          ))
        ) : (
          <p>No submitted assignments.</p>
        )}
      </div>
    </div>
  );
};

export default StudentAssignmentPage;
