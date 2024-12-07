import React, { useEffect, useState } from "react";

const CurrentAffairsList = () => {
  const [currentAffairs, setCurrentAffairs] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Fetch current affairs
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/current-affairs`)
      .then((res) => res.json())
      .then((data) => setCurrentAffairs(data))   // 
      .catch((err) => console.error("Error fetching current affairs:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/current-affairs/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete current affair");
      }
      setCurrentAffairs((prev) => prev.filter((affair) => affair._id !== id));
      alert("Current affair deleted successfully!");
    } catch (error) {
      console.error("Error deleting current affair:", error);
      alert("Failed to delete current affair. Please try again.");
    }
  };

  const filteredAffairs = currentAffairs.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesDate = filterDate ? item.date === filterDate : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="bg-[#F6F6F2] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#2b6777] mb-6">Manage Current Affairs</h1>

      {/* Search and Filter Section */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="border px-4 py-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="date"
          className="border px-4 py-2 rounded"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      {/* Current Affairs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAffairs.length > 0 ? (
          filteredAffairs.map((affair) => (
            <div key={affair._id} className="bg-white shadow-lg p-4 rounded-lg">
              <h2 className="text-xl font-bold text-[#388087] mb-2">{affair.title}</h2>
              <p className="text-gray-700 mb-4">{affair.description}</p>
              <p className="text-sm text-gray-500 mb-4">Date: {affair.date}</p>

              {/* Display PDF */}
              {affair.pdfPath && (
                <iframe
                  src={affair.pdfPath}
                  title={affair.title}
                  className="w-full h-64 mb-4 border"
                  frameBorder="0"
                ></iframe>
              )}

              <div className="flex justify-between">
                {affair.pdfPath && (
                  <a
                    href={affair.pdfPath}
                    download
                    className="bg-[#2b6777] text-white px-4 py-2 rounded text-center"
                  >
                    Download PDF
                  </a>
                )}
                {/* <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(affair._id)}
                >
                  Delete
                </button> */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No current affairs found.</p>
        )}
      </div>
    </div>
  );
};

export default CurrentAffairsList;
