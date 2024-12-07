import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/users/instructor`)
      .then((response) => response.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error));
      // console.log(response);

  }, []);

  return (
    <div className="bg-[#F6F6F2] py-10 px-5 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2b6777]">Meet Our Instructors</h1>
        <p className="text-[#388087] mt-2 text-lg">
          Our highly qualified and experienced instructors are dedicated to providing the best learning experience.
        </p>
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <Zoom key={instructor._id}>
            <div className="bg-[#BADFE7] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <div className="p-6">
                {/* Instructor Image */}
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#C2EDCE]"
                />

                {/* Instructor Details */}
                <h2 className="text-lg font-semibold text-[#2b6777] text-center">
                  {instructor.name}
                </h2>
                <p className="text-sm text-[#388087] text-center mb-4">
                  <span className="font-medium">Email:</span> <span className="text-blue-600">{instructor.email}</span>
                </p>

                {/* Additional Details */}
                <div className="text-sm text-[#2b6777]">
                  {instructor.num_classes_taken && (
                    <p>
                      <strong>Classes Taken:</strong> {instructor.num_classes_taken}
                    </p>
                  )}
                  {instructor.classes_taken && (
                    <p>
                      <strong>Subjects:</strong> {instructor.classes_taken.join(', ')}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-4">
                  <Link to={`classes/${instructor._id}`}>
                    {/* <button className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-6 rounded">
                      View Classes
                    </button> */}
                  </Link>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default InstructorsPage;
