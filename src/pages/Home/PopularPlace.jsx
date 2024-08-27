/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PopularPlace = ({place}) => {

  const { description,id, review, destination,image} = place;
  console.log(image);
   
   

    return (
<div className="w-[1000px] mb-2 border border-red-100 ">
<div className="card lg:card-side bg-base-100 shadow-xl h-[380px]">
  <figure className="">
    <img className="w-[300px] h-[280px]"
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body text-center mt-12">
    <h2 className="card-title"> {destination} </h2>
    <h2> {description}  </h2>
    <br />
    <h2 className="text-bold font-serif" >Review: <small className="text-red-600 font-serif ">{review}</small></h2>

    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-warning">      <Link to="/services" className="text-red-600">Details</Link>
      </button>
    </div>
  </div>
</div>
</div>
    );
};

export default PopularPlace;

