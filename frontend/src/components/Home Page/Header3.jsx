import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'; // Example icon
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


const Header3 = () => {
  return (
    <div className=' w-screen flex justify-center xl:gap-28 lg:gap-16 md:gap-10 sm:gap-20 gap-5 border-b-2 pt-2 pb-2'>
      <div className='lg:text-xl md:text-lg sm:font-bold font-semibold cursor-pointer'>Euphoria</div>
      <div className='md:pt-1 sm:hidden hidden md:flex'>
        <ul className='flex lg:gap-10 md:gap-3 text-gray-500 md:text-sm lg:text-base '>
            <li className='text-black hover:cursor-pointer font-bold'>Shop</li>
            <li className='hover:text-black hover:cursor-pointer hover:font-bold'>Men</li>
            <li className='hover:text-black hover:cursor-pointer hover:font-bold'>Women</li>
            <li className='hover:text-black hover:cursor-pointer hover:font-bold'>Combos</li>
            <li className='hover:text-black hover:cursor-pointer hover:font-bold'>Joggers</li>
        </ul>
        </div>
        <div className='flex items-center sm:gap-2 gap-1  bg-gray-200  lg:pt-1 lg:pb-1 pr-1 pl-2 rounded-md '>
        <CiSearch/>
        <input placeholder='SEARCH' className='bg-gray-200 w-24 sm:w-40'></input>
        </div>
        <div className='flex gap-2 sm:gap-4'>
            <button className='flex items-center'><FaEye className="w-6 h-6 cursor-pointer" /> <IoMdArrowDropdown className='cursor-pointer w-5 h-5' /></button>
            <div className='bg-gray-200 lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 md:pl-1 md:pr-1 p-1 rounded-sm'><FontAwesomeIcon icon={faHeart}  className='md:text-sm lg:text-base cursor-pointer' /></div>
            <div className='bg-gray-200 lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 md:pl-1 md:pr-1 p-1 rounded-sm'><FontAwesomeIcon icon={faUser}  className='md:text-sm lg:text-base cursor-pointer'/></div>
            <div className='bg-gray-200 lg:pt-1 lg:pb-1 lg:pl-2 lg:pr-2 md:pl-1 md:pr-1 p-1 rounded-sm'><FontAwesomeIcon icon={faCartShopping} className='md:text-sm lg:text-base cursor-pointer' /></div>
        </div>
      
    </div>
  )
}

export default Header3
