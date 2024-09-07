/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import { FaCalendarAlt, FaEnvelope, FaLock, FaRegUser } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState } from "react";
// import useAuth from "../../CustomHooks/useAuth";

const Sidebar = ({ _id, price, destination }) => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  // const [user] = useAuth()

  // console.log("USER === ", user);

  const handleBookings = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const numberOfTickets = form.number.value;
    const date = startDate;

    // Construct an object with the form data
    const bookingData = {
      id: _id,
      name,
      email,
      numberOfTickets,
      price: price,
      destination: destination,
      date,
    };

    navigate("/billing-details", { state: { bookingData } });
  };

  return (
    <div className="w-full md:w-3/12 bg-gray-100 p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Travel Tips</h2>
      <ul className="mb-6">
        <li className="mb-2 text-gray-600">✔️ Pack light and bring only essentials.</li>
        <li className="mb-2 text-gray-600">✔️ Always keep a copy of your travel documents.</li>
        <li className="mb-2 text-gray-600">✔️ Make sure to check the weather forecast.</li>
        <li className="mb-2 text-gray-600">✔️ Learn a few local phrases if possible.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4 text-gray-800">Book this tour</h3>
      <form onSubmit={handleBookings}>
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2 border-neutral py-2 mb-2">
            <FaRegUser />
            <input type="text" name="name" id="name" placeholder="Name" className="bg-transparent border-none focus:outline-none placeholder-black " />
          </div>
          <div className="divider divider-neutral"></div>

          <div className="flex items-center gap-2 border-neutral py-2 mb-2">
            <FaEnvelope />
            <input type="email" name="email" placeholder="Email" className="bg-transparent border-none focus:outline-none placeholder-black " />
          </div>
          <div className="divider divider-neutral"></div>

          <div className="flex items-center gap-2 border-neutral py-2 mb-2">
            <FaLock />
            <input type="number" name="number" placeholder="Number of ticket" className="bg-transparent border-none focus:outline-none placeholder-black " />
          </div>

          <div className="divider divider-neutral"></div>
          <div className="flex items-center gap-2 border-neutral py-2 mb-2">
            <FaCalendarAlt className="" />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-transparent border-none focus:outline-none w-full placeholder-black"
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />
          </div>
          <div className="divider divider-neutral"></div>
        </div>
        <button type="submit" className="transition ease-in-out delay-150 w-full rounded p-4 bg-yellow-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300">
          Book now
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
