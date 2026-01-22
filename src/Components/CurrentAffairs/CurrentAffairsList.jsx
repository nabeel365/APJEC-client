import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const CurrentAffairsList = () => {
  const [currentAffairs, setCurrentAffairs] = useState([]);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Fetch current affairs
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/current-affairs`)
      .then((res) => res.json())
      .then((data) => setCurrentAffairs(data))
      .catch((err) =>
        console.error("Error fetching current affairs:", err)
      );
  }, []);

  const filteredAffairs = currentAffairs.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesDate = filterDate ? item.date === filterDate : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="bg-[#F6F6F2] min-h-screen p-8">

      {/* ===================== SEO ===================== */}
      <Helmet>
        <title>
          Current Affairs for CULET 2026 & CU Law Entrance | APJEC
        </title>

        <meta
          name="description"
          content="Daily current affairs, GK updates, and PDF notes for CULET 2026 and Calcutta University Law Entrance preparation. Updated regularly by APJEC."
        />

        <link
          rel="canonical"
          href="https://apjec.online/current"
        />
      </Helmet>

      {/* ===================== H1 ===================== */}
      <h1 className="text-3xl font-bold text-[#2b6777] mb-2">
        Current Affairs for CULET 2026 & CU Law Entrance
      </h1>

      <p className="text-[#388087] mb-6 max-w-3xl">
        Stay updated with daily current affairs, GK notes, and downloadable PDFs
        specially curated for CULET 2026, CU BA LLB entrance, and other law
        entrance examinations by APJEC.
      </p>

      {/* ===================== SEARCH & FILTER ===================== */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Search current affairs by title..."
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

      {/* ===================== CURRENT AFFAIRS LIST ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAffairs.length > 0 ? (
          filteredAffairs.map((affair) => (
            <div
              key={affair._id}
              className="bg-white shadow-lg p-4 rounded-lg"
            >
              <h2 className="text-xl font-bold text-[#388087] mb-2">
                {affair.title}
              </h2>

              <p className="text-gray-700 mb-4">
                {affair.description}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                Date: {affair.date}
              </p>

              {/* PDF Viewer */}
              {affair.pdfPath && (
                <iframe
                  src={affair.pdfPath}
                  title={`${affair.title} current affairs PDF`}
                  className="w-full h-64 mb-4 border"
                ></iframe>
              )}

              <div className="flex justify-start">
                {affair.pdfPath && (
                  <a
                    href={affair.pdfPath}
                    download
                    className="bg-[#2b6777] text-white px-4 py-2 rounded"
                  >
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">
            No current affairs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CurrentAffairsList;
