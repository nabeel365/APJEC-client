import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAdmin = () => {
    const {user } = useContext(AuthContext)
    const {data: isAdmin = [] } = useQuery({
        queryKey: ['admins', user?.email],
        queryFn: async() => {
        if(user?.email ){
            const res = await fetch(`http://localhost:5000/users/admin/${user.email}`);
            const data = res.json();
            return data;
        }
        }
    })

    return [isAdmin]
};

export default useAdmin;
