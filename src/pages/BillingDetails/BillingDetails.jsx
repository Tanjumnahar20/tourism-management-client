import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BillingDetails = () => {
  const location = useLocation();
  const { bookingData } = location.state || {};
  const price = bookingData.price;
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ""));

  const [ticketNumber, setTicketNumber] = useState(bookingData.numberOfTickets);
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);

  const handleSaveAndContinue = () => {
    setIsPaymentEnabled(true);
  };

  // Calculate total price dynamically
  const totalPrice = numericPrice * ticketNumber;

  return (
    <div className="flex items-center justify-center p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Form Section */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Billing Details</h2>
          {bookingData ? (
            <form className="space-y-6">
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
                {/* Address Fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">County</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                {/* Editable Number of Tickets Field */}
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
              <button
                type="button"
                className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSaveAndContinue}
              >
                Save and Continue
              </button>
            </form>
          ) : (
            <p>No booking data available.</p>
          )}

          {/* Select Payment Method Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Payment Method</h3>
            <div className="space-y-4">
              <button
                className={`w-full py-2 rounded-md shadow-md border border-gray-300 ${
                  isPaymentEnabled
                    ? "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isPaymentEnabled}
              >
                Credit Card
              </button>
              <button
                className={`w-full py-2 rounded-md shadow-md border border-gray-300 ${
                  isPaymentEnabled
                    ? "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isPaymentEnabled}
              >
                PayPal
              </button>
              <button
                className={`w-full py-2 rounded-md shadow-md border border-gray-300 ${
                  isPaymentEnabled
                    ? "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!isPaymentEnabled}
              >
                Bank Transfer
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="md:w-80 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-700">
              Destination: <span className="font-medium">{bookingData?.destination}</span>
            </p>
            <p className="text-sm text-gray-700">
              Price per Ticket: <span className="font-medium">${numericPrice.toFixed(2)}</span>
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
  );
};

export default BillingDetails;
