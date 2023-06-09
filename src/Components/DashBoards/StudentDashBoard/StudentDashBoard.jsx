import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const StudentDashBoard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

          {/* Page content here */}
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to="/dashBoard/myClasses">My Selected Classes</Link></li>
            <li><Link to="/dashBoard/enrolled">My Enrolled Classes</Link></li>
            <li><Link to="/dashBoard/payment">Payment</Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default StudentDashBoard;