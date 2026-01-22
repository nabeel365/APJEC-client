import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useClasses from '../../Hooks/useClasses';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import useInstructors from '../../Hooks/useInstructors';
import useAdmin from '../../Hooks/useAdmin';
import { Helmet } from "react-helmet-async";

const ClassesPage = () => {
    const { user } = useContext(AuthContext);
    const [classes] = useClasses();
    const [isInstructor] = useInstructors();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';
    const [selectedClass, setSelectedClass] = useState(null);
    const [courseDetails, setCourseDetails] = useState(null);

    const handleSelect = async (classId) => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Login Required',
                text: 'Please login to enroll in this course.',
            });
            navigate(from, { replace: true });
            return;
        }

        const selectedClassData = classes.find((c) => c._id === classId);

        try {
            await fetch(`${import.meta.env.VITE_BACKEND_URL}/selected-classes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: selectedClassData.name,
                    instructor: selectedClassData.instructor,
                    price: selectedClassData.price,
                    image: selectedClassData.image,
                    email: user.email,
                }),
            });

            Swal.fire('Success', 'Course selected successfully!', 'success');
            setSelectedClass(null);
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    };

    return (
        <div className="bg-[#F6F6F2] py-10 px-5 md:px-20">

            {/* ===================== SEO ===================== */}
            <Helmet>
                <title>
                    Law Entrance Coaching Courses | CULET 2026, CU BA LLB – APJEC
                </title>

                <meta
                    name="description"
                    content="Explore law entrance coaching courses at APJEC for CULET 2026, CU BA LLB admission, and other law exams. Expert faculty, updated syllabus, and admission guidance."
                />

                <link rel="canonical" href="https://apjec.online/classes" />
            </Helmet>

            {/* ===================== H1 ===================== */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2b6777]">
                    Law Entrance Coaching Courses for CULET 2026 & CU BA LLB
                </h1>
                <p className="text-[#388087] mt-3 text-lg max-w-3xl mx-auto">
                    APJ Abdul Kalam Education Centre (APJEC) offers result-oriented law entrance coaching
                    courses for Calcutta University Law Entrance Test (CULET), CU BA LLB admissions,
                    and other law exams across West Bengal.
                </p>
            </div>

            {/* ===================== COURSES GRID ===================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map((classItem) => (
                    <Slide key={classItem._id}>
                        <div
                            className={`rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                                classItem.available_seats === 0
                                    ? 'opacity-50 bg-gray-200'
                                    : 'bg-[#BADFE7]'
                            }`}
                        >
                            <img
                                src={classItem.image}
                                alt={`${classItem.name} law coaching course`}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-[#2b6777] mb-2">
                                    {classItem.name}
                                </h2>

                                <p className="text-[#2b6777] mb-2">
                                    <strong>Available Seats:</strong> {classItem.available_seats}
                                </p>

                                <p className="text-[#388087] mb-4">
                                    <strong>Course Fee:</strong> ₹ {classItem.price}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {!user ? (
                                        <button
                                            disabled={classItem.available_seats === 0}
                                            className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleSelect(classItem._id)}
                                        >
                                            Login to Enroll
                                        </button>
                                    ) : (
                                        <button
                                            disabled={
                                                classItem.available_seats === 0 ||
                                                isAdmin.admin ||
                                                isInstructor.instructor
                                            }
                                            className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleSelect(classItem._id)}
                                        >
                                            Enroll Now
                                        </button>
                                    )}

                                    <button
                                        className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded"
                                        onClick={() => setCourseDetails(classItem.description)}
                                    >
                                        View Course Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slide>
                ))}
            </div>

            {/* ===================== COURSE DETAILS MODAL ===================== */}
            {courseDetails && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/5 lg:w-2/5 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-2xl font-bold text-[#2b6777] mb-4 text-center">
                            Course Details
                        </h3>
                        <p className="text-[#388087]">{courseDetails}</p>

                        <div className="mt-6 flex justify-end">
                            <button
                                className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
                                onClick={() => setCourseDetails(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ClassesPage;
