/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import useCartItem from "../../CustomHooks/useCartItem";
import axios from "axios";
import { Link } from "react-router-dom";

const Bookings = ({ place }) => {
  const [cart, refetch] = useCartItem();
  console.log("cart = ", cart);
  refetch()

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Destination</th>
              <th>Price</th>
              <th>No of Ticket</th>
              <th>Total Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.destination}</td>
                <td>{item.price}</td>
                <td>{item.numberOfTickets}</td>
                <td>{item.totalPrice}</td>
                <td>{item.date}</td>
                <td>
                  <Link   className="btn btn-sm btn-primary cursor-pointer">
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