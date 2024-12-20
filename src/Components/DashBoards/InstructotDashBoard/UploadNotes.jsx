import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadNotes = () => {
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    subject: "",
    file: null,
  });
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setNoteDetails((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", noteDetails.title);
    formData.append("subject", noteDetails.subject);
    formData.append("file", noteDetails.file);

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/notes`, formData);
      alert("Note uploaded successfully!");
      setNoteDetails({ title: "", subject: "", file: null });
      fetchNotes();
    } catch (error) {
      console.error("Error uploading note:", error);
    }
  };

  const handleUpdate = async (noteId, updatedDetails) => {
    try {
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/notes/${noteId}`, updatedDetails);
      alert("Note updated successfully!");
      fetchNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/notes/${noteId}`);
      alert("Note deleted successfully!");
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen w-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-[#2b6777] mb-6">Upload Notes</h1>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-[#388087] font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={noteDetails.title}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#2b6777]"
              required
            />
          </div>
          <div>
            <label className="block text-[#388087] font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={noteDetails.subject}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#2b6777]"
              required
            />
          </div>
          <div>
            <label className="block text-[#388087] font-semibold mb-2">Upload File</label>
            <input
              type="file"
              name="file"
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#2b6777] text-white px-4 py-2 rounded-lg hover:bg-[#388087] transition duration-300"
          >
            Upload Note
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-[#2b6777] mb-4">Uploaded Notes</h2>
        {notes.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Subject</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr key={note._id}>
                  <td className="border-b p-2">{note.title}</td>
                  <td className="border-b p-2">{note.subject}</td>
                  <td className="border-b p-2">
                    <button
                      className="bg-[#BADFE7] text-black px-3 py-1 rounded-md hover:bg-[#C2EDCE] mr-2"
                      onClick={() =>
                        handleUpdate(note._id, {
                          title: prompt("Enter new title", note.title),
                          subject: prompt("Enter new subject", note.subject),
                        })
                      }
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                      onClick={() => handleDelete(note._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-[#388087]">No notes uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default UploadNotes;
