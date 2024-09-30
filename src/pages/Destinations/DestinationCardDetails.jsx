/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useNavigate, } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaCalendarAlt, FaEnvelope, FaLock, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DestinationCardDetails = () => {
  const { description, destination, price, _id, image, attractions, review, duration,
    departureFrom, departureTime, returnTime, dressCode, included, notIncluded, rating } = useLoaderData() || {};
  // console.log("useLoaderData() = ", useLoaderData());
  const navigate = useNavigate();

  return (
    <div>
      {/* Full-Width Parallax Image Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">{destination}</h1>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto p-6 mt-6 flex gap-6">
        {/* Main Content (70%) */}
        <div className="w-full md:w-9/12 bg-white p-6 shadow-lg rounded-lg">

          <p className="text-black font-thin font-serif text-2xl mb-4">{description}</p>
          <br />
          {/* <div ><span className="text-lg text-yellow-300">Place will be visited:</span>
              <div className="font-serif text-gray-500 mt-4"><li >{attractions?.[0]} </li>
                <li>{attractions[1]}</li>
                <li>{attractions[2]}</li></div>
            </div> */}
          <br />

          <div className="overflow-x-auto ml-9 ">
            <table className="table items-center">
              {/* head */}
              <thead></thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td className="">Destiation</td>
                  <td></td>
                  <td className="text-gray-500">{destination}</td>
                </tr>
                {/* row 2 */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td>Departure from:</td>
                  <td></td>
                  <td className="text-gray-500">{departureFrom}</td>
                </tr>

                {/* row 3 */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td>Departure time:</td>
                  <td></td>
                  <td className="text-gray-500">{departureTime}</td>
                </tr>

                {/* row 4 */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td>Return time:</td>
                  <td></td>
                  <td className="text-gray-500">{returnTime}</td>
                </tr>

                {/* row 5*/}
                <tr className="hover:bg-orange-200 text-lg">
                  <td>Duration</td>
                  <td></td>
                  <td className="text-gray-500">{duration}</td>
                </tr>

                {/* row 6 */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td>Rating</td>
                  <td></td>
                  <td className="text-gray-500">{rating}</td>
                </tr>

                {/* row 7 */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td>Included</td>
                  <td></td>
                  <td className="text-gray-500">{included?.[0]},
                    {included?.[1]},
                    {included?.[2]}
                  </td>
                </tr>
                {/* {row 8} */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td> Not Included</td>
                  <td></td>
                  <td className="text-gray-500">{notIncluded?.map((ind, index) =>
                    index === notIncluded.length - 1 ? `${ind}.` : `${ind}, `
                  )}
                  </td>
                </tr>

                {/* row 9 */}
                <tr className="hover:bg-orange-200 text-lg">
                  <td>Dress code</td>
                  <td></td>
                  <td className="text-gray-500">{dressCode}
                  </td>
                </tr>

                {/* row 10 */}
                <tr className="hover:bg-orange-300 text-lg">
                  <td>Price</td>
                  <td></td>
                  <td className="text-gray-500">${price}

                  </td>
                </tr>

                {/* row 3 */}

              </tbody>
            </table>
          </div>
        </div>
        {/* Right Sidebar (30%) */}

        {/* <Sidebar></Sidebar> */}
        <Sidebar _id={_id} price={price} destination={destination} />
      </div>
    </div>
  );
};

export default DestinationCardDetails;
