import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const admin = useLoaderData();
    
    const {data: isAdmin = [], isLoading } = useQuery({

        queryKey: ['admins', user?.email],
        enabled: !! user?.email,

        queryFn: async () => {
            return admin;
        }
    });

    return [isAdmin, isLoading]
};

export default useAdmin;
