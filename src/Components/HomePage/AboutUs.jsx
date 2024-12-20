import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#F6F6F2] min-h-screen">
      <header className="bg-[#2b6777] text-white py-10">
      <h1 className="text-3xl font-bold text-[#f7f9fa] text-center mb-6">About Us</h1>


      </header>

      <main className="container mx-auto px-4 py-10">
        {/* Mission and Vision */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#2b6777] text-center mb-6">Our Mission and Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">



          <div className="bg-[#BADFE7] p-6 rounded-lg shadow-lg">

            <h3 className="text-xl font-semibold text-[#2b6777] mb-4">About APJEC</h3>
              <p className="text-[#388087]"><strong>Empowering Minds, Shaping Futures</strong></p>
              <p className="text-[#388087]">The APJ Abdul Kalam Education Center was established on October 15, 2022, the anniversary of APJ Abdul Kalam's birth, by the Universal Human Foundation. Our organization aims to provide deserving Bengali students with affordable and top-notch education, empowering them with the resources they need to excel in university entrance exams.

                Contact us: BioMechaSoft@gmail.com</p>

            </div>


            <div className=" bg-[#C2EDCE] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b6777] mb-4">Our Mission</h3>
              <p className="text-[#388087]">
                At our core, we're driven by a mission to bridge educational disparities. Inspired by the visionary words of Dr. APJ Abdul Kalam, we strive to empower disadvantaged students across West Bengal and India to excel in university entrance exams.

                Join us in our commitment to democratize education and unlock the potential of every student. </p>
            </div>

            <div className=" bg-[#C2EDCE] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b6777] mb-4">Our Vision</h3>
              <p className="text-[#388087]">
                We envision becoming a leader in educational excellence, shaping future generations through innovative learning and inclusive opportunities.
              </p>
            </div>

            <div className="bg-[#BADFE7] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#2b6777] mb-4">Course Offers</h3>
              <p className="text-[#388087]">
                The coaching sessions are a component of this institution's mission to give deserving and diligent students from underprivileged backgrounds the chance to pursue careers at prestigious universities in various fields.  </p>
            </div>

          </div>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#2b6777] text-center mb-6">Why Choose APJEC?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#BADFE7] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-[#2b6777]">Experienced Faculty</h3>
              <p className="text-[#388087] mt-4">
                Our faculty comprises industry experts and dedicated educators passionate about teaching.
              </p>
            </div>
            <div className="bg-[#C2EDCE] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-[#2b6777]">Modern Infrastructure</h3>
              <p className="text-[#388087] mt-4">
                State-of-the-art facilities designed to enhance the learning experience.
              </p>
            </div>
            <div className="bg-[#BADFE7] p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-[#2b6777]">Holistic Development</h3>
              <p className="text-[#388087] mt-4">
                Programs that nurture intellectual, emotional, and social growth.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#2b6777] text-center mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/team1.jpg"
                alt="Team Member 1"
                className="w-40 h-40 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2b6777]">Dr. A. P. Jain</h3>
              <p className="text-[#388087]">Founder & Chairman</p>
            </div>
            <div className="text-center">
              <img
                src="/team2.jpg"
                alt="Team Member 2"
                className="w-40 h-40 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2b6777]">Prof. R. K. Sharma</h3>
              <p className="text-[#388087]">Dean of Academics</p>
            </div>
            <div className="text-center">
              <img
                src="/team3.jpg"
                alt="Team Member 3"
                className="w-40 h-40 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2b6777]">Ms. Anjali Mehta</h3>
              <p className="text-[#388087]">Director of Operations</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#2b6777] mb-4">Join APJEC Today!</h2>
          <p className="text-[#388087] mb-6">
            Be a part of a vibrant educational community that values growth, creativity, and excellence.
          </p>
          <a
            href="/admissions"
            className="bg-[#2b6777] text-white px-6 py-3 rounded-lg hover:bg-[#388087] transition"
          >
            Learn More About Admissions
          </a>
        </section>
      </main>

      <footer className="bg-[#2b6777] text-white py-6 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 APJ Educational Institution. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
