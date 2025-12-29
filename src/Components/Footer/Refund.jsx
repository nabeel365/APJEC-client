import React, { useEffect } from "react";

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when the page loads
  }, []);

  return (
    <div className="p-10 bg-[#C2EDCE] text-[#2b6777]">
      <h1 className="text-3xl font-bold border-b-2 border-[#388087] pb-2">
        Refund & Cancellation Policy
      </h1>

      <p className="mt-4">
        <strong>APJ Abdul Kalam Education Centre</strong>
      </p>

      <p className="mt-2">
        This Refund & Cancellation Policy governs all payments made to APJ Abdul
        Kalam Education Centre for any course, batch, mock test series,
        registration form, online program, mentoring service, or related
        educational offering.
      </p>

      <p className="mt-2">
        By making any payment, the student or parent agrees to be bound by this
        policy.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        1. General No-Refund Policy
      </h2>
      <p className="mt-2">
        All fees paid to APJ Abdul Kalam Education Centre are non-refundable and
        non-transferable under any circumstances.
      </p>
      <p className="mt-2">
        Once a student has enrolled, registered, or gained access to any
        service, no refund shall be issued, irrespective of:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Change of mind</li>
        <li>Personal reasons</li>
        <li>Non-attendance of classes</li>
        <li>Academic performance</li>
        <li>Technical issues from the user’s end</li>
        <li>Schedule changes</li>
        <li>Course dissatisfaction</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">
        2. Registration Form Fees
      </h2>
      <p className="mt-2">
        Registration fees, application fees, or enrollment charges are strictly
        non-refundable once paid.
      </p>
      <p className="mt-2">
        No refund shall be provided after successful submission of the
        registration form.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        3. Online Classes, Batches & Mentoring Programs
      </h2>
      <p className="mt-2">
        Fees paid for any online class, live batch, recorded course, group
        mentoring program, or academic batch are non-refundable.
      </p>
      <p className="mt-2">
        No refund shall be granted against cancellation, withdrawal,
        discontinuation, or non-participation from any batch at any stage.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        4. Mock Test Series
      </h2>
      <p className="mt-2">
        Fees paid for any mock test series (including Super 120 or any other test
        series) are non-refundable.
      </p>
      <p className="mt-2">
        No refund shall be granted once access to the mock test or test portal is
        provided.
      </p>
      <p className="mt-2">
        Cancellation of participation by the student will not entitle the
        student to any refund.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        5. Cancellation by the Institute
      </h2>
      <p className="mt-2">
        In case of cancellation, postponement, or rescheduling of any class,
        batch, or mock test by the institute, students shall be informed through
        official communication channels.
      </p>
      <p className="mt-2">
        Such changes shall not entitle the student to any refund.
      </p>

      <h2 className="text-xl font-semibold mt-6">
        6. Payment Queries
      </h2>
      <p className="mt-2">
        For any payment-related queries or clarifications, students may contact:
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

      <h2 className="text-xl font-semibold mt-6">
        7. Final Decision
      </h2>
      <p className="mt-2">
        The decision of APJ Abdul Kalam Education Centre regarding refunds and
        cancellations shall be final and binding on all students and parents.
      </p>
    </div>
  );
};

export default RefundPolicy;
