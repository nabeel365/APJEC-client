import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useUsers from '../../Hooks/useUsers';
import useInstructors from '../../Hooks/useInstructors';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
  const [users] = useUsers();
  const [isInstructor] = useInstructors();
  const [isAdmin] = useAdmin();

  return (
    <div className="bg-[#F6F6F2] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="drawer lg:drawer-open flex-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* Main Content Area */}
        <div className="drawer-content flex flex-col">
          {/* Dashboard Cards */}
          <div className="p-4 grid grid-cols-3 gap-4  ">
            {isAdmin && (
              <>
                <DashboardCard link="/dashBoard/addClass" title="Add a Course" icon="📚" />
                <DashboardCard link="/dashBoard/manageClasses" title="Manage Classes" icon="🛠" />
                <DashboardCard link="/dashBoard/manageUsers" title="Manage Users" icon="👥" />
                <DashboardCard link="/dashBoard/currentAffairs" title="Manage Current Affairs" icon="📰" />
                <DashboardCard link="/dashBoard/manageNotice" title="Manage Notices" icon="📢" />
                <DashboardCard link="/dashBoard/applications" title="Registered Students" icon="✅" />
                <DashboardCard link="/dashBoard/answer" title="Answer Questions" icon="💬" />
              </>
            )}

            {isInstructor.instructor && (
              <>
                <DashboardCard link="/dashBoard/myClasses" title="My Classes" icon="📘" />
                <DashboardCard link="/dashBoard/totalEnrolledStudents" title="Total Enrolled Students" icon="🎓" />
                <DashboardCard link="/dashBoard/feedback" title="Feedback" icon="📝" />
                <DashboardCard link="/dashBoard/notes" title="Upload Notes" icon="📤" />
                <DashboardCard link="/dashBoard/answerDoubts" title="Answer Doubts" icon="❓" />
                <DashboardCard link="/dashBoard/assignments" title="Upload Assignments" icon="📂" />
                <DashboardCard link="/dashBoard/pyqs" title="Upload PYQs" icon="📜" />


              </>
            )}

            {!isAdmin && !isInstructor.instructor && (
              <>
                <DashboardCard link="/dashBoard/mySelectedClasses" title="My Selected Courses" icon="📋" />
                <DashboardCard link="/dashBoard/enrolled" title="My Enrolled Courses" icon="🎟" />
                <DashboardCard link="/dashBoard/payment" title="Payment History" icon="💳" />
                <DashboardCard link="/dashBoard/viewNotes" title="Notes" icon="📄" />
                <DashboardCard link="/dashBoard/viewNotices" title="View Notices" icon="📃" />
                <DashboardCard link="/dashBoard/doubts" title="Ask Doubts" icon="🤔" />
                <DashboardCard link="/dashBoard/viewPYQs" title="PYQs" icon="🤔" />
                <DashboardCard link="/dashBoard/submitAssignments" title="Your Assignments" icon="📥" />
                <DashboardCard
                  link="https://apjec.onlinetestpanel.com/#login"
                  title="Mock Test Login"
                  icon="🖥"
                  external
                />
              </>
            )}
          </div>

          {/* Outlet Section */}
          <div className="flex-grow-3 mt-4">
            <Outlet />
          </div>
        </div>

        {/* Drawer Side */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-1" className=""></label>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const DashboardCard = ({ link, title, icon, external }) => (
  <div className="bg-[#BADFE7] hover:bg-[#C2EDCE] transition-all duration-300 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 p-2 md:p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
    {external ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-xs sm:text-sm md:text-base font-semibold text-[#2b6777]"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2">{icon}</span>
        {title}
      </a>
    ) : (
      <Link to={link} className="block text-xs sm:text-sm md:text-base font-semibold text-[#2b6777]">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2">{icon}</span>
        {title}
      </Link>
    )}
  </div>
);

export default DashBoard;
