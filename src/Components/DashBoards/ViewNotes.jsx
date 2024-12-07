import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#BADFE7] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#2b6777] mb-6">Available Notes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div key={note._id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold text-[#388087] mb-2">{note.title}</h2>
              <p className="text-[#2b6777] mb-4">
                <strong>Subject:</strong> {note.subject}
              </p>
              <a
                href={`${import.meta.env.VITE_BACKEND_URL}${note.fileUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                download={`${note.title}.pdf`} // Ensures the file is downloaded
                className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded-lg block text-center"
              >
                Download Notes
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewNotes;
