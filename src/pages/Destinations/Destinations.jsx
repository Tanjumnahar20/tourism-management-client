/* eslint-disable no-unused-vars */



import { useEffect, useState } from 'react';
import PopularPlace from '../Home/PopularPlace';
import coverImg from '../../assets/cover/egypt4.jpg'
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
  const [content, setContent] = useState('Select a destination to see details');
  const [tourPlaces, setPopularPlace] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();

  // const handleAccordionClick = (details, name) => {
  //   if (selectedDestination === name) {
  //     setSelectedDestination(null); // Toggle off
  //   } else {
  //     setContent(details);
  //     setSelectedDestination(name); // Toggle on
  //   }
  // };

  // useEffect(() => {
  //   fetch('data.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setPopularPlace(data);
  //     });
  // }, []);


  // const [loading,setLoading] = useAuth(true);

  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPopularPlace(data)})

  }, [])

  const handleDetails = () =>{
    console.log('clicked');
     navigate('/services')
  }

  return (

    <div>
      <Parallax className='cover-container '
        blur={{ min: -50, max: 40 }}
        bgImage={coverImg}

        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase cover-title"></h1>
              <p className="mb-5 text-5xl">Our <strong>destination</strong> list.</p>
            </div>
          </div>
        </div>
      </Parallax>

      <div className='mt-10'>
        <div className="container pb-8">
          <h2 className="text-5xl text-gray-800 border-l-2 border-gray-900 pl-8">
            <strong>Amazing</strong> Tours And Fun
            <br />
            Adventures <strong>Waiting For You</strong>
          </h2>
          <p className="text-lg text-gray-600 mt-5 pl-8 w-[50%]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
          </p>
        </div>

        <div onClick={handleDetails} className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 p-5 border-t-4 '>
          {
            tourPlaces.map((tourPlace, index) => (
              <div key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 `}>

                <img
                  src={tourPlace.image}
                  alt={tourPlace.name}
                  className="w-full h-64 object-cover"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold">
                      {tourPlace.
                        destination
                      }
                    </h3>
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </div>
   


  );
};

export default Destinations;

