import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What courses do you offer at your coaching center?",
      answer:
        "We offer coaching for Entrance exams of courses such as BA LLB (5 years), BA (all courses), and B.Com.",
    },
    {
      question: "Which universities should I primarily focus on getting into?",
      answer:
        "We encourage the students to pursue a course in the Top tier Universities in our nation such as Aligarh Muslim University (AMU), Jamia Millia Islamia (JMI), Calcutta University (CU), Presidency University (PU), and Delhi University (DU) also for the Universities which are dedicated to admitting students through an universal Entrance test such as CUET, MHCET or Independent entrance examinations conducted by Universities across the nation.",
    },
    {
      question: "How can I take admission in your coaching institution?",
      answer:
        "You can take admission by contacting us via WhatsApp at 6294494027 or by calling us at 7029928412.",
    },
    {
      question: "Who is eligible to join, and what are the eligibility criteria for admission?",
      answer:
        "Any student who has already completed their +2 (higher secondary) or is currently pursuing their +2 session and wishes to pursue higher studies at any of such top-tier Universities or they are looking out for a well rounded coaching and guidance for Entrance tests could enroll themselves in our coaching institution.",
    },
    {
      question: "What are the coaching fees?",
      answer: "We have made an attempt to stand by the Underprivileged students coming from the marginally weaker section of society by letting them avail the Scholarship program and by offering reasonably affordable fees for our courses.For further information about coaching fees, please contact us through WhatsApp at 6294494027 or by calling 7029928412.",
    },
    {
      question: "Do you have any scholarship programs?",
      answer: "Yes, we offer scholarships exclusively for underprivileged yet meritorious students who have consistently performed well in their studies."
    },
    {
      question: "What is the mode of instruction? ",
      answer: "The mode of instruction will be entirely online; classes will be conducted in a live format using Google Meet. The course will also include frequent mock tests and Viva through Online mode."
    },
    {
      question: " In which languages are the courses taught?",
      answer: "We have two batches. The Bengali batch primarily focused on teaching the students in Bengali as well as in english. And the hindi batch in which we primarily emphasize on teaching in Hindi and English. It is important to note that All the study materials which will be provided are in English."
    },
    {
      question: "I'm interested in the course, but I'm not sure if APJEC is right for me. To whom can I speak to about this?",
      answer: "The question arises that why Should We choose APJEC? Well We have made an attempt to not only guide the Underprivileged students towards a better future by enrolling them in our scholarship program but also let the fortunate ones get access to proper guidance and personalized coaching at a very affordable cost. Our institution and faculty are committed to admitting students based on their intellectual ability, regardless of their background. We value in invoking their interest and guiding them towards a better future. You are being requested to reach out for more information or any question regarding our courses or Career related queries. You can contact us via WhatsApp at 6294494027 or by calling 7029928412."
    },
    {
      question: " How could students access the study materials and resources offered by your Courses?",
      answer: "We provide study materials and resources as part of our overall coaching program. Each of our aspirants will have access to regular online coaching, Mock tests, VIVA and sufficient study materials. We are committed in ensuring that they are well equipped with the necessary tools to excel in their preparation."
    },
    {
      question: "How can I stay updated with the latest information and updates from the APJEC? ",
      answer: "You can follow us on Instagram and Facebook page to stay informed about our latest news, events, and updates. • Instagram at apjec.education • Facebook at apjec.edu"
    }
    
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className=" bg-F6F6F2 text-gray-800">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#2b6777" }}
        >
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="space-y-6">
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-l-4 rounded-lg shadow-md"
              style={{
                borderColor:
                  index === activeIndex ? "#388087" : "#C2EDCE",
              }}
            >
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
                onClick={() => handleToggle(index)}
                style={{
                  backgroundColor:
                    index === activeIndex ? "#BADFE7" : "#F6F6F2",
                }}
              >
                <h2
                  className="text-lg font-medium"
                  style={{
                    color: index === activeIndex ? "#2b6777" : "#388087",
                  }}
                >
                  {faq.question}
                </h2>
                <span
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {index === activeIndex && (
                <div className="px-6 py-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-md text-white"
            style={{
              backgroundColor: "#388087",
            }}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
