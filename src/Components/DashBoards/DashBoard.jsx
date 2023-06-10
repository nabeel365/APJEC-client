import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DashBoard = ({  }) => {


    const role = 'student'

  let dashboardLinks;

  if (role === 'student') {
    dashboardLinks = (
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
    );
  } else if (role === 'instructor') {
    dashboardLinks = (
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
    );
  } else if (role === 'admin') {
    dashboardLinks = (
      <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li>
          <Link to="/dashBoard/manageClasses">Manage Classes</Link>
        </li>
        <li>
          <Link to="/dashBoard/manageUsers">Manage Users</Link>
        </li>
       
      </ul>
    );
  } else {
    dashboardLinks = null; 
  }

  return (
    <div>
      <Navbar></Navbar>

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
          {dashboardLinks}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
