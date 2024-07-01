
import {
    createBrowserRouter,
   
    
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Destinations from "../Destinations/Destinations";
import SignUp from "../SignUp/SignUp";


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
        }
      ]
    },
  ]);
  

  

export default router;