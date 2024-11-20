/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/autoplay";

import { EffectFlip, Pagination, Navigation, Autoplay, } from 'swiper/modules';
import './style.css';
import img1 from '../../assets/cover/c4.jpg'
import img2 from "../../assets/cover/c2.jpg"
import img3 from '../../assets/cover/c3.jpg'
import { useEffect, useState } from 'react';
import Advertisement from './Advertisement';
import SearchFilter from './SearchFilter';
import Gallery from './Gallery';
import DestinationForHome from './DestinationsForHome';
import './style.css'

const Home = () => {

  const [popularPlace, setPopularplace] = useState([])
  const [currentText, setCurrentText] = useState('welcome to slide1');
  const texts = [
    "Welcome to Slide 1",
    "Discover the beauty in Slide 2",
    "Adventure awaits in Slide 3",
  ];
  useEffect(() => {
    fetch('https://tourism-maanagement-server.vercel.app/places')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setPopularplace(data)
      })

  }, [])





  const ratedPopularPlaces = popularPlace.filter(ratedPlace => ratedPlace.rating === 4.7)

  const [animateClass, setAnimateClass] = useState('');

  const handleSlideChange = (swiper) => {
    setCurrentText(texts[swiper.activeIndex]);
    const animations = ['animated-text-slide1', 'animated-text-slide2', 'animated-text-slide3'];
    const animationIndex = swiper.activeIndex % animations.length;
    setAnimateClass(animations[animationIndex]);
  };

  return (
    <div className='w-full overflow-hidden'>
      <Helmet>
        <title>Home||</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
      <div className="relative">
        <Swiper
          effect={'flip'}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
          modules={[EffectFlip, Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative">
              <img className="w-full h-[500px] object-cover" src={img1} alt="Slide 1" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className={`text-yellow-500 text-2xl lg:text-6xl font-extrabold ${animateClass}`}>CHOOSE YOUR BEST DESTINATION</h2>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative">
              <img className="w-full h-[500px] object-cover" src={img2} alt="Slide 2" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className={`text-yellow-500 text-2xl lg:text-6xl font-extrabold ${animateClass}`}>Adventure awaits</h2>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative">
              <img className="w-full h-[500px] object-cover" src={img3} alt="Slide 3" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className={`text-yellow-500 text-2xl lg:text-6xl font-extrabold uppercase ${animateClass}`}>join to meet the new trip</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Advertisement />
      <SearchFilter />
      <Gallery />
      <div className="container pb-8">
        <h2 className="text-2xl lg:text-5xl text-gray-800 border-l-4 lg:pl-8 border-blue-500">
          Choose The <strong>Popular Destination</strong>
          <br />
          <strong>Just Right</strong> For Your Vacation
        </h2>
        <p className="text-lg text-gray-600 p-5 w-full lg:w-[50%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 px-8 ">
        {
          ratedPopularPlaces.map((ratedPopularPlace, index) => <DestinationForHome key={index}
            ratedPopularPlace={ratedPopularPlace}
          />)
        }
      </div>
      {/* <SpecialDeals /> */}
    </div>


  );
};
export default Home;
      

      



















