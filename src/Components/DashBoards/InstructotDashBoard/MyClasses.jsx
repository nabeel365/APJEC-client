import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchClasses();
  }, [user?.email]);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/instructorclasses?email=${user?.email}`
      );
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const filteredClasses = classes.filter((classItem) => {
    const matchesSearch = classItem.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus = statusFilter
      ? classItem.status === statusFilter
      : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container w-screen mx-auto p-6 bg-[#F6F6F2] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#2b6777] mb-6">
        My Classes
      </h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by class name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
        >
          <option value="">Filter by Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="denied">Denied</option>
        </select>
      </div>

      {/* Classes Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead className="bg-[#BADFE7] text-[#2b6777]">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Class Name</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">
                Enrolled Students
              </th>
              <th className="px-4 py-3 text-left font-semibold">Feedback</th>
              <th className="px-4 py-3 text-left font-semibold">Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map((classItem) => (
              <tr
                key={classItem._id}
                className="hover:bg-[#C2EDCE] transition duration-200"
              >
                <td className="px-4 py-3 border-b">
                  <div className="flex items-center">
                    <img
                      src={classItem.image}
                      alt="Class"
                      className="w-12 h-12 object-cover rounded-full border-2 border-[#2b6777] mr-3"
                    />
                    <span className="text-gray-700">{classItem.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      classItem.status === 'approved'
                        ? 'bg-green-100 text-green-600'
                        : classItem.status === 'denied'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {classItem.status}
                  </span>
                </td>
                <td className="px-4 py-3 border-b text-gray-700">
                  {classItem.enroled || 0}
                </td>
                <td className="px-4 py-3 border-b text-gray-700">
                  {classItem.status === 'denied' ? (
                    <span className="text-red-500">{classItem.feedback}</span>
                  ) : (
                    'No Feedback'
                  )}
                </td>
                <td className="px-4 py-3 border-b">
                  <button
                    className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#C2EDCE]"
                    onClick={() => {
                      /* Placeholder for update functionality */
                      alert('Update feature coming soon!');
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Classes Message */}
      {filteredClasses.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          No classes match your criteria.
        </div>
      )}
    </div>
  );
};

export default MyClasses;
