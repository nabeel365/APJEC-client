import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnswerDoubts = () => {
  const [doubts, setDoubts] = useState([]);
  const [responses, setResponses] = useState({});

  const fetchDoubts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/doubts');
      setDoubts(response.data);
    } catch (error) {
      console.error('Error fetching doubts:', error);
    }
  };

  const handleResponseChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleSubmitResponse = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/doubts/${id}`, {
        answer: responses[id],
      });
      fetchDoubts();
    } catch (error) {
      console.error('Error submitting response:', error);
    }
  };

  useEffect(() => {
    fetchDoubts();
  }, []);

  return (
    <div className="p-6 bg-[#F6F6F2] min-h-screen">
      <h2 className="text-2xl font-bold text-[#2b6777] mb-4">Answer Students' Doubts</h2>
      <div>
        {doubts.map((doubt) => (
          <div key={doubt._id} className="mb-4 p-4 bg-white rounded-md shadow-md border border-[#BADFE7]">
            <h3 className="text-lg font-semibold text-[#388087]">{doubt.question}</h3>
            {doubt.answer ? (
              <p className="mt-2 text-green-600 font-medium">Answer: {doubt.answer}</p>
            ) : (
              <div>
                <textarea
                  value={responses[doubt._id] || ''}
                  onChange={(e) => handleResponseChange(doubt._id, e.target.value)}
                  className="w-full p-2 border border-[#BADFE7] rounded-md"
                  placeholder="Write your response here..."
                />
                <button
                  onClick={() => handleSubmitResponse(doubt._id)}
                  className="mt-2 bg-[#2b6777] text-white px-4 py-2 rounded-md hover:bg-[#388087]"
                >
                  Submit Answer
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerDoubts;
