import React, { Component } from "react";
import Slider from "react-slick";
import limelightData from '../../data/limelightData.json';
import feedbackData from '../../data/feedbackData.json'

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-0 -ml-16 transform -translate-y-1/2 cursor-pointer bg-gray-200 hover:bg-gray-300  rounded-full w-8 h-8 flex justify-center items-center pb-1" onClick={onClick}>
     <span className="text-black">&lt;</span>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 cursor-pointer  bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex justify-center items-center pb-1" onClick={onClick}>
    <span className="text-black">&gt;</span>
  </div>
);


const FeedbackSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
       <div className="mt-8 mb-10 ml-24 pl-4 mr-20">
      <h1 className='text-2xl font-bold border-l-4 border-purple-500 pl-2 '>In the Limelight</h1>

      <div class="grid grid-cols-4 gap-4 mt-6 ">
        {limelightData && limelightData.map( data => {
          return (
            <div class="pl-0 pt-2 pr-2 pb-2" key={data.id}>
              <img src={data.src} alt='' className='h-60 w-56 bg-gray-500 rounded-md shadow-lg hover:shadow-xl object-cover cursor-pointer' />
              <h1 className='mt-3 font-semibold'>{data.text}</h1>
              <div className='flex items-center gap-24 cursor-pointer'>
              <p className="text-sm">{data.desc}</p>
              <div className='bg-gray-300 w-14 h-6 mb-2  text-center rounded-md'>
                <p className='text-sm font-semibold items-center'>${data.price}</p>
              </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>

      <div className="mt-12 mb-10 ml-24 pl-4 mr-20">
      <h1 className='text-2xl font-bold border-l-4 border-purple-500 pl-2 '>Feeback</h1>

      <Slider {...settings} className="mt-8" >
        {feedbackData && feedbackData.map( data => {
          return(
          <div className="flex flex-col items-center justify-center mx-2">
          <div className="h-56 w-80 bg-white border border-black pt-4 pl-4 rounded-md">
            <img src={data.src} alt="" className="w-14 h-14  bg-gray-300 object-cover"/>
            <h1 className="text-xl font-semibold mt-2">{data.name}</h1>
            <p className="text-sm mt-3">{data.desc}</p>
          </div>
        </div>
       ) })}
      </Slider>

      </div>

    </div>
  )
}

export default FeedbackSection
