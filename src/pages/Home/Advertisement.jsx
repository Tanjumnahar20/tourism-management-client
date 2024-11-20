
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <div className="container w-[90%] lg:w-full mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-6 px-4 md:py-10 md:px-20 shadow-lg m-3 md:m-5 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-xl md:text-4xl font-bold leading-snug">
            Discover Amazing Deals on Your Next Adventure!
          </h2>
          <p className="mt-4 text-base md:text-xl">
            Explore stunning destinations at unbeatable prices. Do not miss out on our exclusive offers for this season!
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <Link to='/destinations'>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 ease-in-out">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;

