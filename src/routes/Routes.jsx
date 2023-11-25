import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Mainpage from "../Pages/Mainpage";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../login&reg/Login";
import Register from "../login&reg/Register";
import Contact from "../Pages/Contact";

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
          path : "/register",
          element : <Register></Register>,
         
      }
      ]
    },
  ]);