import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const InstructorAssignmentPage = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [reviews, setReviews] = useState({});
  const [marks, setMarks] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchClasses();
    fetchStudents();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/classes`);
      setClasses(response.data);
    } catch (error) {
      console.error("Error fetching classes", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/bought`);
      // console.log(response.data);   to get students enrolled data from
      
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
  };

  const handleAssignmentUpload = async (e) => {
    e.preventDefault();

    if (!selectedClass || !assignmentFile) {
      Swal.fire("Error", "Please select a class and upload a file.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("classId", selectedClass);
    formData.append("file", assignmentFile);

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/assignments`, formData);
      Swal.fire("Success", "Assignment uploaded successfully.", "success");
      setAssignmentFile(null);
      setSelectedClass("");
    } catch (error) {
      Swal.fire("Error", "Failed to upload assignment.", "error");
      console.error(error);
    }
  };


  
  




  const handleReviewSubmit = async (studentId) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/assignments/review`, {
        studentId,
        review: reviews[studentId],
        marks: marks[studentId],
      });
      Swal.fire("Success", "Review and marks submitted successfully.", "success");
    } catch (error) {
      Swal.fire("Error", "Failed to submit review.", "error");
    }
  };

  return (
    <div className="w-screen" style={{ padding: "20px", backgroundColor: "#F6F6F2" }}>
      <h2 style={{ color: "#2b6777" }}>Instructor Assignment Page</h2>
      <form onSubmit={handleAssignmentUpload}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ color: "#388087" }}>Select Class:</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            style={{ padding: "10px", marginLeft: "10px", borderRadius: "5px" }}
          >
            <option value="">-- Select Class --</option>
            {classes.map((cls) => (
              <option key={cls._id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ color: "#388087" }}>Upload Assignment:</label>
          <input
            type="file"
            onChange={(e) => setAssignmentFile(e.target.files[0])}
            style={{ padding: "10px", marginLeft: "10px", borderRadius: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#388087",
            color: "#F6F6F2",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
          }}
        >
          Upload Assignment
        </button>
      </form>

      <h3 style={{ color: "#2b6777", marginTop: "30px" }}>Student Submissions</h3>
      {students.map((student) => (
        <div
          key={student.id}
          style={{
            backgroundColor: "#BADFE7",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Submitted Assignment:</strong> {student.assignmentFile || "Not Submitted"}
          </p>
          <textarea
            placeholder="Enter Review"
            value={reviews[student.id] || ""}
            onChange={(e) => setReviews({ ...reviews, [student.id]: e.target.value })}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          ></textarea>
          <input
            type="number"
            placeholder="Marks"
            value={marks[student.id] || ""}
            onChange={(e) => setMarks({ ...marks, [student.id]: e.target.value })}
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              width: "100px",
            }}
          />
          <button
            onClick={() => handleReviewSubmit(student.id)}
            style={{
              backgroundColor: "#388087",
              color: "#F6F6F2",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Submit Review
          </button>
        </div>
      ))}
    </div>
  );
};

export default InstructorAssignmentPage;
