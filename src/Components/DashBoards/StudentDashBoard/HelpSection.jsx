import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const HelpSection = () => {
  const { user } = useContext(AuthContext); // Extract user from AuthContext
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetchQuestions();
    }
  }, [user]);

  const fetchQuestions = async () => {
    if (!user?.email) return;

    try {
      setLoading(true);

      // Check local storage first
      const cachedQuestions = localStorage.getItem(`questions_${user.email}`);
      if (cachedQuestions) {
        setQuestions(JSON.parse(cachedQuestions));
      }

      // Fetch latest data from API
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/questions/${user.email}`
      );
      const fetchedQuestions = response.data || [];
      setQuestions(fetchedQuestions);
      setFilteredQuestions(fetchedQuestions);

      // Cache the data locally
      localStorage.setItem(
        `questions_${user.email}`,
        JSON.stringify(fetchedQuestions)
      );
    } catch (error) {
      console.error("Error fetching questions:", error);
      setError("Failed to load questions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Not Logged In",
        text: "You need to log in to ask a question.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login");
      });
      return;
    }

    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("question", question);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/questions`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const newQuestion = response.data; // The newly added question from the response
      setQuestions((prev) => [...prev, newQuestion]); // Update state immediately
      setFilteredQuestions((prev) => [...prev, newQuestion]); // Update filtered list
      localStorage.setItem(
        `questions_${user.email}`,
        JSON.stringify([...questions, newQuestion]) // Update cache
      );

      Swal.fire({
        icon: "success",
        title: "Question Submitted",
        text: "Your question has been successfully submitted!",
      });

      setQuestion("");
      setImage(null);
    } catch (err) {
      console.error("Error posting question:", err);
      setError("Failed to submit the question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = questions;

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

  useEffect(() => {
    applyFilters();
  }, [statusFilter, search, questions]);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F6F6F2",
      }}
    >
      <h2 style={{ color: "#2b6777" }}>Ask Your Questions</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #388087",
          }}
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={{
            display: "block",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
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
          {loading ? "Submitting..." : "Submit Question"}
        </button>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          backgroundColor: "#C2EDCE",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #388087",
            borderRadius: "5px",
            width: "30%",
          }}
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
          style={{
            padding: "10px",
            border: "1px solid #388087",
            borderRadius: "5px",
            width: "65%",
          }}
        />
      </div>

      <h3 style={{ color: "#388087" }}>Your Questions</h3>
      {loading ? (
        <p>Loading...</p>
      ) : filteredQuestions.length > 0 ? (
        filteredQuestions.map((q) => (
          <div
            key={q._id}
            style={{
              backgroundColor: "#BADFE7",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <p>
              <strong>Question:</strong> {q.question}
            </p>
            {q.image && (
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${q.image}`}
                alt="Attached"
                style={{ maxWidth: "100%" }}
              />
            )}
            {q.answer && (
              <p>
                <strong>Answer:</strong> {q.answer}
              </p>
            )}
          </div>
        ))
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default HelpSection;
