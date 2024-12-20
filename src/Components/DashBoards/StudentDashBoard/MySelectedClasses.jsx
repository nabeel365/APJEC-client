import React, { useState } from 'react';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {
  const [selectedClass, , refetch] = useSelectedClasses();

  const handleDelete = (_id) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/selected-classes/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Class removed successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen py-10 px-2 md:px-2">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#2b6777]">My Selected Courses</h1>
        <p className="text-[#388087] mt-2 text-sm md:text-lg">
          Manage your selected courses and proceed to payment.
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden text-sm md:text-base">
          <thead>
            <tr className="bg-[#2b6777] text-white text-left">
              <th className="px-2 md:px-6 py-3">Image</th>
              <th className="px-2 md:px-6 py-3">Name</th>
              <th className="px-2 md:px-6 py-3">Instructor</th>
              <th className="px-2 md:px-6 py-3">Price</th>
              <th className="px-2 md:px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((classItem, index) => (
              <tr
                key={classItem._id}
                className={`${
                  index % 2 === 0 ? 'bg-[#BADFE7]' : 'bg-[#C2EDCE]'
                }`}
              >
                <td className="px-2 md:px-6 py-4 text-center">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-md border-2 border-[#388087] mx-auto"
                  />
                </td>
                <td className="px-2 md:px-6 py-4 font-semibold text-[#2b6777]">
                  {classItem.name}
                </td>
                <td className="px-2 md:px-6 py-4 text-[#388087]">
                  {classItem.instructor}
                </td>
                <td className="px-2 md:px-6 py-4 text-[#2b6777] font-bold">
                  ₹{classItem.price}
                </td>
                <td className="px-2 md:px-6 py-4 flex flex-col gap-2 md:flex-row items-center justify-center">
                  <Link  to={`/dashboard/pay/${classItem._id}`}>
                    <button target='_blank' className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-md text-xs md:text-sm">
                      Pay
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(classItem._id)}
                    className="bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-md text-xs md:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Classes Message */}
      {selectedClass.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-base md:text-xl text-[#388087]">
            You have not selected any classes yet.
          </p>
          <Link to="/classes">
            <button className="mt-4 bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-6 rounded shadow-md text-sm md:text-base">
              Browse Classes
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MySelectedClasses;
