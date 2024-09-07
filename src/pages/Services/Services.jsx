
import  { useState } from "react";
import { FaCreditCard, FaCalendarCheck, FaCalculator, FaRegCreditCard } from "react-icons/fa";

const Service = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Guided City Tour", price: 100, count: 0 },
    { id: 2, name: "Mountain Hiking", price: 200, count: 0 },
    { id: 3, name: "Beach Resort Stay", price: 300, count: 0 },
  ]);
  
  const [total, setTotal] = useState(0);

  const handleCountChange = (id, increment) => {
    const updatedServices = services.map((service) => {
      if (service.id === id) {
        const newCount = service.count + (increment ? 1 : -1);
        return { ...service, count: newCount >= 0 ? newCount : 0 };
      }
      return service;
    });
    setServices(updatedServices);
    calculateTotal(updatedServices);
  };

  const calculateTotal = (services) => {
    const totalAmount = services.reduce(
      (acc, service) => acc + service.price * service.count,
      0
    );
    setTotal(totalAmount);
  };

  const handlePayment = () => {
    alert("Payment Successful! Thank you for your purchase.");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-4 border rounded shadow-md flex flex-col items-start bg-white"
          >
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-600">${service.price} per service</p>
            <div className="flex items-center mt-4">
              <button
                onClick={() => handleCountChange(service.id, true)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                +
              </button>
              <span className="mx-2">{service.count}</span>
              <button
                onClick={() => handleCountChange(service.id, false)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">Total:</span>
          <span className="text-2xl font-bold">${total}</span>
        </div>
        <button
          onClick={handlePayment}
          className="mt-4 flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        >
          <FaRegCreditCard className="mr-2" /> Pay Now
        </button>
      </div>
    </div>
  );
};

export default Service;
