import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import { AuthContext } from '../../../Providers/AuthProvider';

const MySelectedClasses = () => {
  const [selectedClass, , refetch] = useSelectedClasses();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [currentClassId, setCurrentClassId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    phone: '',
    email: '',
    address: '',
    idProof: null,
    photo: null,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

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

  const handlePay = (classId) => {
    setCurrentClassId(classId);
    setShowModal(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });
    formPayload.append('classId', currentClassId);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/applications`, {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {


        Swal.fire({
          icon: 'success',
          title: 'Application Submitted',
          text: 'Proceeding to payment...',
          showConfirmButton: false,
          timer: 1500,
        });


        setShowModal(false);
        navigate(`/dashboard/pay/${currentClassId}`);
      } else {
        throw new Error('Failed to submit the form.');
      }
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen py-10 px-2 md:px-2">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#2b6777]">My Selected Courses</h1>
        <p className="text-[#388087] mt-2 text-sm md:text-lg">
          Manage your selected courses and proceed to payment.
        </p>
      </div>

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
                className={`${index % 2 === 0 ? 'bg-[#BADFE7]' : 'bg-[#C2EDCE]'
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
                  <button
                    onClick={() => handlePay(classItem._id)}
                    className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-md text-xs md:text-sm"
                  >
                    Pay
                  </button>
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

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <form
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/5 lg:w-2/5 max-h-[90vh] overflow-y-auto"
            onSubmit={handleFormSubmit}
          >
            <h2 className="text-2xl font-bold text-[#2b6777] mb-4 text-center">
              Fill up the form to continue
            </h2>
            <div className="space-y-4">
              {["name", "fatherName", "phone", "email", "address"].map((field) => (
                <div key={field}>
                  <label className="text-[#2b6777] font-semibold block capitalize">
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleFormChange}
                    className="w-full border border-[#388087] rounded-lg p-2 bg-[#F6F6F2]"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="text-[#2b6777] font-semibold block">
                  ID Proof (HS Admit Card, Aadhar, PAN)
                </label>
                <input
                  type="file"
                  name="idProof"
                  onChange={handleFileChange}
                  className="w-full border border-[#388087] rounded-lg p-2 bg-[#F6F6F2]"
                  required
                />
              </div>
              <div>
                <label className="text-[#2b6777] font-semibold block">Passport Size Photo</label>

                <input
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  className="w-full border border-[#388087] rounded-lg p-2 bg-[#F6F6F2]"
                  required
                />
              </div>
<br />
              {/* Submit Button */}
              <div className="flex justify-between mt-4 ">
                <button
                  type="submit"
                  className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded shadow-md"
                >
                  Submit Application
                </button>



                <button
                  type="button"
                  onClick={() => setShowModal(false)}  // This will close the modal
                  className="bg-[#E63946] hover:bg-[#D62839] text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded shadow-md text-xs md:text-sm"
                >
                  Cancel
                </button>

              </div>

              {/* <div> */}
               

              {/* </div> */}

            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MySelectedClasses;
