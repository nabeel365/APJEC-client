




import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

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

  const handleApprove = async (classId) => {
    try {
      await axios.patch(`http://localhost:5000/classes/${classId}`, { status: 'approved' });
      const updatedClasses = classes.map((classItem) => {
        if (classItem._id === classId) {
          return { ...classItem, status: 'approved' };
        }
        return classItem;
      });
      setClasses(updatedClasses);
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await axios.patch(`http://localhost:5000/classes/${classId}`, { status: 'denied' });
      const updatedClasses = classes.map((classItem) => {
        if (classItem._id === classId) {
          return { ...classItem, status: 'denied' };
        }
        return classItem;
      });
      setClasses(updatedClasses);
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  const handleSendFeedback = (classId) => {
    // Logic to open modal or navigate to a separate route for sending feedback
    console.log('Send feedback for class:', classId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Classes</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Class Image</th>
              <th className="px-4 py-2 border-b">Class Name</th>
              <th className="px-4 py-2 border-b">Instructor Name</th>
              <th className="px-4 py-2 border-b">Instructor Email</th>
              <th className="px-4 py-2 border-b">Available Seats</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td className="px-4 py-2 border-b">
                  <img
                    src={classItem.image}
                    alt="Class Image"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </td>
                <td className="px-4 py-2 border-b">{classItem.name}</td>
                <td className="px-4 py-2 border-b">{classItem.instructor}</td>
                <td className="px-4 py-2 border-b">{classItem.email}</td>
                <td className="px-4 py-2 border-b">{classItem.available_seats}</td>
                <td className="px-4 py-2 border-b">
                  <strong>$</strong>
                  {classItem.price}
                </td>
                <td className="px-4 py-2 border-b">{classItem.status}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleApprove(classItem._id)}
                    disabled={classItem.status === 'denied'}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDeny(classItem._id)}
                    disabled={classItem.status === 'approved'}
                  >
                    Deny
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleSendFeedback(classItem._id)}
                  >
                    Send Feedback
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

export default ManageClasses;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ManageClasses = () => {
//   const [classes, setClasses] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedClassId, setSelectedClassId] = useState('');
//   const [feedbackContent, setFeedbackContent] = useState('');

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   const fetchClasses = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/classes');
//       setClasses(response.data);
//     } catch (error) {
//       console.error('Error fetching classes:', error);
//     }
//   };

//   const handleApprove = async (classId) => {
//     try {
//       await axios.patch(`http://localhost:5000/classes/${classId}`, { status: 'approved' });
//       const updatedClasses = classes.map((classItem) => {
//         if (classItem._id === classId) {
//           return { ...classItem, status: 'approved' };
//         }
//         return classItem;
//       });
//       setClasses(updatedClasses);
//     } catch (error) {
//       console.error('Error updating class:', error);
//     }
//   };

//   const handleDeny = async (classId) => {
//     try {
//       await axios.patch(`http://localhost:5000/classes/${classId}`, { status: 'denied' });
//       const updatedClasses = classes.map((classItem) => {
//         if (classItem._id === classId) {
//           return { ...classItem, status: 'denied' };
//         }
//         return classItem;
//       });
//       setClasses(updatedClasses);
//     } catch (error) {
//       console.error('Error updating class:', error);
//     }
//   };

//   const openModal = (classId) => {
//     setSelectedClassId(classId);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setSelectedClassId('');
//     setFeedbackContent('');
//     setShowModal(false);
//   };

//   const handleFeedbackContentChange = (event) => {
//     setFeedbackContent(event.target.value);
//   };

//   const handleSendFeedback = (classId) => {
//     openModal(classId);
//   };

//   const sendFeedback = async (classId) => {
//     try {
//       await axios.post(`http://localhost:5000/classes/${classId}`, { feedback: feedbackContent });
//       closeModal();
//       fetchClasses();
//     } catch (error) {
//       console.error('Error sending feedback:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Manage Classes</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b">Class Image</th>
//               <th className="px-4 py-2 border-b">Class Name</th>
//               <th className="px-4 py-2 border-b">Instructor Name</th>
//               <th className="px-4 py-2 border-b">Instructor Email</th>
//               <th className="px-4 py-2 border-b">Available Seats</th>
//               <th className="px-4 py-2 border-b">Price</th>
//               <th className="px-4 py-2 border-b">Status</th>
//               <th className="px-4 py-2 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {classes.map((classItem) => (
//               <tr key={classItem._id}>
//                 <td className="px-4 py-2 border-b">
//                   <img
//                     src={classItem.image}
//                     alt="Class Image"
//                     className="w-8 h-8 object-cover rounded-full"
//                   />
//                 </td>
//                 <td className="px-4 py-2 border-b">{classItem.name}</td>
//                 <td className="px-4 py-2 border-b">{classItem.instructor}</td>
//                 <td className="px-4 py-2 border-b">{classItem.email}</td>
//                 <td className="px-4 py-2 border-b">{classItem.available_seats}</td>
//                 <td className="px-4 py-2 border-b">
//                   <strong>$</strong>
//                   {classItem.price}
//                 </td>
//                 <td className="px-4 py-2 border-b">{classItem.status}</td>
//                 <td className="px-4 py-2 border-b">
//                   <button
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
//                     onClick={() => handleApprove(classItem._id)}
//                     disabled={classItem.status === 'denied'}
//                   >
//                     Approve
//                   </button>
//                   <button
//                     className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
//                     onClick={() => handleDeny(classItem._id)}
//                     disabled={classItem.status === 'approved'}
//                   >
//                     Deny
//                   </button>
//                   <button
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
//                     onClick={() => handleSendFeedback(classItem._id)}
//                   >
//                     Send Feedback
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8">
//             <h2 className="text-xl font-bold mb-4">Send Feedback</h2>
//             <textarea
//               className="w-full h-32 border border-gray-300 rounded-lg p-2 mb-4"
//               placeholder="Write your feedback..."
//               value={feedbackContent}
//               onChange={handleFeedbackContentChange}
//             ></textarea>
//             <div className="flex justify-end">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
//                 onClick={sendFeedback}
//               >
//                 Send
//               </button>
//               <button
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageClasses;
