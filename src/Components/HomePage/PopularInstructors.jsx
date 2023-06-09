import React from 'react';
import useInstructors from '../../Hooks/useInstructors';

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    console.log(instructors);
    return (
        <div>
            dscs
        </div>
    );
};

export default PopularInstructors;