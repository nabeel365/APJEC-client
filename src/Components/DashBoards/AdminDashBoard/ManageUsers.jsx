import React from 'react';
import useUsers from '../../../Hooks/useUsers';

const ManageUsers = () => {
    const [users] = useUsers();
    console.log(users);
    return (
        <div>
            ManageUsers
        </div>
    );
};

export default ManageUsers;

