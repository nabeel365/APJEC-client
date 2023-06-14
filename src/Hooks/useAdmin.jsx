import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAdmin = () => {
    const {user } = useContext(AuthContext)
    const {data: isAdmin = [], isLoading } = useQuery({

        queryKey: ['admins', user?.email],
        enabled: !! user?.email,

        queryFn: async() => {
            const res = await fetch(`https://art-server-two.vercel.app/users/admin/${user.email}`);
            const data = res.json();
            return data;
        }
    })

    return [isAdmin, isLoading]
};

export default useAdmin;
