import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useInstructors = () => {
    const {user } = useContext(AuthContext)
    const {data: isInstructor = [], isLoading } = useQuery({
        queryKey: ['instructors', user?.email],
        enabled: !! user?.email,
        queryFn: async() => {

            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/instructor/${user.email}`);
            const data = await res.json();
            return data;
        }
    })

    return [isInstructor, isLoading]
};

export default useInstructors;
