import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AnswerSection = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [emailFilter, setEmailFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/questions`);
      const data = response.data || [];
      setQuestions(data);
      setFilteredQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswerSubmit = async (id) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/questions/${id}/answer`, {
        answer: answers[id],
      });
      setAnswers((prev) => ({ ...prev, [id]: "" }));
      fetchQuestions();
      Swal.fire({
        icon: "success",
        title: "Answer Submitted",
        text: "Your answer has been successfully submitted.",
      });
    } catch (error) {
      console.error("Error submitting answer:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting the answer.",
      });
    }
  };

  const applyFilters = () => {
    let filtered = questions;

    if (emailFilter) {
      filtered = filtered.filter((q) => q.email.includes(emailFilter));
    }

    if (statusFilter === "answered") {
      filtered = filtered.filter((q) => q.answer);
    } else if (statusFilter === "unanswered") {
      filtered = filtered.filter((q) => !q.answer);
    }

    if (search) {
      filtered = filtered.filter((q) =>
        q.question.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredQuestions(filtered);
  };

  const resetFilters = () => {
    setEmailFilter("");
    setStatusFilter("all");
    setSearch("");
    setFilteredQuestions(questions);
  };

  useEffect(() => {
    applyFilters();
  }, [emailFilter, statusFilter, search, questions]);

  return (
    <div
      className="answer-section w-screen"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#F6F6F2" }}
    >
      <h2 style={{ color: "#2b6777", textAlign: "center" }}>Answer Questions - APJEC</h2>
      <div className="filters" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Filter by email..."
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
          style={{ padding: "10px", border: "1px solid #388087", borderRadius: "5px", flex: "1 1 200px" }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "10px", border: "1px solid #388087", borderRadius: "5px", flex: "1 1 200px" }}
        >
          <option value="all">All Questions</option>
          <option value="answered">Answered</option>
          <option value="unanswered">Unanswered</option>
        </select>
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", border: "1px solid #388087", borderRadius: "5px", flex: "1 1 200px" }}
        />
        <button
          onClick={resetFilters}
          style={{
            padding: "10px 20px",
            backgroundColor: "#388087",
            color: "#F6F6F2",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            flex: "1 1 200px",
          }}
        >
          Clear Filters
        </button>
      </div>
      {filteredQuestions.length > 0 ? (
        filteredQuestions.map((q) => (
          <div
            key={q._id}
            className="question"
            style={{
              backgroundColor: "#BADFE7",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p>
              <strong>Email:</strong> {q.email}
              
            </p>
            <p>
              <strong>Question:</strong> {q.question}
            </p>
            {q.image && (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${q.image}`}
                alt="Attached"
                style={{
                  display: "block",
                  marginTop: "10px",
                  maxWidth: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "1px solid #388087",
                }}
              />
            )}
            <p>
              <strong>Date:</strong> {new Date(q.createdAt).toLocaleDateString()}
            </p>

            {q.answer ? (
              <>
                <p style={{ color: "#2b6777", fontWeight: "bold" }}>Answered</p>
                <p>{q.answer}</p>
              </>
            ) : (
              <>
                <textarea
                  value={answers[q._id] || ""}
                  onChange={(e) => setAnswers({ ...answers, [q._id]: e.target.value })}
                  placeholder="Write your answer..."
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "5px",
                    border: "1px solid #388087",
                  }}
                ></textarea>
                <button
                  onClick={() => handleAnswerSubmit(q._id)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#388087",
                    color: "#F6F6F2",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Submit Answer
                </button>
              </>
            )}
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#388087" }}>No questions available.</p>
      )}
    </div>
  );
};

export default AnswerSection;
