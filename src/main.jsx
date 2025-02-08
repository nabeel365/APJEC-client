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
import ManageCurrentAffairs from './Components/DashBoards/AdminDashBoard/ManageCurrentAffairs';
import UploadNotes from './Components/DashBoards/InstructotDashBoard/UploadNotes';
import ViewNotes from './Components/DashBoards/ViewNotes';
import CurrentAffairsList from './Components/CurrentAffairs/CurrentAffairsList';
import AdminNoticeManagement from './Components/DashBoards/AdminDashBoard/AdminNoticeManagement';
import StudentNoticePage from './Components/DashBoards/StudentDashBoard/StudentNoticePage';
import AskDoubts from './Components/DashBoards/StudentDashBoard/AskDoubts';
import AnswerDoubts from './Components/DashBoards/InstructotDashBoard/AnswerDoubts';
import AdminApplicationsPage from './Components/DashBoards/AdminDashBoard/AdminApplicationsPage';
import HelpSection from './Components/DashBoards/StudentDashBoard/HelpSection';
import AnswerSection from './Components/DashBoards/AdminDashBoard/AnswerSection';
import InstructorAssignmentPage from './Components/DashBoards/InstructotDashBoard/InstructorAssignmentPage';
import StudentAssignmentPage from './Components/DashBoards/StudentDashBoard/StudentAssignmentPage';
import NoticeSection from './Components/Notice/NoticeSection';
import AboutUs from './Components/HomePage/AboutUs';
import Career from './Components/Team/Career';
import Admissions from './Components/HomePage/Admissions';
// import TermsAndConditions from './Components/Home/TermsAndConditions';
import UploadPYQ from './Components/DashBoards/InstructotDashBoard/UploadPYQ';
import ViewPYQs from './Components/DashBoards/StudentDashBoard/ViewPYQs';
import RefundPolicy from './Components/Footer/Refund';
import PrivacyPolicy from './Components/Footer/Privacy';
import TermsAndConditions from './Components/Footer/Terms';


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
      {
        path: "current",
        element: <CurrentAffairsList></CurrentAffairsList>
      },
      {
        path: "help",
        element: <HelpSection></HelpSection>
      },
      {
        path: "viewNotices",
        element: <NoticeSection></NoticeSection>
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "career",
        element: <Career></Career>
      },
      {
        path: "admissions",
        element: <Admissions></Admissions>
      },
      // {
      //   path: "/terms",
      //   element: <TermsAndConditions></TermsAndConditions>
      // },
      {
        path: "viewPYQs",
        element: <ViewPYQs></ViewPYQs>
      },
      {
        path: "terms",
        element: <TermsAndConditions />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "refund",
        element: <RefundPolicy />,
      },
    ]
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    loader: async ()=>{
      const email = localStorage.getItem("email");
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/admin/${email}`);
      const data = await res.json();
      return data.admin;
    }, 
    
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
        element: <AdminRoute><AddAClass></AddAClass></AdminRoute>
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
      {
        path: "currentAffairs",
        element: <ManageCurrentAffairs></ManageCurrentAffairs>
      },
      {
        path: "applications",
        element: <AdminApplicationsPage></AdminApplicationsPage>
      },
      {
        path: "manageNotice",
        element: <AdminRoute> <AdminNoticeManagement></AdminNoticeManagement> </AdminRoute>
      },
      {
        path: "notes",
        element: <UploadNotes></UploadNotes>
      },
      {
        path: "viewNotes",
        element: <ViewNotes></ViewNotes>
      },
      {
        path: "viewNotices",
        element: <StudentNoticePage></StudentNoticePage>
      },
      {
        path: "doubts",
        element: <AskDoubts></AskDoubts>
      },
      {
        path: "answerDoubts",
        element: <AnswerDoubts></AnswerDoubts>
      },
      {
        path: "answer",
        element: <AnswerSection></AnswerSection>
      },
      {
        path: "assignments",
        element : <InstructorAssignmentPage></InstructorAssignmentPage>
      },
      {
        path: "submitAssignments",
        element: <StudentAssignmentPage></StudentAssignmentPage>

      },
      {
        path: "pyqs",
        element: <UploadPYQ></UploadPYQ>

      },
      {
        path: "viewPYQs",
        element: <ViewPYQs></ViewPYQs>
      }
      
      
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
