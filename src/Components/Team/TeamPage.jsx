import React from 'react';

const TeamPage = () => {
    return (
        <div className="bg-[#F6F6F2] py-10">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Page Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#2b6777]">Meet Our Team</h2>
                    <p className="text-[#388087] text-lg mt-2">
                        Dedicated professionals committed to your success at APJEC.
                    </p>
                </div>

                {/* Team Members */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {/* Team Member 1 */}
                    <div className="bg-[#BADFE7] rounded-lg shadow-lg p-6 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2b6777]"
                        />
                        <h3 className="text-xl font-bold text-[#2b6777]">Dr. Aditi Sharma</h3>
                        <p className="text-[#388087] mb-4">Founder & Director</p>
                        <p className="text-sm text-[#2b6777]">
                            With 15+ years in education, Dr. Sharma is a visionary leader ensuring the growth of APJEC.
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-[#C2EDCE] rounded-lg shadow-lg p-6 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2b6777]"
                        />
                        <h3 className="text-xl font-bold text-[#2b6777]">Prof. Rajiv Mehta</h3>
                        <p className="text-[#388087] mb-4">Head of Academics</p>
                        <p className="text-sm text-[#2b6777]">
                            Specializing in law and governance, Prof. Mehta ensures academic excellence at APJEC.
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-[#BADFE7] rounded-lg shadow-lg p-6 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2b6777]"
                        />
                        <h3 className="text-xl font-bold text-[#2b6777]">Ms. Priya Khandelwal</h3>
                        <p className="text-[#388087] mb-4">Student Support Manager</p>
                        <p className="text-sm text-[#2b6777]">
                            Dedicated to assisting students in their academic and personal growth.
                        </p>
                    </div>

                    {/* Add more members as needed */}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-[#2b6777]">
                        Want to join our team?
                    </h3>
                    <p className="text-[#388087] mt-2">
                        We are always looking for passionate individuals to contribute to our vision.
                    </p>
                    <a
                        href="career"
                        className="mt-4 inline-block bg-[#2b6777] text-white hover:bg-[#388087] py-3 px-6 rounded-lg"
                    >
                        View Career Opportunities
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
