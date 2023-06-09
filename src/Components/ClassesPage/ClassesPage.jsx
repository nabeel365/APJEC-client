import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useClasses from '../../Hooks/useClasses';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassCard = ({ classItem, isAdmin }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || '/login';

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Need to Login First to Select a Class!',
      });
    }
    navigate(from, { replace: true });
  };

  const handleSelectCourse = () => {
    console.log('selected');
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        classItem.available_seats === 0 ? 'bg-red-500' : ''
      }`}
    >
      <img src={classItem.image} alt={classItem.name} className="w-10 h-10" />
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
            onClick={handleSelectCourse}
          >
            Select
          </button>
        )}
      </div>
    </div>
  );
};

const ClassesPage = ({ isAdmin }) => {
  const [classes] = useClasses();

  return (
    <div className="class-list grid grid-cols-3 gap-4 border-2">
      {classes.map((classItem) => (
        <ClassCard key={classItem._id} classItem={classItem} isAdmin={isAdmin} />
      ))}
    </div>
  );
};

export default ClassesPage;
