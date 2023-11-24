import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Mainpage from "../Pages/Mainpage";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage></Mainpage>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path:'/',
            element : <Home></Home>,
        }
      ]
    },
  ]);