import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useSelectedClasses = () => {
    const {user} = useContext(AuthContext);
    const {data: selectedClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['selected-classes', user?.email],
        queryFn: async() => {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/selected-classes?email=${user?.email}`);
            return res.json();
        }
    })
    return [selectedClass, loading, refetch]
};

export default useSelectedClasses;