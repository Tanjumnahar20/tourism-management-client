/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import coverImg from '../../assets/cover/egypt4.jpg'
import { Parallax } from "react-parallax";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import DestinationCardDetails from './DestinationCardDetails';

const DestinationCard = ({tourPlace, onClick}) => {
 
 const {  id,destination, image, description, price, _id, imgUrl } = tourPlace || {};
 const [showDetails, setShowDetails] = useState(false);
 const navigate = useNavigate();

 // Toggle the visibility of the details
 const toggleDetails = () => {
    if (_id) {
        console.log('toggle',_id);
        onClick();
        // navigate(`/destination/${_id}`);
        setShowDetails(!showDetails);
      }

    };
      // Check if tourPlace is defined, otherwise return null or loading state

    if (!tourPlace) {
        return <div className="text-red-500">Data is loading or unavailable.</div>;
      }


 return (
   <div
     onClick={toggleDetails} 
     
     className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 cursor-pointer"
   >
    { image && <img src={image} alt={destination} className="w-full h-64 object-cover" />}

     <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
       <div className="text-center font--bold text-3xl text-sky-50">
         <h3 className="">{destination}</h3>
         <p>${price}</p>
       </div>
     </div>

     {/* Details section - shown when the card is clicked */}
     {showDetails && (
    
      <DestinationCardDetails></DestinationCardDetails>
     )}
   </div>
 );
};

export default DestinationCard;