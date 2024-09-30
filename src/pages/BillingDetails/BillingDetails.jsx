/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Modal from 'react-modal';
import CheckOut from "../Payment/CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Api_Key);

Modal.setAppElement('#root'); // Ensure your root element has this ID in index.html

const BillingDetails = () => {
  const location = useLocation();
  const { bookingData } = location.state || {};
  const [ticketNumber, setTicketNumber] = useState(bookingData?.numberOfTickets || 1);
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [cart, setCart] = useState([]);

  const rawPrice = bookingData?.price || 0;
  const price = typeof rawPrice === 'string'
    ? parseFloat(rawPrice.replace(/[^0-9.]/g, ""))
    : rawPrice;
  const totalPrice = price * ticketNumber;

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isOpen, setisOpen] = useState(false);

  const handleSaveAndContinue = async (e) => {
    e.preventDefault();

    try {
      const booking = {
        userId: bookingData?.id,
        name: bookingData?.name,
        email: bookingData?.email,
        price: bookingData?.price,
        numberOfTickets: ticketNumber,
        totalPrice: totalPrice,
        destination: bookingData?.destination,
        date: bookingData?.date,
        address,
        city,
        zipCode,
        contactNumber,
        country,
      };

      const response = await fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });

      const result = await response.json();

      if (response.ok) {
        setIsPaymentEnabled(true);
        setCart(result);
        setisOpen(true);
      } else {
        console.error('Failed to create booking:', result);
      }
    } catch (error) {
      console.error('Error occurred while creating booking:', error);
    }
  };

  const closeModal = () => setisOpen(false);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center bg-white shadow-lg rounded-lg p-8">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Billing Details</h2>
            {bookingData ? (
              <form className="space-y-6" onSubmit={handleSaveAndContinue}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={bookingData.name}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                    <input
                      type="text"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Number of Tickets</label>
                    <input
                      type="number"
                      min="1"
                      value={ticketNumber}
                      onChange={(e) => setTicketNumber(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <input type="submit" value="Book now" className="w-full bg-orange-700 text-white p-5 text-xl" />
              </form>
            ) : (
              <p>No booking data available.</p>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="md:w-80 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-700">
                Name: <span className="font-medium">{bookingData?.name}</span>
              </p>
              <p className="text-sm text-gray-700">
                Email: <span className="font-medium">{bookingData.email}</span>
              </p>
              <p className="text-sm text-gray-700">
                Destination: <span className="font-medium">{bookingData?.destination}</span>
              </p>
              <p className="text-sm text-gray-700">
                Price per Ticket: <span className="font-medium">${price.toFixed(2)}</span>
              </p>
              <p className="text-sm text-gray-700">
                Number of Tickets: <span className="font-medium">{ticketNumber}</span>
              </p>
              <p className="text-sm text-gray-700">
                Total Price: <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Payment */}
      {isOpen && (
        <dialog className="modal" open>
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
            <p>{}</p>
            {isPaymentEnabled && cart?._id && (
              <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={totalPrice} />
              </Elements>
            )}
            <button onClick={() => setIsModalOpen(false)} className="mt-4 text-red-600">Close</button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default BillingDetails;

