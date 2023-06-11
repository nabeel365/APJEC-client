import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useClasses from '../../Hooks/useClasses';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassesPage = ({ isAdmin }) => {
  const { user } = useContext(AuthContext);
  const [ classes] = useClasses();
  console.log(classes);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/login';

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to login first to select a class!',
      });
    }
    navigate(from, { replace: true });
  };

  const handleSelectCourse = async (_id) => {
    console.log(_id);
    const data = classes.find((d) => d._id == _id);
    console.log(data);
    const newData = {
      name: data.name,
      instructor: data.instructor,
      price: data.price,
      image: data.image,
      email: user.email


    }
    console.log(newData);
    try {
      const response = await fetch('http://localhost:5000/selected-classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData), 
      });

      console.log(response);
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Class selected successfully',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to select class',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while selecting a class',
      });
    }


  };
  

  return (
    <div className="class-list grid sm:grid-cols-3 gap-4 border-2">
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className={`bg-white rounded-lg shadow-md p-6 ${
            classItem.available_seats === 0 ? 'bg-red-500' : ''
          }`}
        >
          <img src={classItem.image} alt={classItem.name} className="w-50 h-50" />
          <div className="class-details">
            <h3 className="text-lg font-semibold mb-2">{classItem.name}</h3>
            <p className="text-gray-600 mb-2">Instructor: {classItem.instructor}</p>
            <p className="text-gray-600 mb-2">Available Seats: {classItem.available_seats}</p>
            <p className="text-gray-600 mb-4">Price: $ {classItem.price}</p>
            {!user && !isAdmin ? (
              <button
                disabled={classItem.available_seats === 0}
                className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
                  classItem.available_seats === 0 ? 'cursor-not-allowed opacity-50' : ''
                }`}
                onClick={handleSelect}
              >
                Select
              </button>
            ) : (
              <button
                disabled={classItem.available_seats === 0}
                className={`bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
                  classItem.available_seats === 0 ? 'cursor-not-allowed opacity-50' : ''
                }`}
                onClick={() => handleSelectCourse(classItem._id)}
              >
                Select
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassesPage;





