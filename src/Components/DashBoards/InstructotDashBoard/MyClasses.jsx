import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedBack from './FeedBack';

const MyClasses = () => {
  const [classes, setClasses] = useState([]);

  console.log(classes);
  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Classes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Class Name</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Total Enrolled Students</th>
              <th className="px-4 py-2 border-b">Feedback</th>
              <th className="px-4 py-2 border-b">Update</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td className="px-4 py-2 border-b">
                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-2">
                      <img
                        src={classItem.image}
                        alt="Class Image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>{classItem.name}</div>
                  </div>
                </td>
                <td className="px-4 py-2 border-b">{classItem.status}</td>
                <td className="px-4 py-2 border-b">
                  {/* {classItem.enrolledStudents.length} */}
                </td>
                <td className="px-4 py-2 border-b">
                  {/* { classItem.status ? (classItem.status === 'denied' && classItem.status === 'denied') : classItem.feedback } */}
                  {classItem.feedback}
                  {classItem.status === 'denied' ? classItem.feedback : '-'}

                </td>
                <td className="px-4 py-2 border-b">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
