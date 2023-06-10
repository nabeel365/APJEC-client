import React from 'react';
import useSelectedClasses from '../../../Hooks/useSelectedClasses';

const MySelectedClasses = () => {
    const [selectedClass] = useSelectedClasses();
    console.log(selectedClass);
    
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
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2 rounded">Pay</button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MySelectedClasses;
