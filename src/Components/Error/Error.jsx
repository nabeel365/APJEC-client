import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F6F6F2] p-8">
      {/* APJEC Logo Placeholder */}
      <div className="mb-6">
        <img className="w-32 h-auto" src="/src/images/apjec-logo.png" alt="APJEC Logo" />
      </div>

      {/* Error Image */}
      <img
        className="w-auto h-64 mb-8 border-4 border-[#388087] rounded-md shadow-lg"
        src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
        alt="404 Page Not Found"
      />

      {/* Error Message */}
      <h1 className="text-4xl font-bold text-[#2b6777] mb-4">Oops! Page Not Found</h1>
      <p className="text-[#388087] mb-8 text-center">The page you're looking for does not exist or has been moved.</p>

      {/* Navigation Link */}
      <Link
        to="/"
        className="bg-[#2b6777] hover:bg-[#388087] text-white font-semibold px-6 py-3 rounded transition duration-300"
      >
        Back to Home
      </Link>

      {/* Additional Information */}
      <div className="mt-8 text-center">
        <p className="text-[#388087]">For assistance, please contact our support team at <a href="mailto:support@apjec.edu" className="text-blue-600 hover:underline">support@apjec.edu</a>.</p>
      </div>
    </div>
  );
};

export default Error;
