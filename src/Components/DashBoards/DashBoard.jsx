// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import useUsers from '../../Hooks/useUsers';
// import useInstructors from '../../Hooks/useInstructors';


// const DashBoard = ({  }) => {


// const [users] = useUsers();

// const [isInstructor] = useInstructors();


// console.log(isInstructor);

//   // const role = users[0].role;
//   const role = "admin"

//   let dashboardLinks;

//   if (role === 'student') {
//     dashboardLinks = (
//       <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//         <li>
//           <Link to="/dashBoard/mySelectedClasses">My Selected Classes</Link>
//         </li>
//         <li>
//           <Link to="/dashBoard/enrolled">My Enrolled Classes</Link>
//         </li>
//         <li>
//           <Link to="/dashBoard/payment">Payment</Link>
//         </li>
//       </ul>
//     );
//   } else if (role === 'instructor') {
//     dashboardLinks = (
//       <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//         <li>
//           <Link to="/dashBoard/addClass">Add a Class</Link>
//         </li>
//         <li>
//           <Link to="/dashBoard/myClasses">My Classes</Link>
//         </li>
//         <li>
//           <Link to="/dashBoard/totalEnrolledStudents">Total Enrolled Students</Link>
//         </li>
//         <li>
//           <Link to="/dashBoard/feedback">FeedBack</Link>
//         </li>
//       </ul>
//     );
//   } else if (role === 'admin') {
//     dashboardLinks = (
//       <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//         <li>
//           <Link to="/dashBoard/manageClasses">Manage Classes</Link>
//         </li>
//         <li>
//           <Link to="/dashBoard/manageUsers">Manage Users</Link>
//         </li>

//       </ul>
//     );
//   } else {
//     dashboardLinks = null; 
//   }

//   return (
//     <div>
//       <Navbar></Navbar>

//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col items-center justify-center">
//           <label
//             htmlFor="my-drawer-2"
//             className="btn btn-primary drawer-button lg:hidden"
//           >
//             Open Dashboard Menu
//           </label>
//           {/* Page content here */}
//           <Outlet></Outlet>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//           {dashboardLinks}
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default DashBoard;








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

  // const isAdmin = true;
  // console.log(isInstructor);
  // console.log(isAdmin);


  // const role = "admin"

  // let dashboardLinks;

  // if (isAdmin) {
  //   // dashboardLinks = (
  //     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
  //       <li>
  //         <Link to="/dashboard/manageClasses">Manage Classes</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/manageUsers">Manage Users</Link>
  //       </li>
  //     </ul>
  //   // );
  // }  if (isInstructor) {
  //   // dashboardLinks = (
  //     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
  //       <li>
  //         <Link to="/dashboard/addClass">Add a Class</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/myClasses">My Classes</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/totalEnrolledStudents">Total Enrolled Students</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/feedback">Feedback</Link>
  //       </li>
  //     </ul>
  //   // );
  // } if (!isAdmin || !isInstructor) { 
  //   // dashboardLinks = (
  //     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
  //       <li>
  //         <Link to="/dashboard/mySelectedClasses">My Selected Classes</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/enrolled">My Enrolled Classes</Link>
  //       </li>
  //       <li>
  //         <Link to="/dashboard/payment">Payment</Link>
  //       </li>
  //     </ul>
  //   // );
  // }
  

  // else {
  //   dashboardLinks = null; 
  // }



  // .....................................................

  
//   isAdmin ? (
     

//     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//       <li>
//         <Link to="/dashBoard/manageClasses">Manage Classes</Link>
//       </li>
//       <li>
//         <Link to="/dashBoard/manageUsers">Manage Users</Link>
//       </li>

//     </ul>
// ) : ( 
//   isInstructor ? (


//     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//       <li>
//         <Link to="/dashBoard/addClass">Add a Class</Link>
//       </li>
//       <li>
//         <Link to="/dashBoard/myClasses">My Classes</Link>
//       </li>
//       <li>
//         <Link to="/dashBoard/totalEnrolledStudents">Total Enrolled Students</Link>
//       </li>
//       <li>
//         <Link to="/dashBoard/feedback">FeedBack</Link>
//       </li>
//     </ul>
//   ) :  (




//     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//       <li>
//         <Link to="/dashBoard/mySelectedClasses">My Selected Classes</Link>
//       </li>
//       <li>
//         <Link to="/dashBoard/enrolled">My Enrolled Classes</Link>
//       </li>
//       <li>
//         <Link to="/dashBoard/payment">Payment</Link>
//       </li>
//     </ul>
//   )
  
  

  // .....................................................


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
            className="btn btn-primary drawer-button lg:hidden"
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
    isAdmin.admin ? (
     

      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li>
          <Link to="/dashBoard/manageClasses">Manage Classes</Link>
        </li>
        <li>
          <Link to="/dashBoard/manageUsers">Manage Users</Link>
        </li>
  
      </ul>
  ) : ( 
    isInstructor.instructor ? (
  
  
      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li>
          <Link to="/dashBoard/addClass">Add a Class</Link>
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
          <Link to="/dashBoard/payment">Payment</Link>
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
