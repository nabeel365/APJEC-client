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
    <div className="bg-[#F6F6F2] w-screen min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2b6777] mb-6 text-center">
          Ask Your Doubts - APJEC
        </h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
            className="w-full p-4 border-2 border-[#BADFE7] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#2b6777] shadow-md text-sm md:text-base"
            placeholder="Type your doubt here..."
            required
            rows="4"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-[#2b6777] text-white px-6 py-3 rounded-lg hover:bg-[#388087] transition-colors shadow-lg text-sm md:text-base"
          >
            Submit Doubt
          </button>
        </form>

        <div className="mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border-2 border-[#BADFE7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2b6777] shadow-md text-sm md:text-base"
            placeholder="Search your question..."
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#2b6777] mb-4">
            Asked Doubts
          </h2>
          <div className="overflow-y-auto max-h-[60vh] bg-[#C2EDCE] p-4 md:p-6 rounded-lg shadow-lg">
            <ul>
              {filteredDoubts.length > 0 ? (
                filteredDoubts.map((d, idx) => (
                  <li
                    key={idx}
                    className="mb-4 p-4 bg-white border border-[#BADFE7] rounded-lg hover:shadow-xl transition-shadow text-sm md:text-base"
                  >
                    <p className="font-medium text-[#2b6777] text-lg">{d.question}</p>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Answer:</strong> {d.answer || 'Not answered yet'}
                    </p>
                  </li>
                ))
              ) : (
                <p className="text-center text-[#388087] font-medium">
                  No doubts found for "{search}".
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskDoubts;
