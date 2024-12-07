import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

   

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const updateUserRole = async (userId, role) => {
    try {
      await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`, {
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
    if (role === 'admin' || role === 'instructor') {
      const confirmChange = window.confirm(
        `Are you sure you want to make this user ${role === 'admin' ? 'an Admin' : 'an Instructor'}?`
      );
      if (confirmChange) {
        updateUserRole(userId, role);
      }
    }
  };

  // const filteredUsers = users.filter((user) => {
  //   const matchesSearch =
  //     user.name.toLowerCase().includes(search.toLowerCase()) ||
  //     user.email.toLowerCase().includes(search.toLowerCase());
  //   const matchesRole = roleFilter ? user.role === roleFilter : true;
  //   return matchesSearch && matchesRole;
  // });



  const filteredUsers = users.filter((user) => {

   console.log(user);

  const nameMatches =
    user.name?.toLowerCase().includes(search.toLowerCase()) || false;
    
  const emailMatches =
    user.email?.toLowerCase().includes(search.toLowerCase()) || false;
  const matchesSearch = nameMatches || emailMatches;
  const matchesRole = roleFilter ? user.role === roleFilter : true;
  return matchesSearch && matchesRole;
});






  return (
    <div className="container mx-auto px-4 py-6 bg-[#F6F6F2] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-[#2b6777] mb-6">
        Manage Users
      </h2>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#388087]"
        >
          <option value="">Filter by Role</option>
          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead className="bg-[#BADFE7] text-[#2b6777]">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Email</th>
              <th className="px-4 py-3 text-left font-semibold">Role</th>
              <th className="px-4 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-[#C2EDCE] transition duration-200"
              >
                <td className="px-4 py-3 border-b text-gray-700">{user.name}</td>
                <td className="px-4 py-3 border-b text-gray-700">{user.email}</td>
                <td className="px-4 py-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.role === 'admin'
                        ? 'bg-green-100 text-green-600'
                        : user.role === 'instructor'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 border-b">
                  <button
                    className={`bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded mr-2 ${
                      user.role === 'admin' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => handleRoleChange(user._id, 'admin')}
                    disabled={user.role === 'admin'}
                  >
                    Make Admin
                  </button>
                  <button
                    className={`bg-[#388087] hover:bg-[#2b6777] text-white font-bold py-2 px-4 rounded ${
                      user.role === 'instructor'
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                    onClick={() => handleRoleChange(user._id, 'instructor')}
                    disabled={user.role === 'instructor'}
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* No Users Message */}
      {filteredUsers.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          No users match your criteria.
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
