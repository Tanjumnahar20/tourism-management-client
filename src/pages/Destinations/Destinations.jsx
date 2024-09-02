/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import PopularPlace from '../Home/PopularPlace';
import coverImg from '../../assets/cover/egypt4.jpg'
import { Parallax } from 'react-parallax';
import { Link, useNavigate } from 'react-router-dom';
import DestinationCard from './DestinationCard';

const Destinations = () => {
  const [content, setContent] = useState('Select a destination to see details');
  const [tourPlaces, setPopularPlace] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => {
        setPopularPlace(data)})
        setLoading(false)

  }, [])

  const handleDetails = (tourPlace) =>{
    console.log('tour id:',tourPlace);
    if (tourPlace && tourPlace._id) {
      navigate(`/destinationCard/${tourPlace._id}`);
    }
  }

  if(loading){
    <p>Loading...</p>
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

        <div  >
       
       {/* <Link  to={`/destinationCard/${1}`}  className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 p-5 border-t-4 '> */}
       <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 p-5 border-t-4 '>
       {tourPlaces.length > 0 ? (
          tourPlaces?.map((tourPlace) => (
            <DestinationCard
              key={tourPlace._id}
              tourPlace={tourPlace}
              onClick={() => handleDetails(tourPlace)}
            />
          ))
        ) : (
          <p className="text-center text-red-500">Loading data or no data available.</p>
        )}
        </div>
       {/* </Link> */}
        
        </div>
      </div>
    </div>
   


  );
};

export default Destinations;

