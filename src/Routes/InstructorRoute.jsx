import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructors from '../Hooks/useInstructors';
import { AuthContext } from '../Providers/AuthProvider';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructors();
    const location = useLocation();

    console.log(isInstructor.instructor);

    if (loading || isInstructorLoading) {
        return <div>
            loading...
            <span className="loading loading-infinity loading-xs"></span>
            <span className="loading loading-infinity loading-sm"></span>
            <span className="loading loading-infinity loading-md"></span>
            <span className="loading loading-infinity loading-lg"></span>

        </div>
    }

    if (user && isInstructor.instructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};


export default InstructorRoute;