import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const classData = {
      name: e.target.elements.className.value,
      image: e.target.elements.classImage.files[0],
      instructor: user?.displayName,
      email: user?.email,
      available_seats: parseInt(e.target.elements.available_seats.value),
      price: parseFloat(e.target.elements.price.value),
      role: 'student',
      status: 'pending',
      feedback: 'none',
      enroled: 0,
    };

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/classes`, classData);
      e.target.reset();
      setImagePreview(null);
      setCharCount(0);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Class has been added successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error saving class data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while adding the class!',
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCharCount = (e) => setCharCount(e.target.value.length);

  return (
    <div className="container mx-auto p-6 bg-[#BADFE7] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-[#2b6777] mb-6">
        Add a Course
      </h1>
      <form
        className="w-full max-w-lg mx-auto bg-white rounded-lg p-8 shadow-md"
        onSubmit={handleSubmit}
      >
        {/* Class Name */}
        <div className="mb-4">
          <label
            htmlFor="class-name"
            className="block text-[#2b6777] font-semibold mb-2"
          >
            Course Name
          </label>
          <input
            id="class-name"
            type="text"
            name="className"
            maxLength="50"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
            placeholder="Enter class name"
            required
            onChange={handleCharCount}
          />
          <small className="text-gray-500">
            {charCount}/50 characters used
          </small>
        </div>

        {/* Class Image */}
        <div className="mb-4">
          <label
            htmlFor="class-image"
            className="block text-[#2b6777] font-semibold mb-2"
          >
            Course Image
          </label>
          <input
            id="class-image"
            type="file"
            name="classImage"
            accept="image/*"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
            onChange={handleImageChange}
            required
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border-2 border-[#2b6777]"
              />
            </div>
          )}
        </div>

        {/* Instructor Name */}
        <div className="mb-4">
          <label
            htmlFor="instructor-name"
            className="block text-[#2b6777] font-semibold mb-2"
          >
            Instructor Name
          </label>
          <input
            id="instructor-name"
            type="text"
            value={user?.displayName || ''}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 focus:outline-none"
          />
        </div>

        {/* Instructor Email */}
        <div className="mb-4">
          <label
            htmlFor="instructor-email"
            className="block text-[#2b6777] font-semibold mb-2"
          >
            Instructor Email
          </label>
          <input
            id="instructor-email"
            type="email"
            value={user?.email || ''}
            readOnly
            className="w-full border border-gray-300 bg-gray-100 rounded-lg p-2 focus:outline-none"
          />
        </div>

        {/* Available Seats */}
        <div className="mb-4">
          <label
            htmlFor="available-seats"
            className="block text-[#2b6777] font-semibold mb-2"
          >
            Available Seats
          </label>
          <input
            id="available-seats"
            type="number"
            name="available_seats"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
            placeholder="Enter available seats"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-[#2b6777] font-semibold mb-2"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            name="price"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
            placeholder="Enter price"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#2b6777] hover:bg-[#388087] text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#C2EDCE]"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAClass;
