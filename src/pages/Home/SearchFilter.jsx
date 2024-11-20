// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const SearchFilter = () => {
// //   const [locations, setLocation] = useState("");
// //   const [date, setDate] = useState("");
// //   const [travelType, setTravelType] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(()=>{
// //     fetch('https://tourism-maanagement-server.vercel.app/places')
// //     .then(res=>res.json())
// //     .then(data=>setLocation(data))
// //   })

// //   const handleSearch = () => {
// //     if(location){
// //       navigate ('/services')
// //     }
// //     // Logic for handling search/filtering based on user input
// //     console.log("Searching for:", { location, date, travelType });
// //   };

// //   return (
// //     <div className="my-8">
// //       <div className="container mx-auto bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-10 px-8 md:px-16 lg:px-24 shadow-xl rounded-xl transform transition duration-500 hover:scale-105">
// //         <h2 className="text-3xl font-bold mb-6 text-center">Find Your Next Journey</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// //           {/* Location Input */}
// //           <div>
// //             <label className="block text-sm font-semibold text-white mb-2">
// //               Location
// //             </label>
// //             {/* <input
// //               type="text"
// //               className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
// //               placeholder="Where to?"
// //               value={location}
// //               onChange={(e) => setLocation(e.target.value)}
// //             /> */}
// //               <select
// //               className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
// //               value={locations}
// //               onChange={(e) => setTravelType(e.target.value)}
// //             >
// //               <option value="" disabled>
// //                 Choose location
// //               </option>
// //               {
// //                 locations.map(location=> <option value="Business" key={location._id}>{location.destination}</option>)
// //               }
// //               {/* <option value="Adventure">Adventure</option>
// //               <option value="Leisure">Leisure</option>
// //               <option value="Business">Business</option>
// //               <option value="Family">Family</option> */}

// //             </select>
// //           </div>

// //           {/* Date Picker */}
// //           <div>
// //             <label className="block text-sm font-semibold text-white mb-2">
// //               Date
// //             </label>
// //             <input
// //               type="date"
// //               className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
// //               value={date}
// //               onChange={(e) => setDate(e.target.value)}
// //             />
// //           </div>

// //           {/* Travel Type Dropdown */}
// //           <div>
// //             <label className="block text-sm font-semibold text-white mb-2">
// //               Travel Type
// //             </label>
// //             <select
// //               className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
// //               value={travelType}
// //               onChange={(e) => setTravelType(e.target.value)}
// //             >
// //               <option value="" disabled>
// //                 Choose type
// //               </option>
// //               <option value="Adventure">Adventure</option>
// //               <option value="Leisure">Leisure</option>
// //               <option value="Business">Business</option>
// //               <option value="Family">Family</option>
// //             </select>
// //           </div>

// //           {/* Find Now Button */}
// //           <div className="flex items-end">
// //             <button
// //               onClick={handleSearch}
// //               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-5 rounded-md transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500"
// //             >
// //               Find Now
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchFilter;



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SearchFilter = () => {
//   const [locations, setLocations] = useState([]);  // Corrected state to hold an array
//   const [selectedLocation, setSelectedLocation] = useState("");  // For selected location
//   const [date, setDate] = useState("");
//   const [travelType, setTravelType] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('https://tourism-maanagement-server.vercel.app/places')
//       .then((res) => res.json())
//       .then((data) => setLocations(data))  // Set fetched locations to state
//       .catch((error) => console.error("Error fetching locations:", error));
//   }, []);  // Dependency array ensures the effect runs only once on mount

//   const handleSearch = (_id) => {
//     if (selectedLocation) {
//       navigate(`/destinationCard/${_id}`);
//     }
//     // Logic for handling search/filtering based on user input
//     console.log("Searching for:", { selectedLocation, date, travelType });
//   };

//   return (
//     <div className="my-8">
//       <div className="container mx-auto bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-10 px-8 md:px-16 lg:px-24 shadow-xl rounded-xl transform transition duration-500 hover:scale-105">
//         <h2 className="text-3xl font-bold mb-6 text-center">Find Your Next Journey</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
//           {/* Location Input */}
//           <div>
//             <label className="block text-sm font-semibold text-white mb-2">
//               Location
//             </label>
//             <select
//               className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
//               value={selectedLocation}
//               onChange={(e) => setSelectedLocation(e.target.value)}
//             >
//               <option value="" disabled>
//                 Choose location
//               </option>
//               {
//                 locations.map((location) => (
//                   <option value={location.destination} key={location._id}>
//                     {location.destination}
//                   </option>
//                 ))
//               }
//             </select>
//           </div>

//           {/* Date Picker */}
//           <div>
//             <label className="block text-sm font-semibold text-white mb-2">
//               Date
//             </label>
//             <input
//               type="date"
//               className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>

//           {/* Travel Type Dropdown */}
//           <div>
//             <label className="block text-sm font-semibold text-white mb-2">
//               Travel Type
//             </label>
//             <select
//               className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
//               value={travelType}
//               onChange={(e) => setTravelType(e.target.value)}
//             >
//               <option value="" disabled>
//                 Choose type
//               </option>
//               <option value="Adventure">Adventure</option>
//               <option value="Leisure">Leisure</option>
//               <option value="Business">Business</option>
//               <option value="Family">Family</option>
//             </select>
//           </div>

//           {/* Find Now Button */}
//           <div className="flex items-end">
//             <button
//               onClick={()=>handleSearch(locations._id)}
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-5 rounded-md transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500"
//             >
//               Find Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchFilter;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchFilter = () => {
  const [locations, setLocations] = useState([]); // Holds an array of location data
  const [selectedLocation, setSelectedLocation] = useState(""); // Stores selected location
  const [date, setDate] = useState("");
  const [travelType, setTravelType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://tourism-maanagement-server.vercel.app/places')
      .then((res) => res.json())
      .then((data) => setLocations(data))  // Fetch location data from API
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handleSearch = () => {
    // Find the selected location's data from the array of locations
    const selectedLocationData = locations.find(location => location.destination === selectedLocation);

    if (selectedLocationData && selectedLocationData._id) {
      navigate(`/destinationCard/${selectedLocationData._id}`); // Navigate to the details page by _id
    }
    console.log("Searching for:", { selectedLocation, date, travelType });
  };

  return (
    <div className="my-8">
      <div className="container mx-auto bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-10 px-8 md:px-16 lg:px-24 shadow-xl rounded-xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center">Find Your Next Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Location Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Location
            </label>
            <select
              className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="" disabled>
                Choose location
              </option>
              {
                locations.map((location) => (
                  <option value={location.destination} key={location._id}>
                    {location.destination}
                  </option>
                ))
              }
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Travel Type Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">
              Travel Type
            </label>
            <select
              className="w-full p-3 rounded-md bg-white text-gray-800 border-none focus:outline-none focus:ring-4 focus:ring-blue-500"
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
            >
              <option value="" disabled>
                Choose type
              </option>
              <option value="Adventure">Adventure</option>
              <option value="Leisure">Leisure</option>
              <option value="Business">Business</option>
              <option value="Family">Family</option>
            </select>
          </div>

          {/* Find Now Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}  // Trigger search and navigate
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-5 rounded-md transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500"
            >
              Find Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;


