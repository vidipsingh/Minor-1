import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import newArrivalData from '../../data/newArrivalData.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-0 -ml-16 transform -translate-y-1/2 cursor-pointer bg-gray-200 hover:bg-gray-300  rounded-full w-8 h-8 flex justify-center items-center pb-1" onClick={onClick}>
     <span className="text-black">&lt;</span>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 right-12 transform -translate-y-1/2 cursor-pointer  bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center pb-1" onClick={onClick}>
    <span className="text-black">&gt;</span>
  </div>
);

const NewArrival1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div>
      <div className='flex flex-col sm:flex-row items-center  sm:ml-0 justify-center sm:mt-36 mt-16 gap-10 '>
        <div className='sm:w-2/5 w-5/6 bg-amber-400 pl-4  text-white rounded-lg shadow-lg hover:shadow-xl h-56'>
            <h3 className='mt-5 text-lg font-semibold'>Low Price</h3>
            <h1 className='mt-5 md:text-3xl sm:text-2xl font-bold sm:w-2/3 w-2/3 sm:mt-7 text-xl'>High Coziness</h1>
            <h4 className='mt-1.5 text-sm mb-4'>UPTO 50% OFF</h4>
            <Link to='/' className='lg:mt-56 underline cursor-pointer sm:mt-4 mt-4'>Explore Items</Link>
            {/* <img src={Image} alt="" /> */}
        </div>
        <div className='sm:w-2/5 w-5/6 bg-purple-500 pl-4 text-white rounded-lg shadow-lg hover:shadow-xl sm:h-56 h-60'>
            <h3 className='mt-5 text-lg font-semibold'>Beyoung Presents</h3>
            <h1 className='mt-5 sm:mt-7 text-3xl sm:text-2xl font-bold sm:w-2/3 w-2/3'>Breezy Summer Style</h1>
            <h4 className='mt-1.5 text-sm mb-4'>UPTO 50% OFF</h4>
            <Link to="/" className='sm:mt-56 mt-2 underline cursor-pointer'>Explore Items</Link>
        </div>
      </div>

      <div className='mt-11 mb-36 ml-24 pl-4'>
          <h1 className='text-2xl font-bold border-l-4 border-purple-500 pl-1 '>New Arrival</h1>
          <div className='mt-8 flex flex-col gap-8'>
          <Slider {...settings}>
            { newArrivalData && newArrivalData.map( data => { 
              return(
                <div className='w-20' key={ data.id }>
                  <img src={data.src} alt='' className='h-44 w-44 bg-gray-500 rounded-md shadow-md hover:shadow-lg object-cover' />
                  <h1 className='mt-3 font-semibold'>{data.text}</h1>
                </div>
              )
            }) }
            </Slider>
          </div>
        </div>
    </div>
  )
}

export default NewArrival1
