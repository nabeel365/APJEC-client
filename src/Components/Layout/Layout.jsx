import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSlider from '../HomePage/TopSlider';
import CustomerReview from '../HomePage/CustomerReview';
import PopularClasses from '../HomePage/PopularClasses';
import PopularInstructors from '../HomePage/PopularInstructors';
import { Fade, Slide } from 'react-awesome-reveal';
import NoticeSection from '../Notice/NoticeSection';
import TeamPage from '../Team/TeamPage';
import Testimonials from '../Testimonials/Testimonials';
import CurrentAffairsList from '../CurrentAffairs/CurrentAffairsList';
import FAQ from '../FAQ/FAQ';
import NoticeModal from '../Notice/NoticeModal';
import ThreeCards from '../HomePage/ThreeCards';
import { Helmet } from "react-helmet-async";

const Layout = () => {
  return (
    <div>

      {/* ===================== SEO : HOME PAGE ===================== */}
      <Helmet>
        <title>
          Calcutta University Law Entrance Test (CULET) 2026 Coaching – APJEC
        </title>

        <meta
          name="description"
          content="APJ Abdul Kalam Education Centre (APJEC) offers expert coaching for Calcutta University Law Entrance Test (CULET) 2026. Get complete guidance for CU BA LLB admission, syllabus, exam pattern, PYQs and mock tests."
        />

        <link rel="canonical" href="https://apjec.online/home" />
      </Helmet>

      {/* ===================== H1 (SEO REQUIRED, VISUALLY HIDDEN) ===================== */}
      <h1 style={{ position: "absolute", left: "-9999px", top: "auto" }}>
        Calcutta University Law Entrance Test (CULET) 2026 Coaching in West Bengal
      </h1>

      <br />

      {/* ===================== HERO SECTION ===================== */}
      <Slide direction="left">
        <TopSlider />
      </Slide>

      <NoticeModal />

      <br />

      {/* ===================== NOTICES ===================== */}
      <NoticeSection />

      <br />

      {/* ===================== THREE CARDS ===================== */}
      <ThreeCards />

      <br />

      {/* ===================== TEAM ===================== */}
      <TeamPage />

      <br />

      {/* ===================== TESTIMONIALS ===================== */}
      <Testimonials />

      {/* ===================== FAQ (IMPORTANT FOR SEO) ===================== */}
      <FAQ />

    </div>
  );
};

export default Layout;
