import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";


const Header2 = () => {
  const { logout } = useAuth0();

  return (
    <div className='flex justify-between h-14 items-center pt-4 pb-4 border-b border-gray-400 sm:gap-20 gap-20' >
    <div className='flex justify-between w-1/3 items-center  sm:w-1/4' >
    <Link to='/'> <h1 className='sm:text-2xl text-xl ml-4 sm:ml-16 font-bold'>Euphoria</h1> </Link> 
    </div>

    <div className='flex  md:justify-center lg:gap-10 md:w-2/4  sm:w-2/5  md:gap-2  sm:gap-2 text-md xl:gap-5  sm:justify-end  gap-2 w-36' >
        <button className='flex items-center'><FaEye className="w-6 h-6 cursor-pointer" /> <IoMdArrowDropdown className='cursor-pointer w-5 h-5' /></button>
        <h1 className='md:flex items-center sm:text-sm sm:hidden hidden cursor-pointer'>English(United States) <IoMdArrowDropdown className='cursor-pointer w-5 h-5' /></h1>
        <button className='border border-black lg:pl-10 lg:pr-10 pt-2 pb-2 rounded-md text-purple-600   md:pl-6 md:pr-6 md:pb-2   sm:pl-2 sm:pr-2 sm:pb-2 sm:text-sm pl-2 pr-2'>Login</button>
        <Link to="/sign-up" className='bg-purple-600 text-white lg:pl-10 lg:pr-10 pt-2 pb-2 rounded-md  hover:bg-black md:pl-6 md:pr-6 md:pb-2   sm:pl-2 sm:pr-2 sm:pb-2 sm:text-sm  pl-2 pr-2 '>Sign Up</Link>
    </div>
    {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='w-32 ml-4 mr-2 h-10 rounded-sm border border-black'>
      Log Out
    </button> */}
    </div>
  )
}

export default Header2
