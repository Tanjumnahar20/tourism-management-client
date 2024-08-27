const DestinationForHome = () => {
    const places = [
      {
        name: "Majestic Mountains",
        price: "$2000",
        image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-6-550x1100.jpg",
      },
      {
        name: "Sunny Beaches",
        price: "$1500",
        image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-2.jpg",
      },
      {
        name: "Modern Cities",
        price: "$1800",
        image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-1-768x768.jpg",
      },
      {
        name: "Lush Forests",
        price: "$1200",
        image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-6-550x1100.jpg",
      },
      {
        name: "Desert Adventures",
        price: "$1400",
        image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-1-768x768.jpg",
      },
    ];
  
    return (
      <div className="my-10">
        <div className="container pb-8">
          <h2 className="text-5xl text-gray-800 border-l-4 pl-8 border-blue-500">
            Choose The <strong>Destination</strong>
            <br />
            <strong>Just Right</strong> For Your Vacation
          </h2>
          <p className="text-lg text-gray-600 mt-5 pl-8 w-[50%]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
          {places.map((place, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-4 py-6">
                  <h3 className="text-xl font-semibold">{place.name}</h3>
                  <p className="text-lg mt-2">{place.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DestinationForHome;
  