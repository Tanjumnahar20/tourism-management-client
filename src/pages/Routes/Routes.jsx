
import {
    createBrowserRouter,
   
    
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Destinations from "../Destinations/Destinations";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Services from "../Services/Services";
import DestinationCard from "../Destinations/DestinationCard";
import DestinationCardDetails from "../Destinations/DestinationCardDetails";


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
          path:'/destination/:id',
          element:<DestinationCard></DestinationCard>,

        },
        {
          path:'destinationCard/:id',
          element:<DestinationCardDetails></DestinationCardDetails>,
          loader: ({ params }) => {
            console.log('Fetching data for ID:', params.id); // Debug log to check ID
            return fetch(`http://localhost:5000/places/${params.id}`);
          }

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