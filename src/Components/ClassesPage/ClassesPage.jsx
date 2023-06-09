import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useClasses from '../../Hooks/useClasses';

const ClassesPage = ({   isAdmin }) => {

  const [classes] = useClasses();


    const {user} = useContext(AuthContext);
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Instructor</th>
          <th className="px-4 py-2">Available Seats</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Select</th>
        </tr>
      </thead>
      <tbody>
        {classes.map((classItem) => (
          <tr
            key={classItem._id}
            // className={classNames({
            //   'bg-red-200': classItem.available_seats === 0,
            // })}
          >
            <td className="px-4 py-2">
              <img
                src={classItem.image}
                alt={classItem.name}
                className="w-10 h-10"
              />
            </td>
            <td className="px-4 py-2">{classItem.name}</td>
            <td className="px-4 py-2">{classItem.instructor}</td>
            <td className="px-4 py-2">{classItem.available_seats}</td>
            <td className="px-4 py-2">{classItem.price}</td>
            <td className="px-4 py-2">
              {user && !isAdmin ? (
                <button
                  disabled={classItem.available_seats === 0}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Select
                </button>
              ) : (
                <span className="text-red-500">Please log in to select</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClassesPage;
