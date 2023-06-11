import React from 'react';
import useUsers from '../../../Hooks/useUsers';

const ManageUsers = () => {
    const [users] = useUsers();
    console.log(users);
  
    const makeAdmin = (userId) => {

    };
  
    const makeInstructor = (userId) => {

    };
  
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border-b">Name</th>
                        <th className="border-b">Email</th>
                        <th>Role</th>
                        <th className="border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td className="border-b">{user.name}</td>
                            <td className="border-b">{user.email}</td>
                            <td>student</td>
                            <td className="border-b">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => makeAdmin(user.id)}
                                >
                                    Make Admin
                                </button>
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => makeInstructor(user.id)}
                                >
                                    Make Instructor
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;


