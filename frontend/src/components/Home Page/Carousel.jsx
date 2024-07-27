import React, {useState} from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs" 


const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.slides.length - 1 : slide - 1)
    }

  return (
    <div className='flex justify-center items-center w-screen relative'>
        <BsArrowLeftCircleFill className='absolute w-10 h-10 text-white left-4 cursor-pointer filter drop-shadow(0px 0px 5px #555)' onClick={prevSlide}/>
      {data.slides.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "shadow-md  h-52  sm:h-auto" : " shadow-md hidden" }/>
      })}
      <BsArrowRightCircleFill className='absolute w-10 h-10 text-white right-8 cursor-pointer filter drop-shadow(0px 0px 5px #555)' onClick={nextSlide}/>
      <span className='flex absolute bottom-4'>
        {data.slides.map((_, idx) =>  {
            return <button key={idx} onClick={() => setSlide(idx)} className={ slide === idx ? 'bg-white h-3 w-3 rounded-xl border-none outline-none shadow-xl mt-0 mb-0 ml-0.5 mr-0.5 cursor-pointer' : 'h-3 w-3 rounded-xl border-none outline-none shadow-xl mt-0 mb-0 ml-0.5 mr-0.5 cursor-pointer bg-gray-600'}></button>
        })}
      </span>
    </div>
  )
}

export default Carousel
