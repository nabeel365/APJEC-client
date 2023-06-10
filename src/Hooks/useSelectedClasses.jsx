import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useSelectedClasses = () => {
    const {data: selectedClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['selected-classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/selected-classes');
            return res.json();
        }
    })
    return [selectedClass, loading, refetch]
};

export default useSelectedClasses;