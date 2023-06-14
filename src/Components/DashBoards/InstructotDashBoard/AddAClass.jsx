import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const classData = {
      name: e.target.elements.className.value,
      image: e.target.elements.classImage.files[0],
      instructor: user?.displayName,
      email: user?.email,
      available_seats: parseInt(e.target.elements.available_seats.value),
      price: parseFloat(e.target.elements.price.value),
      role: "student",
      status: "pending",
      feedback: 'none ',
      enroled: 0
    };

    try {
      await axios.post('https://art-server-two.vercel.app/classes', classData);

      await axios.post('https://art-server-two.vercel.app/selected-classes', classData);



      e.target.reset();

    } catch (error) {
      console.error('Error saving class data:', error);
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Class has been added Successfully',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Class</h1>
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {/* Form fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class-name">
            Class Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="class-name"
            type="text"
            placeholder="Enter class name"
            name='className'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="class-image">
            Class Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="class-image"
            type="file"
            accept="image/*"
            name='classImage'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor-name">
            Instructor Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructor-name"
            type="text"
            defaultValue={user?.displayName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructor-email">
            Instructor Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructor-email"
            type="email"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="available-seats">
            Available Seats
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="available-seats"
            type="number"
            placeholder="Enter available seats"
            name='available_seats'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Enter price"
            name='price'
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAClass;




