import React from 'react';
import useInstructors from '../../Hooks/useInstructors';

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    console.log(instructors);
    return (
        <div>
        <h2 className="text-3xl font-bold text-center mb-8">Popular Instructors</h2>
            
        </div>
    );
};

export default PopularInstructors;