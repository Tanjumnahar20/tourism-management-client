/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../CustomHooks/useAxios";
import useCartItem from "../../CustomHooks/useCartItem";

const Bookings = () => {
 const [cart] = useCartItem()
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  

  const handleButton = (cartId) => 
    console.log("cartid", cartId);{
    // navigate('/'); // Update the navigation if necessary
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Destination</th>
              <th>Price</th>
              <th>No of Ticket</th>
              <th>Total Price</th>
              <th>Date</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.destination}</td>
                <td>{item.price}</td>
                <td>{item.numberOfTickets}</td>
                <td>{item.totalPrice}</td>
                <td>{item.date}</td>
                <td>{item.email}</td>
                <td>
                  <Link onClick={() => handleButton(item._id)} className="btn btn-sm btn-primary cursor-pointer">
                    Payment
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
