import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';
import AuthProvider from './Providers/AuthProvider';
import InstructorsPage from './Components/InstructorsPage/InstructorsPage';
import ClassesPage from './Components/ClassesPage/ClassesPage';

// tanstack query 
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MySelectedClasses from './Components/DashBoards/StudentDashBoard/MySelectedClasses';
import MyEnrolledClasses from './Components/DashBoards/StudentDashBoard/MyEnrolledClasses';
import Payment from './Components/DashBoards/StudentDashBoard/Payment/Payments';
import DashBoard from './Components/DashBoards/DashBoard';
import AddAClass from './Components/DashBoards/InstructotDashBoard/AddAClass';
import MyClasses from './Components/DashBoards/InstructotDashBoard/MyClasses';
import TotalEnrolledStudents from './Components/DashBoards/InstructotDashBoard/TotalEnrolledStudents';
import FeedBack from './Components/DashBoards/InstructotDashBoard/FeedBack';
import ManageClasses from './Components/DashBoards/AdminDashBoard/ManageClasses';
import ManageUsers from './Components/DashBoards/AdminDashBoard/ManageUsers';
import Pay from './Components/DashBoards/StudentDashBoard/Payment/Pay';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import InstructorRoute from './Routes/InstructorRoute';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Layout></Layout>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "instructors",
        element: <InstructorsPage></InstructorsPage>
      },
      {
        path: "classes",
        element: <ClassesPage></ClassesPage>
      },
      // {
      //   path: "dashboard",
      //   element: <StudentDashBoard></StudentDashBoard>
      // }
    ]
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "mySelectedClasses",
        element: <PrivateRoute><MySelectedClasses></MySelectedClasses></PrivateRoute>
      },
      {
        path: "enrolled",
        element: <PrivateRoute><MyEnrolledClasses></MyEnrolledClasses></PrivateRoute>
      },
      {
        path: "payment",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
      },
      {
        path: "pay/:id",
        element: <Pay></Pay> ,
      },
      {
        path: "addClass",
        element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
      },
      {
        path: "myClasses" ,
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: "totalEnrolledStudents" ,
        element: <TotalEnrolledStudents></TotalEnrolledStudents>
      },
      {
        path: "feedback",
        element: <FeedBack></FeedBack>
      },
      {
        path: "manageClasses" ,
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: "manageUsers" ,
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>

    <RouterProvider router={router} />

    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
