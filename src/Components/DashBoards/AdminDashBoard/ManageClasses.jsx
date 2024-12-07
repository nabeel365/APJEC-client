import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/classes`);
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleApprove = async (classId) => {
    try {
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/classes/${classId}`, {
        status: 'approved',
      });
      const updatedClasses = classes.map((classItem) =>
        classItem._id === classId ? { ...classItem, status: 'approved' } : classItem
      );
      setClasses(updatedClasses);
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/classes/${classId}`, {
        status: 'denied',
      });
      const updatedClasses = classes.map((classItem) =>
        classItem._id === classId ? { ...classItem, status: 'denied' } : classItem
      );
      setClasses(updatedClasses);
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const handleSendFeedback = (classId) => {
    setSelectedClassId(classId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitFeedback = async () => {
    try {
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/classes/${selectedClassId}`, {
        feedback,
        status: 'denied',
      });
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Feedback Sent',
        showConfirmButton: false,
        timer: 1500,
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F6F2] py-8 px-4 lg:px-16">
      <h1 className="text-3xl font-bold text-[#2b6777] mb-8 text-center">
        Manage Classes
      </h1>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-[#388087] text-white">
            <tr>
              <th className="px-6 py-4 text-left">Class Image</th>
              <th className="px-6 py-4 text-left">Class Name</th>
              <th className="px-6 py-4 text-left">Instructor Name</th>
              <th className="px-6 py-4 text-left">Instructor Email</th>
              <th className="px-6 py-4 text-left">Available Seats</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td className="px-6 py-4">
                  <img
                    src={classItem.image}
                    alt="Class"
                    className="w-12 h-12 object-cover rounded-md shadow"
                  />
                </td>
                <td className="px-6 py-4 text-[#2b6777] font-semibold">
                  {classItem.name}
                </td>
                <td className="px-6 py-4">{classItem.instructor}</td>
                <td className="px-6 py-4">{classItem.email}</td>
                <td className="px-6 py-4">{classItem.available_seats}</td>
                <td className="px-6 py-4">
                  <span className="font-bold text-[#388087]">${classItem.price}</span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`py-1 px-3 rounded-full text-white text-sm ${
                      classItem.status === 'approved'
                        ? 'bg-green-500'
                        : classItem.status === 'denied'
                        ? 'bg-red-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {classItem.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <button
                    className="bg-[#2b6777] hover:bg-[#388087] text-white py-2 px-4 rounded-lg transition"
                    onClick={() => handleApprove(classItem._id)}
                    disabled={classItem.status === 'approved'}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-[#C2EDCE] hover:bg-[#BADFE7] text-black py-2 px-4 rounded-lg transition"
                    onClick={() => handleDeny(classItem._id)}
                    disabled={classItem.status === 'denied'}
                  >
                    Deny
                  </button>
                  <button
                    className="bg-[#BADFE7] hover:bg-[#388087] text-white py-2 px-4 rounded-lg transition"
                    onClick={() => handleSendFeedback(classItem._id)}
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
            <h2 className="text-xl font-bold mb-4 text-[#2b6777]">Send Feedback</h2>
            <textarea
              className="w-full h-32 border rounded-lg p-3 text-gray-700"
              placeholder="Enter your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="bg-[#2b6777] hover:bg-[#388087] text-white py-2 px-4 rounded-lg transition"
                onClick={handleSubmitFeedback}
              >
                Submit
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-lg transition"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
