/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import coverImg from '../../assets/cover/egypt4.jpg'
import { Parallax } from "react-parallax";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import DestinationCardDetails from './DestinationCardDetails';

const DestinationCard = ({tourPlace, onClick}) => {
  // console.log('id specific', ids);
 // Destructure properties from tourPlace
 const {  id,destination, image, description, price, _id, imgUrl } = tourPlace || {};
//  console.log('ids found:', _id, tourPlace, description, destination);
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
     onClick={toggleDetails} // Toggle details on card click
     
     className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 cursor-pointer"
   >
    { image && <img src={image} alt={destination} className="w-full h-64 object-cover" />}

     <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
       <div className="text-center">
         <h3 className="text-white text-xl font-semibold">{destination}</h3>
         <p>{price}</p>
         <p>{_id}</p>
       </div>
     </div>

     {/* Details section - shown when the card is clicked */}
     {showDetails && (
      //  <div className="">
      //   {/* <Parallax
      //   className="cover-container" // Add your custom classes here
      //   bgImage={imgUrl} // Set your background image
      //   bgImageAlt="cover image" // Alternative text for the image
      //   strength={200} // Set the strength of the parallax effect (adjust as needed)
      // >
      //   <div className="hero min-h-screen flex items-center justify-center">
      //     <div className="hero-content text-center text-neutral-content">
      //       <div className="max-w-md">
      //         <h1 className="mb-5 text-5xl font-bold uppercase">Welcome to Our Destination</h1>
      //         <p className="mb-5 text-lg">Experience the best tours and adventures.</p>
      //       </div>
      //     </div>
      //   </div>
      // </Parallax> */}
      // <div className="container pb-8">
      //     <h2 className="text-5xl text-gray-800 border-l-2 border-gray-900 pl-8">
      //       <strong>Amazing</strong> Tours And Fun
      //       <br />
      //       Adventures <strong>Waiting For You</strong>
      //       <p>{price}</p>
      //     </h2>
      //     <p className="text-lg text-gray-600 mt-5 pl-8 w-[50%]">
      //       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
      //     </p>
      //   </div>
      //  </div>
      <DestinationCardDetails></DestinationCardDetails>
     )}
   </div>
 );
};

export default DestinationCard;