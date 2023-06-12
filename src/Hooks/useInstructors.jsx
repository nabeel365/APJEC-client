import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useInstructors = () => {
    const {user } = useContext(AuthContext)
    const {data: isInstructor = [] } = useQuery({
        queryKey: ['instructors', user?.email],
        queryFn: async() => {
        if(user?.email ){
            const res = await fetch(`http://localhost:5000/users/instructor/${user.email}`);
            const data = res.json();
            return data;
        }
        }
    })

    return [isInstructor]
};

export default useInstructors;
