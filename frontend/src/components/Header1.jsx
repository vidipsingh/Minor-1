import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";


const Header1 = () => {
  return (
    <div className='flex justify-between h-14 items-center pt-4 pb-4 border-b border-gray-400 ' >
    <div className='flex justify-between w-2/5 items-center' >
      <h1 className='text-2xl ml-16 font-bold'>Euphoria</h1>
      {/* <div className='flex gap-2 items-center bg-gray-200 pl-6 pt-4 pb-4 rounded-md w-30 h-10'>
      <CiSearch  className='w-5 h-5'/>
        <input type="text" placeholder='SEARCH' className='w-36 bg-gray-200' />
      </div> */}
    </div>

    <div className='flex  justify-center gap-10 w-2/4 text-md' >
        <h1 className='flex items-center'>English(United States) <IoMdArrowDropdown className='cursor-pointer w-5 h-5' /></h1>
        <button className='bg-purple-600 text-white pl-10 pr-10 rounded-md'>Login</button>
        <button className='border border-black pl-10 pr-10 pt-2 pb-2 rounded-md text-purple-600'>Sign Up</button>
    </div>
    </div>
  )
}

export default Header1
