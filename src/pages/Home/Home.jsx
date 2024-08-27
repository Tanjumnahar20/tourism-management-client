import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import './style.css';


import img1 from '../../assets/cover/pexels-nouman-yousuf-259134740-12604642.jpg'
import img2 from '../../assets/cover/dubai.jpg'
import img3 from '../../assets/cover/saint.jpg'
import { useEffect, useState } from 'react';
// import PopularPlace from './PopularPlace';
import Advertisement from './Advertisement';
import SearchFilter from './SearchFilter';
import Gallery from './Gallery';
import DestinationForHome from './DestinationsForHome';
import SpecialDeals from './SpecialDeals';

const Home = () => {

  const [popularPlace, setPopularplace] = useState([])
  // const [loading,setLoading] = useAuth(true);

  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPopularplace(data)})

  }, [])

  const totalPopularPlace = popularPlace.filter(ratedPlace=> ratedPlace.rating === 4.9)
  console.log(totalPopularPlace);

  return (
    <div>
      <Helmet>
        <title>Home||</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper   "  
      >
        <SwiperSlide><img className=' w-full h-[500px]'  src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px]' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[500px]' src={img3} alt="" /></SwiperSlide>
        {/* <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide> */}

      </Swiper>

      <Advertisement />
      <SearchFilter />
      <Gallery />
      <DestinationForHome />
      <SpecialDeals />

        <h2 className="text-3xl mt-9 mb-9 text-orange-400 text-center uppercase font-mono">---Popular places---</h2>
       <div className='flex mb-4 gap-4 justify-center'>
       {/* {
          totalPopularPlace.map(place=><PopularPlace
          key={place.id}
          place={place}
          ></PopularPlace>)
        } */}
       </div>
        
      




    </div>
  );
};

export default Home;