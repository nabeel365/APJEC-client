import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AskDoubts = () => {
  const [doubt, setDoubt] = useState('');
  const [doubts, setDoubts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/doubts', { question: doubt });
      setDoubt('');
      fetchDoubts();
    } catch (error) {
      console.error('Error submitting doubt:', error);
    }
  };

  const fetchDoubts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/doubts');
      setDoubts(response.data);
    } catch (error) {
      console.error('Error fetching doubts:', error);
    }
  };

  useEffect(() => {
    fetchDoubts();
  }, []);

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
          className="mt-3 bg-[#2b6777] text-white px-6 py-2 rounded-md hover:bg-[#388087]"
        >
          Submit Doubt
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold text-[#2b6777] mb-3">Asked Doubts</h3>
        <ul className="bg-[#C2EDCE] p-4 rounded-md shadow-md">
          {doubts.map((d, idx) => (
            <li key={idx} className="mb-2 p-2 bg-white border border-[#BADFE7] rounded-md">
              <p className="font-medium">{d.question}</p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Answer:</strong> {d.answer || 'Not answered yet'}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AskDoubts;
