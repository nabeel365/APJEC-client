import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AskDoubts = () => {
  const [doubt, setDoubt] = useState('');
  const [doubts, setDoubts] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/doubts`, { question: doubt });
      setDoubt('');
      fetchDoubts();
      Swal.fire({
        icon: 'success',
        title: 'Doubt Submitted!',
        text: 'Your doubt has been successfully submitted.',
        confirmButtonColor: '#2b6777',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'An error occurred while submitting your doubt. Please try again.',
        confirmButtonColor: '#2b6777',
      });
      console.error('Error submitting doubt:', error);
    }
  };

  const fetchDoubts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/doubts`);
      setDoubts(response.data);
    } catch (error) {
      console.error('Error fetching doubts:', error);
    }
  };

  useEffect(() => {
    fetchDoubts();
  }, []);

  const filteredDoubts = doubts.filter((d) =>
    d.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#F6F6F2] min-h-screen">
      <h2 className="text-2xl font-bold text-[#2b6777] mb-4">Ask Your Doubts</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={doubt}
          onChange={(e) => setDoubt(e.target.value)}
          className="w-full p-3 border-2 border-[#BADFE7] rounded-md"
          placeholder="Type your doubt here..."
          required
        />
        <button
          type="submit"
          className="mt-3 bg-[#2b6777] text-white px-6 py-2 rounded-md hover:bg-[#388087] transition-colors"
        >
          Submit Doubt
        </button>
      </form>
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border-2 border-[#BADFE7] rounded-md"
          placeholder="Search your question..."
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#2b6777] mb-3">Asked Doubts</h3>
        <ul className="bg-[#C2EDCE] p-4 rounded-md shadow-md">
          {filteredDoubts.length > 0 ? (
            filteredDoubts.map((d, idx) => (
              <li
                key={idx}
                className="mb-2 p-4 bg-white border border-[#BADFE7] rounded-md hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-[#2b6777]">{d.question}</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Answer:</strong> {d.answer || 'Not answered yet'}
                </p>
              </li>
            ))
          ) : (
            <p className="text-center text-[#388087]">No doubts found for "{search}".</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AskDoubts;
