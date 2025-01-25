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
                            src="/images/Adyan Dir.jpg"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2b6777]"
                        />
                        <h3 className="text-xl font-bold text-[#2b6777]">Adyan Chowdhury
                        </h3>
                        <p className="text-[#388087] mb-4">Founder & Director</p>
                        <p className="text-sm text-[#2b6777]">
                        Adyan Chowdhury, a distinguished individual, has recently completed his studies at the esteemed Faculty of Social Science at AMU. With his extensive knowledge and expertise in the field of polity, he has now become an esteemed faculty member at our institution. His remarkable educational background and dedication to his profession make him a valuable asset to our organization. We are proud to have him as a part of our faculty, as he continues to inspire and guide students in their pursuit of knowledge in the realm of politics and governance
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-[#C2EDCE] rounded-lg shadow-lg p-6 text-center">
                        <img
                            src="/images/Asif.jpg"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2b6777]"
                        />
                        <h3 className="text-xl font-bold text-[#2b6777]">Asif Reza</h3>
                        <p className="text-[#388087] mb-4">Head of Academics</p>
                        <p className="text-sm text-[#2b6777]">
                           
                        I am Md Asif Reza, a current student of BALLB at Jamia Millia Islamia. I have achieved outstanding academic performance and have actively contributed to the development of my peers. By assisting them, I have improved my communication and leadership abilities. These experiences have given me valuable practical knowledge in the field of law. Through research and critical thinking, I have acquired the essential skills to navigate the intricacies of the legal sphere. Additionally, I have engaged in a variety of extracurricular activities, broadening my perspectives and cultivating a diverse skill set.​


                           
                             </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-[#BADFE7] rounded-lg shadow-lg p-6 text-center">
                        <img
                            src="/images/ahmad.jpg.png"
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#2b6777]"
                        />
                        <h3 className="text-xl font-bold text-[#2b6777]">Ahmadullah</h3>
                        <p className="text-[#388087] mb-4">Head of Management </p>
                        <p className="text-sm text-[#2b6777]">
                           
                        I am Ahmadullah, currently in my fourth year as a law student at Calcutta University. With a fervent interest in the intricacies of legal frameworks and a dedication to promoting justice, I am committed to honing my skills and knowledge in this field. At Calcutta University, I actively engage in various academic pursuits, seeking to deepen my understanding of law and its implications in society. I am passionate about utilizing my education to advocate for fairness and equality, and I eagerly anticipate the opportunities for growth and learning that lie ahead on my journey as a law student.​


                        
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
