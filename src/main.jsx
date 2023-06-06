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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    errorElement: <Error></Error>,
    children: [
      {
        path: "login",
        element: <Login></Login>

      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
