import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import LeafImage from '../../data/images/image6.jpg'

const SavingSection = () => {
  return (
    <div className='mt-11 mb-10 ml-24 pl-4 mr-20'>
    <h1 className='text-2xl font-bold border-l-4 border-purple-500 pl-2 '>Big Saving Zone</h1>
    <div className="grid grid-cols-3 gap-4 mt-8">
      <div className= "bg-sky-400 h-64 rounded-md shadow-lg hover:shadow-xl">
        <div className='mt-7 ml-5 text-zinc-100'>
            <p className='text-2xl font-bold w-24 '>Hawaiian Shirts</p>
            <p className='mt-2 mb-0.5 text-sm'>Dress up in summer vibe</p>
            <p className='text-base font-bold'>UPTO 50% OFF</p>
            <FaArrowDown className='ml-10 mt-4 mb-5 text-2xl'/>
            <button className='mt-0 border text-sm font-bold border-white pt-1 pb-1 pl-3 pr-3 rounded-md hover:text-black hover:border-black'>SHOP NOW</button>
        </div>
      </div>


      <div className="bg-pink-400 h-64 rounded-md shadow-lg hover:shadow-xl">
      <div className='mt-7 ml-40 mr-4 text-zinc-100 flex flex-col items-end'>
            <p className='text-2xl font-bold w-24 text-right '>Printed T-Shirts</p>
            <p className='mt-2 mb-0.5 text-sm'>New Designs Every Week</p>
            <p className='text-base font-bold'>UPTO 40% OFF</p>
            <FaArrowDown className='mr-10 mt-4 mb-5 text-2xl'/>
            <button className='mt-0 border text-sm font-bold border-white pt-1 pb-1 pl-3 pr-3 rounded-md hover:text-black hover:border-black'>SHOP NOW</button>
        </div>
      </div>

      <div className="bg-gray-200 h-64 rounded-md shadow-lg hover:shadow-xl">
      <div className='mt-7 ml-5 mr-4 text-black flex flex-col items-end'>
            <p className='text-2xl font-bold w-24 text-right '>Cargo Joggers</p>
            <p className='mt-2 mb-0.5 text-sm'>Move with style & comfort</p>
            <p className='text-base font-bold'>UPTO 50% OFF</p>
            <FaArrowDown className='mr-10 mt-4 mb-5 text-2xl'/>
            <button className='mt-0 border text-sm font-bold border-black pt-1 pb-1 pl-3 pr-3 rounded-md hover:text-gray-600 hover:border-gray-600'>SHOP NOW</button>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-2 gap-4">
      <div className="bg-gray-200 h- rounded-md shadow-lg hover:shadow-xl">
      <div className='mt-7 ml-5 mr-4 text-black flex flex-col items-end'>
            <p className='text-2xl font-bold w-24 text-right '>Urban Shirts</p>
            <p className='mt-2 mb-0.5 text-sm'>Live in Comfort</p>
            <p className='text-base font-bold'>UPTO 60% OFF</p>
            <FaArrowDown className='mr-10 mt-4 mb-5 text-2xl'/>
            <button className='mt-0 border text-sm font-bold border-black pt-1 pb-1 pl-3 pr-3 rounded-md hover:text-gray-600 hover:border-gray-600'>SHOP NOW</button>
        </div>
        </div>

        <div className="bg-gray-200 h-64 rounded-md shadow-lg hover:shadow-xl">
      <div className='mt-7 ml-5 mr-4 text-black flex flex-col items-end'>
            <p className='text-2xl font-bold w-28 text-right '>Oversized T-Shirts</p>
            <p className='mt-2 mb-0.5 text-sm'>Street Style Icon</p>
            <p className='text-base font-bold'>UPTO 60% OFF</p>
            <FaArrowDown className='mr-10 mt-4 mb-5 text-2xl'/>
            <button className='mt-0 border text-sm font-bold border-black pt-1 pb-1 pl-3 pr-3 rounded-md hover:text-gray-600 hover:border-gray-600'>SHOP NOW</button>
        </div>
        </div>
      </div>
    </div>

    <div className='flex mt-28 h-[500px] shadow-2xl mb-32'>
        <div className='w-1/2 relative bg-gray-500  rounded-l-lg '>
        <img src={LeafImage} alt="" className=" absolute object-cover h-full w-full opacity-70 rounded-l-lg" />
        <div className='absolute p-8 text-white top-0 left-0 right-0 bottom-0 flex flex-col justify-center '>
        <p className='text-3xl font-bold mr-20'>WE MADE YOUR EVERYDAY FASHION BETTER!</p>
        <p className='mt-4 mr-28'>In our journey to improve everyday fashion, euphoria presents EVERYDAY waer range - Comfortable & Affordable fashion 24/7</p>
        <button className='mt-8 w-32 pt-1 pb-1 font-semibold rounded-md bg-white text-black hover:text-white hover:bg-black'>Shop Now</button>
        </div>
        </div>
        <div className='w-1/2 bg-gray-600 rounded-r-lg'>
        </div>
    </div>
    </div>
  )
}

export default SavingSection
