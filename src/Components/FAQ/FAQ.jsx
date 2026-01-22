import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

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
        "We offer coaching for entrance exams of courses such as BA LLB (5 years), BA (all courses), and B.Com.",
    },
    {
      question: "Which universities should I primarily focus on getting into?",
      answer:
        "Students are guided for top-tier universities such as Aligarh Muslim University (AMU), Jamia Millia Islamia (JMI), Calcutta University (CU), Presidency University (PU), Delhi University (DU), and universities admitting through CUET and other national entrance exams.",
    },
    {
      question: "How can I take admission in your coaching institution?",
      answer:
        "You can take admission by contacting us via WhatsApp at 6294494027 or by calling us directly for counselling and guidance.",
    },
    {
      question: "Who is eligible to join APJEC coaching programs?",
      answer:
        "Students who have completed or are currently pursuing their +2 (Higher Secondary) and aspire to pursue higher education in law or other disciplines through entrance examinations are eligible.",
    },
    {
      question: "What are the coaching fees?",
      answer:
        "APJEC offers affordable coaching fees with scholarship programs for underprivileged yet meritorious students. For detailed fee structure, please contact us directly.",
    },
    {
      question: "Do you provide scholarship programs?",
      answer:
        "Yes, APJEC provides scholarships exclusively for underprivileged and meritorious students based on academic performance.",
    },
    {
      question: "What is the mode of instruction?",
      answer:
        "All classes are conducted online through live interactive sessions using Google Meet, along with regular mock tests and viva sessions.",
    },
    {
      question: "In which languages are the courses taught?",
      answer:
        "We offer Bengali-English and Hindi-English batches. All study materials are provided in English.",
    },
    {
      question: "How can students access study materials and resources?",
      answer:
        "Students receive regular online classes, mock tests, viva sessions, and comprehensive study materials as part of the coaching program.",
    },
    {
      question: "How can I stay updated with APJEC announcements?",
      answer:
        "You can follow APJEC on Instagram (@apjec.education) and Facebook (apjec.edu) for the latest updates and announcements.",
    },
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <div className="bg-F6F6F2 text-gray-800">

      {/* ===================== SEO ===================== */}
      <Helmet>
        <title>
          Frequently Asked Questions | CULET 2026 & Law Coaching – APJEC
        </title>

        <meta
          name="description"
          content="Find answers to common questions about CULET 2026 coaching, CU BA LLB admission, online law classes, fees, scholarships, and eligibility at APJEC."
        />

        <link
          rel="canonical"
          href="https://apjec.online/faq"
        />

        {/* ===================== FAQ SCHEMA ===================== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <div className="max-w-5xl mx-auto py-12 px-6">

        {/* ===================== H1 ===================== */}
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#2b6777" }}
        >
          Frequently Asked Questions – Law Coaching & CULET 2026
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
                    color:
                      index === activeIndex ? "#2b6777" : "#388087",
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
            style={{ backgroundColor: "#388087" }}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
