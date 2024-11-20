/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";

const DestinationForHome = ({ratedPopularPlace}) => {
  const {destination, image,price,rating, id, _id, description}= ratedPopularPlace;
    const navigate = useNavigate();

    const handleBookings = (_id) =>{
      navigate(`destinationCard/${_id}`)

    }
 
  
    return (
   
      <div onClick={()=>handleBookings(_id)} className="card bg-base-100 w-70  shadow-xl ">
  <figure>
    <img
      src={image}
      alt={destination}
      className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"

       />
  <div className="absolute inset-0 bg-transparent bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center font-bold text-3xl text-sky-50">
        <h3 >{destination}</h3>
        <p className=" mt-2">${price}</p>
      </div>
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
      popular place
      <div className="badge badge-secondary">{rating}</div>
    </h2>
<small>{description}</small>   
              
  </div>
         

    </div>         
          
    );
  };
  
  export default DestinationForHome;
  