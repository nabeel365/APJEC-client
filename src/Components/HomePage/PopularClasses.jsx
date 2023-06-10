import React from 'react';
import useClasses from '../../Hooks/useClasses';

const PopularClasses = () => {
    const [classes] = useClasses();
    console.log(classes);

    return (
        <div>
                    <h2 className="text-3xl font-bold text-center mb-8">Popular Classes</h2>

        </div>
    );
};

export default PopularClasses;