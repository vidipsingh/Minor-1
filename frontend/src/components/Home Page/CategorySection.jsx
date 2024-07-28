import React from "react";
import mensData from '../../data/mensData.json';
import womensData from '../../data/womensData.json';
import logos from '../../data/logoData.json'
import { FaArrowRightLong } from "react-icons/fa6";


const CategorySection = () => {
  return (
    <>
    <div className="mt-8 mb-10 ml-24 pl-4 mr-20">
      <h1 className='text-2xl font-bold border-l-4 border-purple-500 pl-2 '>Categories For Men</h1>

      <div class="grid grid-cols-4 gap-4 mt-6 ">
        {mensData && mensData.map( data => {
          return (
            <div class="pl-0 pt-2 pr-2 pb-2" key={data.id}>
              <img src={data.src} alt='' className='h-52 w-56 bg-gray-500 rounded-md shadow-lg hover:shadow-xl object-cover cursor-pointer' />
              <h1 className='mt-3 font-semibold'>{data.text}</h1>
              <div className='flex items-center gap-28 cursor-pointer'>
              <p className="text-sm hover:font-semibold">Explore Now</p>
              <FaArrowRightLong className="hover:text-lg" />
              </div>
            </div>
          )
        })}
      </div>
    </div>


    <div className="mt-8 mb-10 ml-24 pl-4 mr-20">
      <h1 className='text-2xl font-bold border-l-4 border-purple-500 pl-2 '>Categories For Women</h1>

      <div class="grid grid-cols-4 gap-4 mt-6 ">
        {womensData && womensData.map( data => {
          return (
            <div class="pl-0 pt-2 pr-2 pb-2" key={data.id}>
              <img src={data.src} alt='' className='h-52 w-56 bg-gray-500 rounded-md shadow-lg hover:shadow-xl object-cover cursor-pointer' />
              <h1 className='mt-3 font-semibold'>{data.text}</h1>
              <div className='flex items-center gap-28 cursor-pointer'>
              <p className="text-sm hover:font-semibold">Explore Now</p>
              <FaArrowRightLong className="hover:text-lg" />
              </div>
            </div>
          )
        })}
      </div>

    </div>

    
    <div className="mt-8 mb-10 ml-24 pl-4 mr-20 bg-zinc-700 h-64 rounded-lg ">
      <div>
        <h1 className="text-white text-center text-4xl font-bold pt-6">Top Brands Deal</h1>
        <p className="text-white text-center  mt-6">Up To <span className="text-yellow-400">60%</span> off on brands</p>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        {
          logos && logos.map( data => {
            return(
              <div className="w-36 h-14 bg-white rounded-md overflow-hidden shadow-white shadow-sm cursor-pointer hover:shadow-md hover:shadow-white " key={data.id} >
                <img src={data.src} alt=""  className="h-full w-full object-cover object-center"/>
              </div>
            )
          })
        }
        
      </div>
    </div>
    </>
  );
};

export default CategorySection;
