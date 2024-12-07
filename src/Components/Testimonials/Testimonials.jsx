import React from 'react';

const Testimonials = () => {
    return (
        <div className="bg-[#F6F6F2] py-10 px-5 md:px-20">
            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2b6777]">Success Stories</h1>
                <p className="text-[#388087] mt-2 text-lg">
                    Discover how APJEC has empowered its students to achieve their dreams.
                </p>
            </div>

            {/* Featured Testimonial */}
            <div className="bg-[#BADFE7] p-6 rounded-lg shadow-lg mb-10">
                <h2 className="text-2xl font-semibold text-[#2b6777] mb-4">Featured Success Story</h2>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Top Student"
                        className="w-36 h-36 rounded-full border-4 border-[#388087]"
                    />
                    <div>
                        <p className="text-[#2b6777] font-medium text-lg">
                            "APJEC gave me the confidence and skills to excel in my law career. Thanks to the
                            practical training and experienced faculty, I secured a prestigious internship and
                            landed my dream job!"
                        </p>
                        <p className="text-[#388087] mt-2 font-semibold">— Priya Sharma, Class of 2023</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial Card */}
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#C2EDCE] p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
                    >
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Student"
                            className="w-24 h-24 rounded-full mb-4 border-4 border-[#388087]"
                        />
                        <p className="text-[#2b6777] font-medium text-lg">
                            "The moot court training at APJEC was a game-changer for me. It prepared me for real-life
                            challenges."
                        </p>
                        <p className="text-[#388087] mt-2 font-semibold">— Ankit Raj</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="bg-[#388087] mt-10 py-8 px-6 rounded-lg text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold">Your Story Could Be Next!</h2>
                <p className="mt-3 text-lg">
                    Join APJEC and take the first step toward achieving your career aspirations.
                </p>
                <button className="mt-5 bg-[#2b6777] hover:bg-[#BADFE7] hover:text-[#2b6777] text-white px-6 py-3 rounded-md font-semibold transition duration-300">
                   <a href="/classes">Enroll Now</a> 
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
