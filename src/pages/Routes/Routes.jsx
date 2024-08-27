
import {
    createBrowserRouter,
   
    
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Destinations from "../Destinations/Destinations";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Services from "../Services/Services";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/destinations',
          element:<Destinations></Destinations>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'services',
          element:<Services></Services>
        }
      ]
    },
  ]);
  

  

export default router;