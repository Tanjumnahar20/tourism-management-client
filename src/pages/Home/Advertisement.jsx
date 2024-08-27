const Advertisement = () => {
  return (
    <div className="container bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-5 md:px-20 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-bold">
            Discover Amazing Deals on Your Next Adventure!
          </h2>
          <p className="mt-4 text-lg md:text-xl">
            Explore stunning destinations at unbeatable prices. Do not miss out on our exclusive offers for this season!
          </p>
        </div>
        <div className="md:w-1/3 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
