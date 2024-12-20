import React, { useEffect, useState } from 'react';

const slides = [
    {
        id: "slide1",
        img: "/images/apjec1.jpg",
        title: "Welcome to APJEC",
        description: "Empowering Future Legal Professionals with Excellence",
        bgGradient: "bg-gradient-to-t from-[#2b6777] via-transparent to-transparent",
        btnBg: "bg-[#388087] hover:bg-[#2b6777]",
        textColor: "text-white"
    },
    {
        id: "slide2",
        img: "/images/apjec2.jpg",
        title: "Join Our Legal Training Programs",
        description: "Comprehensive courses designed to prepare you for success.",
        bgGradient: "bg-gradient-to-t from-[#388087] via-transparent to-transparent",
        btnBg: "bg-[#2b6777] hover:bg-[#388087]",
        textColor: "text-white"
    },
    {
        id: "slide3",
        img: "/images/apjec3.jpg",
        title: "Interactive Sessions & Workshops",
        description: "Learn through hands-on activities and expert guidance.",
        bgGradient: "bg-gradient-to-t from-[#BADFE7] via-transparent to-transparent",
        btnBg: "bg-[#C2EDCE] hover:bg-[#BADFE7]",
        textColor: "text-[#2b6777]"
    },
    {
        id: "slide5",
        img: "/images/apjec5.jpg",
        title: "Shape Your Future at APJEC",
        description: "Join a vibrant community of learners and educators.",
        bgGradient: "bg-gradient-to-t from-[#F6F6F2] via-transparent to-transparent",
        btnBg: "bg-[#2b6777] hover:bg-[#388087]",
        textColor: "text-[#388087]"
    },
    {
        id: "slide6",
        img: "/images/apjec6.png",
        title: "Shape Your Future at APJEC",
        description: "Join a vibrant community of learners and educators.",
        bgGradient: "bg-gradient-to-t from-[#F6F6F2] via-transparent to-transparent",
        btnBg: "bg-[#2b6777] hover:bg-[#388087]",
        textColor: "text-[#388087]"
    },
    {
        id: "slide7",
        img: "/images/apjec7.jpg",
        title: "Shape Your Future at APJEC",
        description: "Join a vibrant community of learners and educators.",
        bgGradient: "bg-gradient-to-t from-[#F6F6F2] via-transparent to-transparent",
        btnBg: "bg-[#2b6777] hover:bg-[#388087]",
        textColor: "text-[#388087]"
    },
    {
        id: "slide8",
        img: "/images/apjec8.jpg",
        title: "Shape Your Future at APJEC",
        description: "Join a vibrant community of learners and educators.",
        bgGradient: "bg-gradient-to-t from-[#F6F6F2] via-transparent to-transparent",
        btnBg: "bg-[#2b6777] hover:bg-[#388087]",
        textColor: "text-[#388087]"
    },
    {
        id: "slide9",
        img: "/images/apjec9.jpg",
        title: "Shape Your Future at APJEC",
        description: "Join a vibrant community of learners and educators.",
        bgGradient: "bg-gradient-to-t from-[#F6F6F2] via-transparent to-transparent",
        btnBg: "bg-[#2b6777] hover:bg-[#388087]",
        textColor: "text-[#388087]"
    }
];

const TopSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel w-full max-h-[600px] relative">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`carousel-item w-full h-100 relative ${index === currentSlide ? "block" : "hidden"}`}
                >
                    <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${slide.bgGradient}`}></div>
                    <div className={`absolute bottom-10 left-10 space-y-4 ${slide.textColor}`}>
                        <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                        <p className="text-lg md:text-xl">{slide.description}</p>
                        <button className={`px-6 py-2 rounded-lg mt-4 ${slide.btnBg}`}>
                            {index === 0 ? "Learn More" : index === 1 ? "Get Started" : index === 2 ? "Explore Now" : "Enroll Now"}
                        </button>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="btn btn-circle"
                >
                    ❮
                </button>
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="btn btn-circle"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default TopSlider;
