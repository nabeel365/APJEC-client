import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when the page loads
  }, []);

  return (
    <div className="p-10 bg-[#F6F6F2] text-[#2b6777]">
      <h1 className="text-3xl font-bold border-b-2 border-[#388087] pb-2">
        Terms & Conditions
      </h1>

      <p className="mt-4">
        These Terms & Conditions (“Terms”) govern:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>
          the use of our website:{" "}
          <a
            href="https://www.apjec.online"
            className="text-[#388087]"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.apjec.online
          </a>
        </li>
        <li>
          any products or services offered by APJ Abdul Kalam Education Centre
          (“Company”, “We”, “Us”, “Our”), including services provided through
          applications, websites, SD cards, tablets, or any other storage or
          transmitting devices (collectively referred to as “Services”).
        </li>
      </ul>

      <p className="mt-4">
        These Terms constitute a legally binding agreement between APJ Abdul Kalam
        Education Centre and its users (“User”, “You”, “Your”).
      </p>

      <p className="mt-4">
        Please read these Terms and the Company’s Privacy Policy carefully before
        registering with us or using the website, services, or products. In case
        of any conflict between these Terms and any other policy related to the
        website, services, or products, these Terms shall prevail.
      </p>

      <p className="mt-4">
        Your access to, browsing of, registration on, or use of the Website,
        Services, or Products (with or without payment or subscription)
        signifies your unconditional acceptance of these Terms and your
        agreement to be legally bound by them.
      </p>

      <p className="mt-4">
        If you do not agree with these Terms or the Privacy Policy, please do not
        access or use the Website, Services, or Products. Any access granted
        through registration or subscription is strictly non-transferable.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        Communication to Students
      </h2>
      <ul className="list-disc pl-6 mt-2">
        <li>
          In the event of any class cancellation, rescheduling, or changes in the
          program schedule, students shall be informed through email, SMS, or
          updates on the official website.
        </li>
        <li>
          Students are responsible for regularly checking communications and
          updates provided by the institute.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        Student Feedback & Grievance Redressal
      </h2>
      <ul className="list-disc pl-6 mt-2">
        <li>
          To continuously improve the quality of services, APJ Abdul Kalam
          Education Centre actively seeks and values feedback from students.
        </li>
        <li>
          Students or parents may approach the institute with their queries,
          concerns, or grievances for guidance and assistance through the
          designated communication channels.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        Declaration by the Student
      </h2>
      <ul className="list-disc pl-6 mt-2">
        <li>
          I hereby declare that I have read and understood the above Terms &
          Conditions and am aware of the services provided by APJ Abdul Kalam
          Education Centre.
        </li>
        <li>
          I understand that the student’s academic performance depends upon
          consistent participation, discipline, and personal effort.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Customer Care</h2>
      <p className="mt-2">
        We strive to provide you with a smooth and satisfactory experience. In
        case of any issues or queries, please contact us at:
      </p>
      <p className="mt-1">
        📧{" "}
        <a
          href="mailto:apjec.education@gmail.com"
          className="text-[#388087]"
        >
          apjec.education@gmail.com
        </a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
