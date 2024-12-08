import React from 'react';

const TopSlider = () => {
    return (
        <div>
            {/* Carousel Container */}
            <div className="carousel w-full max-h-[600px] relative">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/public/images/apjec1.jpg" alt="Education" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b6777] via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold">Welcome to APJEC</h1>
                        <p className="text-lg md:text-xl">Empowering Future Legal Professionals with Excellence</p>
                        <button className="bg-[#388087] hover:bg-[#2b6777] text-white px-6 py-2 rounded-lg mt-4">
                            Learn More
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/public/images/apjec2.jpg" alt="Law College" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#388087] via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold">Join Our Legal Training Programs</h1>
                        <p className="text-lg md:text-xl">Comprehensive courses designed to prepare you for success.</p>
                        <button className="bg-[#2b6777] hover:bg-[#388087] text-white px-6 py-2 rounded-lg mt-4">
                            Get Started
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/public/images/apjec3.jpg" alt="Classroom" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#BADFE7] via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-[#2b6777] space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold">Interactive Sessions & Workshops</h1>
                        <p className="text-lg md:text-xl">Learn through hands-on activities and expert guidance.</p>
                        <button className="bg-[#C2EDCE] hover:bg-[#BADFE7] text-[#2b6777] px-6 py-2 rounded-lg mt-4">
                            Explore Now
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>


                {/* Slide 4*/}               

                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/public/images/apjec4.jpg" alt="Classroom" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#BADFE7] via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-[#2b6777] space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold">Interactive Sessions & Workshops</h1>
                        <p className="text-lg md:text-xl">Learn through hands-on activities and expert guidance.</p>
                        <button className="bg-[#C2EDCE] hover:bg-[#BADFE7] text-[#2b6777] px-6 py-2 rounded-lg mt-4">
                            Explore Now
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 5*/}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/public/images/apjec5.jpg" alt="Success" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F6F6F2] via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-[#388087] space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold">Shape Your Future at APJEC</h1>
                        <p className="text-lg md:text-xl">Join a vibrant community of learners and educators.</p>
                        <button className="bg-[#2b6777] hover:bg-[#388087] text-white px-6 py-2 rounded-lg mt-4">
                            Enroll Now
                        </button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSlider;
