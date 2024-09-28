/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */


import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BillingDetails = () => {
  const location = useLocation();
  const { bookingData } = location.state || {};
  const [ticketNumber, setTicketNumber] = useState(bookingData?.numberOfTickets || 1);

  const navigate = useNavigate();
  const rawPrice = bookingData?.price || 0; // Get price or default to 0
  const price = typeof rawPrice === 'string' 
    ? parseFloat(rawPrice.replace(/[^0-9.]/g, "")) // Remove non-numeric characters if it's a string
    : rawPrice; 
  const totalPrice = price * ticketNumber;
  console.log("total bill", totalPrice);


  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);

  // Form fields states
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // Calculate total price dynamically

  const handleSaveAndContinue = async (e) => {
    e.preventDefault();

    try {
      const booking = {
        userId: bookingData?.id,
        name: bookingData?.name,
        email: bookingData?.email,
        numberOfTickets: ticketNumber,
        totalPrice:totalPrice,
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
      console.log('Booking result:', result);

      if (response.ok) {
        setIsPaymentEnabled(true);
       
        navigate('/payment');
      } else {
        console.error('Failed to create booking:', result);
      }
    } catch (error) {
      console.error('Error occurred while creating booking:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center bg-white shadow-lg rounded-lg p-8">
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Billing Details</h2>
          {bookingData ? (
            <form className="space-y-6" onSubmit={handleSaveAndContinue}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Static Fields */}
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

                {/* Editable Fields */}
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
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Book now
              </button>
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
              Name: <span className="font-medium">${bookingData?.name}</span>
            </p>
            <p className="text-sm text-gray-700">
              Email: <span className="font-medium">${bookingData.email}</span>
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

    {/* Select Payment Method Section */}
    {/* <div className="my-8 w-full lg:max-w-[50%] m-auto">
             <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Payment Method</h3>
             <div className="space-y-4">
               <button
                 className={`w-full py-2 rounded-md shadow-md border border-gray-300 ${
                   isPaymentEnabled
                     ? "bg-primary text-gray-700 hover:bg-gray-100 cursor-pointer"
                     : "bg-gray-100 text-gray-400 cursor-not-allowed"
                 }`}
                 disabled={!isPaymentEnabled}
               >
              <Link to='/payment'>  <button>Visa Card</button></Link>
               </button>
               <button
                 className={`w-full py-2 rounded-md shadow-md border border-gray-300 ${
                   isPaymentEnabled
                     ? "bg-primary text-gray-700 hover:bg-gray-100 cursor-pointer"
                     : "bg-gray-100 text-gray-400 cursor-not-allowed"
                 }`}
                 disabled={!isPaymentEnabled}
               >
                 PayPal
               </button>
               <button
                 className={`w-full py-2 rounded-md shadow-md border border-gray-300 ${
                   isPaymentEnabled
                     ? "bg-primary text-gray-700 hover:bg-gray-100 cursor-pointer"
                     : "bg-gray-100 text-gray-400 cursor-not-allowed"
                 }`}
                 disabled={!isPaymentEnabled}
               >
                 Bank Transfer
               </button>
              </div>
         </div> */}
    </div>
  );
};

export default BillingDetails;
