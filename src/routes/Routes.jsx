import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Mainpage from "../Pages/Mainpage";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../login&reg/Login";
import Register from "../login&reg/Register";
import Contact from "../Pages/Contact";
import Community from "../Pages/Community";
import Addteacher from "../Pages/Addteacher";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage></Mainpage>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path:'/',
            element : <Home></Home>,
        },
        {
          path : "/login",
          element : <Login></Login>,
         
      } ,
      {
        path : "/contacts",
        element : <Contact></Contact>,
       
    } ,
    
    {
      path : "/community",
      element : <Community></Community>,
     
  } ,
      {
          path : "/register",
          element : <Register></Register>,
         
      },
      {
          path : "/teacher",
          element : <Addteacher></Addteacher>,
         
      }
      ]
    },
  ]);