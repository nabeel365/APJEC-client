import React from "react";
import "tailwindcss/tailwind.css";

const ThreeCards = () => {
  return (
    <div className="font-sans bg-[#F6F6F2] ">
      {/* Header Section */}
      {/* <header className="bg-[#2b6777] text-[#F6F6F2] py-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to the APJ Abdul Kalam Education Center
          </h1>
          <p className="mt-2 text-lg md:text-xl text-[#C2EDCE]">
            Empowering students for a brighter future
          </p>
        </div>
      </header> */}

      {/* Cards Section */}
      <main className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* About Us Card */}
          <div
            className="bg-[#BADFE7] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <h2 className="text-[#2b6777] text-2xl font-bold mb-4">About Us</h2>
            <p className="text-[#2b6777] leading-relaxed mb-4">
              The APJ Abdul Kalam Education Center was established on October 15,
              2022, by the Universal Human Foundation. Our aim is to provide
              deserving students with affordable, top-notch education to empower
              them for university entrance exams.
            </p>
            <p className="text-[#2b6777] font-semibold">
              Contact us: <a href="mailto:apjec.education@gmail.com" className="underline">apjec.education@gmail.com</a>
            </p>
          </div>

          {/* Our Mission Card */}
          <div
            className="bg-[#C2EDCE] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <h2 className="text-[#388087] text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-[#388087] leading-relaxed mb-4">
              Inspired by Dr. APJ Abdul Kalam, our mission is to bridge educational
              disparities and empower disadvantaged students to excel in university
              entrance exams.
            </p>
            <p className="text-[#388087] font-semibold">
              Join us to unlock the potential of every student.
            </p>
          </div>

          {/* Course Offers Card */}
          <div
            className="bg-[#BADFE7] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <h2 className="text-[#2b6777] text-2xl font-bold mb-4">Course Offers</h2>
            <p className="text-[#2b6777] leading-relaxed">
              Our coaching sessions aim to provide deserving and diligent students
              from underprivileged backgrounds with the opportunity to pursue
              careers at prestigious universities in various fields.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      {/* <footer className="bg-[#388087] text-[#F6F6F2] py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold">&copy; 2024 APJ Abdul Kalam Education Center</p>
          <p>All Rights Reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default ThreeCards;
