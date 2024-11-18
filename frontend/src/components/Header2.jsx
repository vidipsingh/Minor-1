// Header2.jsx
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header2 = ({ setColorBlindness }) => {
  const { logout } = useAuth0();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleColorBlindnessChange = (type) => {
    setColorBlindness(type);
    setIsDropdownOpen(false);
  };

  return (
    <div className='flex justify-between h-14 items-center pt-4 pb-4 border-b border-gray-400 sm:gap-20 gap-20'>
      <div className='flex justify-between w-1/3 items-center sm:w-1/4'>
        <Link to='/'> 
          <h1 className='sm:text-2xl text-xl ml-4 sm:ml-16 font-bold'>ColorSight</h1> 
        </Link> 
      </div>

      <div className='flex md:justify-center lg:gap-10 md:w-2/4 sm:w-2/5 md:gap=2 sm:gap=2 text-md xl:gap=5 sm:justify-end gap=2 w=36'>
        
        {/* Eye Button for Color Blindness Options */}
        <button className='flex items-center' onClick={toggleDropdown}>
          <FaEye className="w-6 h-6 cursor-pointer" />
          <IoMdArrowDropdown className='cursor-pointer w=5 h=5' />
        </button>

        {/* Dropdown Menu for Color Blindness Options */}
        {isDropdownOpen && (
          <div className='flex flex-col px-9 py-6 absolute w-auto gap-4 mr-72 mt-10 bg-gray-300 h-auto bg-gray=400 shadow-xl z=50'>
            <button onClick={() => handleColorBlindnessChange('normal')} className='text-xl cursor-pointer hover:text-black font-semibold'>Normal</button>
            <button onClick={() => handleColorBlindnessChange('tritanopia')} className='text-xl cursor-pointer hover:text-black font-semibold'>Tritanopia</button>
            <button onClick={() => handleColorBlindnessChange('protanopia')} className='text-xl cursor-pointer hover:text-black font-semibold'>Protanopia</button>
            <button onClick={() => handleColorBlindnessChange('deuteranopia')} className='text-xl cursor-pointer hover:text-black font-semibold'>Deuteranopia</button>
            <button onClick={() => handleColorBlindnessChange('achromatopsia')} className='text-xl cursor-pointer hover:text-black font-semibold'>Achromatopsia</button>
            <button onClick={() => handleColorBlindnessChange('monochromacy')} className='text-xl cursor-pointer hover:text-black font-semibold'>Monochromacy</button>
          </div>
        )}
        
        {/* Login and Sign Up Buttons */}
        <Link to="/sign-in" className=' border-black border-[1px] text-black lg:pl-10 lg:pr-10 rounded-md pt-2  md:pl-6 md:pr-6 md:pb-2 sm:pl-2 sm:pr-2 sm:pb-2 sm:text-sm pl-2 pr-2'>Login</Link>
        <Link to="/sign-up" className='border bg-purple-600 hover:bg-black text-white border-black lg:pl-10 lg:pr-10 pt-2 pb-2 rounded-md md:pl=6 md:pr=6 md:pb=2 sm=pl=2 sm=pr=2 sm=pb=2 sm=text-sm pl=2 pr=2'>Sign Up</Link>
      </div>
    </div>
  );
}

export default Header2;