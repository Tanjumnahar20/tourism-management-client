// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Gallery = () => {
//   const navigate = useNavigate();
//   const [places, setPlaces] = useState([]);
 
//   //   {
//   //     name: "Majestic Mountains",
//   //     price: "$2000",
//   //     image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-6-550x1100.jpg",
//   //     size: "row-span-1",
//   //   },
//   //   {
//   //     name: "Sunny Beaches",
//   //     price: "$1500",
//   //     image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-2.jpg",
//   //     size: "col-span-2",
//   //   },
//   //   {
//   //     name: "Modern Cities",
//   //     price: "$1800",
//   //     image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-1-768x768.jpg",
//   //     size: "",
//   //   },
//   //   {
//   //     name: "Modern Cities",
//   //     price: "$1800",
//   //     image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-1-768x768.jpg",
//   //     size: "",
//   //   },
//   //   {
//   //     name: "Modern Cities",
//   //     price: "$1800",
//   //     image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-6-550x1100.jpg",
//   //     size: "",
//   //   },
//   //   {
//   //     name: "Lush Forests",
//   //     price: "$1200",
//   //     image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-6-550x1100.jpg",
//   //     size: "row-span-2 col-span-2",
//   //   },
//   //   {
//   //     name: "Desert Adventures",
//   //     price: "$1400",
//   //     image: "https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/tour-1-img-1-768x768.jpg",
//   //     size: "row-span-2",
//   //   },
//   // ];

//   useEffect(()=>{
//     fetch('https://tourism-maanagement-server.vercel.app/places')
//     .then(res=>res.json())
//     .then(data=>{setPlaces(data)
//       console.log("data", data);
//     })
//   },[])

//   const handleBookings =(_id)=>{
//       navigate(`destinationCard/${_id}`)
//       console.log("gallery working",_id);
//   }

//   return (
//     <div className="my-10">
//       <div className="container pb-8">
//         <h2 className="text-5xl text-gray-800 border-l-2 pl-8">
//             <strong>Amazing</strong> Tours And Fun
//         <br />
//             Adventures <strong>Waiting For You</strong>
//         </h2>
//         <p className="text-lg text-gray-600 mt-5 pl-8 w-[50%]">
//         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
//         </p>
//       </div>

//       <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {places.map((place, index) => (
//           <div
//             key={index}
//             className={`relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 ${place.size}`}
//           >
//             <img
//               onClick={()=>handleBookings(place._id)}
//               src={place.image}
//               alt={place.name}
//               className="w-full h-64 object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
//               <div className="text-center">
//                 <h3 className="text-white text-xl font-semibold">
//                   {place.name}
//                 </h3>
//                 <p className="text-white text-lg mt-2">${place.price}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuiltImg from "../../components/QuiltImg/QuiltImg";

const Gallery = () => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("https://tourism-maanagement-server.vercel.app/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        console.log("data", data);
      });
  }, []);

  const handleBookings = (_id) => {
    navigate(`destinationCard/${_id}`);
    console.log("gallery working", _id);
  };

  return (
    <div className="my-10">
      <div className="container pb-8">
        <h2 className="text-5xl text-gray-800 border-l-2 pl-8">
          <strong>Amazing</strong> Tours And Fun
          <br />
          Adventures <strong>Waiting For You</strong>
        </h2>
        <p className="text-lg text-gray-600 mt-5 pl-8 w-[50%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
        </p>
      </div>

      {/* Pass places and handleBookings to QuiltedImageList */}
      <QuiltImg places={places} handleBookings={handleBookings} />
    </div>
  );
};

export default Gallery;

