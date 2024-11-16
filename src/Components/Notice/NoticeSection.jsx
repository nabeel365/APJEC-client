import React from 'react';

const NoticeSection = () => {
    return (
        <div className="py-10 bg-[#F6F6F2]">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#2b6777]">Latest Notices</h2>
                    <p className="text-[#388087] text-lg mt-2">Stay updated with important announcements and events at APJEC.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Notice Card 1 */}
                    <div className="bg-[#BADFE7] rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#2b6777] mb-2">Admission Deadline Extended</h3>
                        <p className="text-[#388087] mb-4">
                            The admission deadline for the 2024 batch has been extended to <strong>30th November 2024</strong>. Apply now to secure your spot.
                        </p>
                        <a 
                            href="#" 
                            className="text-white bg-[#2b6777] hover:bg-[#388087] py-2 px-4 rounded-lg inline-block">
                            Learn More
                        </a>
                    </div>
                    {/* Notice Card 2 */}
                    <div className="bg-[#C2EDCE] rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#2b6777] mb-2">Upcoming Workshop</h3>
                        <p className="text-[#388087] mb-4">
                            Join our workshop on "Legal Research Techniques" on <strong>15th December 2024</strong>. Open to all enrolled students.
                        </p>
                        <a 
                            href="#" 
                            className="text-white bg-[#2b6777] hover:bg-[#388087] py-2 px-4 rounded-lg inline-block">
                            Register Now
                        </a>
                    </div>
                    {/* Notice Card 3 */}
                    <div className="bg-[#BADFE7] rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-[#2b6777] mb-2">Holiday Announcement</h3>
                        <p className="text-[#388087] mb-4">
                            APJEC will remain closed for Winter Break from <strong>24th December 2024</strong> to <strong>1st January 2025</strong>.
                        </p>
                        <a 
                            href="#" 
                            className="text-white bg-[#2b6777] hover:bg-[#388087] py-2 px-4 rounded-lg inline-block">
                            View Details
                        </a>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <a 
                        href="#" 
                        className="bg-[#2b6777] text-white hover:bg-[#388087] py-3 px-6 rounded-lg">
                        View All Notices
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NoticeSection;
