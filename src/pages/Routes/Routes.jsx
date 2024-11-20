
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
import Sidebar from "../Destinations/Sidebar";
import SearchBar from "../../components/NavBar/SearchBar";
import BillingDetails from "../BillingDetails/BillingDetails";
// import Payment from "../Payment/Payment";
import Bookings from "../Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../Payment/PaymentHistory";


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
          path:'searcResults',
          element: <SearchBar></SearchBar>
        },
        {
          path:'destinationCard/:id',
          element:<DestinationCardDetails></DestinationCardDetails>,
          loader: ({ params }) => {
            return fetch(`https://tourism-maanagement-server.vercel.app/places/${params.id}`);
          },
          

        },
        {
         path:'sidebar/:id'   ,
         element:<Sidebar></Sidebar>,
         loader: ({params}) => fetch(`https://tourism-maanagement-server.vercel.app/places/${params.id}`)
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
        },
        {
          path:'billing-details',
          element:<BillingDetails></BillingDetails>
        },
       
        {
          path:'bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>
        },
        
      ]
    },
  ]);
  

  

export default router;