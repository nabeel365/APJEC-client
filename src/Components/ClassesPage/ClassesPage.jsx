import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useClasses from '../../Hooks/useClasses';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bounce, Slide } from 'react-awesome-reveal';
import useInstructors from '../../Hooks/useInstructors';
import useAdmin from '../../Hooks/useAdmin';

const ClassesPage = () => {
    const { user } = useContext(AuthContext);
    const [classes] = useClasses();
    const [isInstructor] = useInstructors();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';

    const handleSelect = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need to login first to select a class!',
            });
        }
        navigate(from, { replace: true });
    };

    const handleSelectCourse = async (_id) => {
        const data = classes.find((d) => d._id === _id);
        const newData = {
            name: data.name,
            instructor: data.instructor,
            price: data.price,
            image: data.image,
            email: user.email,
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/selected-classes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Class selected successfully!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to select class!',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while selecting a class!',
            });
        }
    };

    return (
        <div className="bg-[#F6F6F2] py-10 px-5 md:px-20">
            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2b6777]">Classes</h1>
                <p className="text-[#388087] mt-2 text-lg">
                    {/* Choose from our wide range of classes and enhance your skills. */}
                </p>
            </div>

            {/* Classes List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((classItem) => (
                    <Slide key={classItem._id}>
                        <div
                            className={`rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                                classItem.available_seats === 0 ? 'opacity-50 bg-gray-200' : 'bg-[#BADFE7]'
                            }`}
                        >
                            <img
                                src={classItem.image}
                                alt={classItem.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-[#2b6777] mb-2">
                                    {classItem.name}
                                </h3>
                                <p className="text-[#388087] mb-2">
                                    <strong>Instructor:</strong> {classItem.instructor}
                                </p>
                                <p className="text-[#2b6777] mb-2">
                                    <strong>Available Seats:</strong> {classItem.available_seats}
                                </p>
                                <p className="text-[#2b6777] mb-2">
                                    <strong>Students Enrolled:</strong> {classItem.enroled}
                                </p>
                                <p className="text-[#388087] mb-4">
                                    <strong>Price:</strong> ₹ {classItem.price}
                                </p>
                                {!user ? (
                                    <button
                                        disabled={classItem.available_seats === 0}
                                        className={`bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded ${
                                            classItem.available_seats === 0
                                                ? 'cursor-not-allowed opacity-50'
                                                : ''
                                        }`}
                                        onClick={handleSelect}
                                    >
                                        Login to Select
                                    </button>
                                ) : (
                                    <button
                                        disabled={
                                            classItem.available_seats === 0 ||
                                            isAdmin.admin ||
                                            isInstructor.instructor
                                        }
                                        className={`bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded ${
                                            classItem.available_seats === 0
                                                ? 'cursor-not-allowed opacity-50'
                                                : ''
                                        }`}
                                        onClick={() => handleSelectCourse(classItem._id)}
                                    >
                                        Select
                                    </button>
                                )}
                            </div>
                        </div>
                    </Slide>
                ))}
            </div>
        </div>
    );
};

export default ClassesPage;
