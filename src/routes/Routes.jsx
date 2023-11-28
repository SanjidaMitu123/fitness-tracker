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
import Trainer from "../Pages/Trainer";
import Trainerdetails from "../Pages/Trainerdetails";
import Addclasses from "../Pages/Addclasses";
import Classes from "../Pages/Classes";
import Classdetails from "../Pages/Classdetails";
import Reviews from "../Pages/Reviews";
import PrivateRoute from "./PrivateRoute";
import Bookclass from "../Pages/Bookclass";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage></Mainpage>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path:'/',
            element : <Home></Home>,
            loader : () => fetch('http://localhost:5000/teacher')
          
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
        path : "/review",
        element : <Reviews></Reviews>,
       
    },
      {
          path : "/teacher",
          element : <PrivateRoute><Trainer></Trainer></PrivateRoute>,
          loader : () => fetch('http://localhost:5000/teacher')
         
      },{
        path : "/class",
        element : <PrivateRoute><Classes></Classes></PrivateRoute>,
        loader : () => fetch('http://localhost:5000/classes')
       
    },
      {
          path : "/addteacher",
          element : <PrivateRoute><Addteacher></Addteacher></PrivateRoute>,
         
      },
      {
          path : "/addclass",
          element : <PrivateRoute><Addclasses></Addclasses></PrivateRoute>,
         
      },

      {
        
        path : "/teacher/:_id",
        element : <PrivateRoute><Trainerdetails></Trainerdetails></PrivateRoute>,
        loader : () => fetch('http://localhost:5000/teacher')
         
      } ,

      {
        
        path : "/classes/:_id",
        element : <PrivateRoute><Classdetails></Classdetails></PrivateRoute>,
        loader : () => fetch('http://localhost:5000/classes')
         
      } ,
        {
        
        path : "/bookclasses/:_id",
        element : <PrivateRoute><Bookclass></Bookclass></PrivateRoute>,
        loader : () => fetch('http://localhost:5000/classes')
         
      }
      ]
    },
  ]);