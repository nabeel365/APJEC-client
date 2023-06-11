import React, { useState } from 'react';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {
    const [selectedClass, ,refetch] = useSelectedClasses();
    console.log(selectedClass);

    //   const [courses, setCourses] = useState([]);

    const handleDelete = (_id) => {
        console.log('deleted', _id);
        fetch(`http://localhost:5000/selected-classes/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    //   const remaining = courses.filter((course) => course._id !== _id);
                    //   setCourses(remaining);
                }

            });
    };

    return (
        <div>

            <h1 className="text-2xl font-bold mb-4">My Selected Classes</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Image</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Name</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Instructor</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Price</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClass.map((classItem) => (
                        <tr key={classItem._id}>
                            <td className="border-b border-gray-300 px-4 py-2">
                                <img src={classItem.image} alt={classItem.name} className="w-16 h-16" />
                            </td>
                            <td className="border-b border-gray-300 px-4 py-2">{classItem.name}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{classItem.instructor}</td>
                            <td className="border-b border-gray-300 px-4 py-2">${classItem.price}</td>
                            <td className="border-b border-gray-300 px-4 py-2">
                                <Link to="/dashboard/pay">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded">Pay</button>

                                </Link>
                                <button onClick={() => handleDelete(classItem._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MySelectedClasses;

