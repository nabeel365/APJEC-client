import React, { useState } from 'react';

const Testimonials = () => {
    // State to toggle between showing all testimonials or only the first 6
    const [showAll, setShowAll] = useState(false);

    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            name: 'Ankit Raj',
            feedback: 'The moot court training at APJEC was a game-changer for me. It prepared me for real-life challenges.',
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 2,
            name: 'Sneha Gupta',
            feedback: 'APJEC provided a perfect blend of theory and practice, enabling me to thrive in my legal career.',
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 3,
            name: 'Rahul Verma',
            feedback: 'Thanks to APJEC, I overcame my fear of public speaking and excelled in debates.',
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 4,
            name: 'Meera Das',
            feedback: 'The faculty at APJEC is unparalleled. They go above and beyond to ensure student success.',
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 5,
            name: 'Arjun Kumar',
            feedback: 'The practical exposure and mentorship at APJEC helped me secure my dream internship.',
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 6,
            name: 'Priyanka Joshi',
            feedback: 'APJEC’s personalized approach to learning gave me a competitive edge in my career.',
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 7,
            name: 'Vikram Singh',
            feedback: 'The skills I gained at APJEC have been instrumental in shaping my professional journey.',
            image: 'https://via.placeholder.com/100',
        },
        {
            id: 8,
            name: 'Riya Kapoor',
            feedback: 'APJEC helped me transform my passion for law into a thriving career.',
            image: 'https://via.placeholder.com/100',
        },
    ];

    // Determine the testimonials to display based on the state
    const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

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
                {displayedTestimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-[#C2EDCE] p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full mb-4 border-4 border-[#388087]"
                        />
                        <p className="text-[#2b6777] font-medium text-lg">{testimonial.feedback}</p>
                        <p className="text-[#388087] mt-2 font-semibold">— {testimonial.name}</p>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            {!showAll && (
                <div className="text-center mt-8">
                    <button
                        className="bg-[#388087] hover:bg-[#2b6777] text-white px-6 py-3 rounded-md font-semibold transition duration-300"
                        onClick={() => setShowAll(true)}
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Testimonials;
