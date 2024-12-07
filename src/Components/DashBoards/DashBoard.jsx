import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useUsers from '../../Hooks/useUsers';
import useInstructors from '../../Hooks/useInstructors';
import useAdmin from '../../Hooks/useAdmin';


const DashBoard = ({ }) => {


  const [users] = useUsers();

  const [isInstructor] = useInstructors();

  const [isAdmin] = useAdmin();

  

  return (
    <div>
      <Navbar></Navbar>

      {/*  */}

{
  
}

      {/*  */}

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden bg-[#2b6777] text-white hover:bg-[#388087]"
          >
            Open Dashboard Menu
          </label>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          {/* {dashboardLinks} */}

{/*  */}

{
    isAdmin ? (
      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li>
          <Link to="/dashBoard/manageClasses">Manage Classes</Link>
        </li>
        <li>
          <Link to="/dashBoard/manageUsers">Manage Users</Link>
        </li>
        <li>
          <Link to="/dashBoard/currentAffairs"> Manage Current Affairs</Link>
        </li>
        <li>
          <Link to="/dashBoard/manageNotice"> Manage Notices</Link>
        </li>
        <li>
          <Link to="/dashBoard/applications"> View Registered Students</Link>
        </li>
        <li>
          <Link to="/dashBoard/answer">Answer Questions</Link>
        </li>
  
      </ul>
  ) : ( 
    isInstructor.instructor ? (
  
  
      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li>
          <Link to="/dashBoard/addClass">Add a Course</Link>
        </li>
        <li>
          <Link to="/dashBoard/myClasses">My Classes</Link>
        </li>
        <li>
          <Link to="/dashBoard/totalEnrolledStudents">Total Enrolled Students</Link>
        </li>
        <li>
          <Link to="/dashBoard/feedback">FeedBack</Link>
        </li>
        <li>
          <Link to="/dashBoard/notes">Upload Notes</Link>
        </li>
        <li>
          <Link to="/dashBoard/answerDoubts">Answer Doubts</Link>
        </li>
        <li>
          <Link to="/dashBoard/assignments">Upload Assigments</Link>
        </li>
      </ul>
    
    ) :  (
  
  
  
  
      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li>
          <Link to="/dashBoard/mySelectedClasses">My Selected Classes</Link>
        </li>
        <li>
          <Link to="/dashBoard/enrolled">My Enrolled Classes</Link>
        </li>
        <li>
          <Link to="/dashBoard/payment">Payment History</Link>
        </li>
        <li>
          <Link to="/dashBoard/viewNotes">Notes</Link>
        </li>
        <li>
          <Link to="/dashBoard/viewNotices">View All Notices</Link>
        </li>
        <li>
          <Link to="/dashBoard/doubts">Ask Your Doubts</Link>
        </li>
        <li>
          <Link to="/dashBoard/submitAssignments">Your Assignments</Link>
        </li>
      </ul>
    )
  )
}

{/*  */}




        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;



// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import useUsers from '../../Hooks/useUsers';
// import useInstructors from '../../Hooks/useInstructors';
// import useAdmin from '../../Hooks/useAdmin';

// const DashBoard = () => {
//   const [users] = useUsers();
//   const [isInstructor] = useInstructors();
//   const [isAdmin] = useAdmin();

//   return (
//     <div>
//       <Navbar />

//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col items-center justify-center">
//           <label
//             htmlFor="my-drawer-2"
//             className="btn btn-primary drawer-button lg:hidden bg-[#388087] text-white hover:bg-[#2b6777]"
//           >
//             Open Dashboard Menu
//           </label>
//           <Outlet />
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 h-full bg-[#F6F6F2] text-base-content">
//             {/* Admin Tabs */}
//             {isAdmin && (
//               <>
//                 <li className="text-[#388087] font-bold">Admin Controls</li>
//                 <li>
//                   <Link to="/dashBoard/manageClasses">Manage Classes</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/manageUsers">Manage Users</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/currentAffairs">Manage Current Affairs</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/manageNotice">Manage Notices</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/applications">View Registered Students</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/answer">Answer Questions</Link>
//                 </li>
//               </>
//             )}

//             {/* Instructor Tabs */}
//             {isInstructor && (
//               <>
//                 <li className="text-[#388087] font-bold">Instructor Tools</li>
//                 <li>
//                   <Link to="/dashBoard/addClass">Add a Course</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/myClasses">My Classes</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/totalEnrolledStudents">Total Enrolled Students</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/feedback">Feedback</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/notes">Upload Notes</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/answerDoubts">Answer Doubts</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/assignments">Upload Assignments</Link>
//                 </li>
//               </>
//             )}

//             {/* Student Tabs */}
//             {!isAdmin && !isInstructor && (
//               <>
//                 <li className="text-[#388087] font-bold">Student Dashboard</li>
//                 <li>
//                   <Link to="/dashBoard/mySelectedClasses">My Selected Classes</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/enrolled">My Enrolled Classes</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/payment">Payment History</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/viewNotes">Notes</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/viewNotices">View All Notices</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/doubts">Ask Your Doubts</Link>
//                 </li>
//                 <li>
//                   <Link to="/dashBoard/submitAssignments">Your Assignments</Link>
//                 </li>
//               </>
//             )}

//             {/* Common Logout Button */}
//             <li className="mt-6">
//               {/* <button className="btn w-full bg-[#2b6777] text-white hover:bg-[#388087]">
//                 Logout
//               </button> */}
//             </li>
//           </ul>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default DashBoard;
