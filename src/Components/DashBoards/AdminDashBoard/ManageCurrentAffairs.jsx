import React, { useState, useEffect } from "react";

const ManageCurrentAffairs = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    pdf: null,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [currentAffairs, setCurrentAffairs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCurrentAffairs();
  }, []);

  const fetchCurrentAffairs = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/current-affairs`);
      const data = await response.json();
      setCurrentAffairs(data);
    } catch (error) {
      console.error("Error fetching current affairs:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, pdf: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.title || !formData.description || !formData.date) {
      setError("Please fill in all the fields.");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    if (formData.pdf) {
      data.append("pdf", formData.pdf);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/current-affairs`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unknown error occurred");
      }

      const result = await response.json();
      setSuccess(result.message);
      setFormData({ title: "", description: "", date: "", pdf: null });
      fetchCurrentAffairs();
    } catch (error) {
      console.error("Error adding current affair:", error);
      setError(error.message || "Failed to add current affair. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/current-affairs/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchCurrentAffairs();
      }
    } catch (error) {
      console.error("Error deleting current affair:", error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredAffairs = currentAffairs.filter((affair) =>
    affair.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container  w-screen mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Current Affairs</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-2">PDF</label>
          <input
            type="file"
            name="pdf"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search current affairs..."
          value={search}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div>
        {filteredAffairs.map((affair) => (
          <div
            key={affair._id}
            className="border border-gray-300 rounded p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold">{affair.title}</h2>
              <p>{affair.description}</p>
              <p className="text-sm text-gray-500">{new Date(affair.date).toLocaleDateString()}</p>
            </div>
            <div className="space-x-2">
              <a
                href={affair.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                View File
              </a>
              <button
                onClick={() => handleDelete(affair._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCurrentAffairs;
