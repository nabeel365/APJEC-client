import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://art-server-two.vercel.app/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const updateUserRole = async (userId, role) => {
    try {
      await axios.patch(`https://art-server-two.vercel.app/users/${userId}`, {
        role: role,
      });
      const updatedUsers = users.map((user) => {
        if (user._id === userId) {
          return { ...user, role: role };
        }
        return user;
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleRoleChange = (userId, role) => {
    if (role === 'admin') {
      updateUserRole(userId, 'admin');
    } else if (role === 'instructor') {
      updateUserRole(userId, 'instructor');
    }
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
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border-b">{user.name}</td>
              <td className="border-b">{user.email}</td>
              <td className='text-lg text-purple-500'>{user.role}</td>
              <td className="border-b">
                <button
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${
                    user.role === 'admin' ? 'disabled' : ''
                  }`}
                  onClick={() => handleRoleChange(user._id, 'admin')}
                  disabled={user.role === 'admin'}
                >
                  Make Admin
                </button>
                <button
                  className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                    user.role === 'instructor' ? 'disabled' : ''
                  }`}
                  onClick={() => handleRoleChange(user._id, 'instructor')}
                  disabled={user.role === 'instructor' }
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
