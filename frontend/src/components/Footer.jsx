import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className='w-screen h-72 bg-gray-700  text-center'>
            <div className='text-white flex justify-around gap-8 text-lg py-6 text-start '>
                <div>
                    <h1 className='font-bold hover:text-gray-200 cursor-pointer'>Need Help</h1>
                    <p className='cursor-pointer hover:text-gray-300'>Contact Us</p>
                    <p className='cursor-pointer hover:text-gray-300'>Track Order</p>
                    <p className='cursor-pointer hover:text-gray-300'>Returns & Refunds</p>
                    <p className='cursor-pointer hover:text-gray-300'>FAQ's</p>
                    <p className='cursor-pointer hover:text-gray-300'>Career</p>
                </div>
                <div>
                    <h1 className='font-bold hover:text-gray-200 cursor-pointer'>Company</h1>
                    <p className='cursor-pointer hover:text-gray-300'>About Us</p>
                    <p className='cursor-pointer hover:text-gray-300'>Media</p>
                </div>
                <div>
                    <h1 className='font-bold hover:text-gray-200 cursor-pointer'>More Info</h1>
                    <p className='cursor-pointer hover:text-gray-300'>Terms and Conditions</p>
                    <p className='cursor-pointer hover:text-gray-300'>Privacy Policy</p>
                    <p className='cursor-pointer hover:text-gray-300'>Shipping Policy</p>
                </div>
            </div>
            <div>
                <p className='text-white mt-7'>Copyright &copy; {currentYear} Euphoria Pvt Ltd. All rights reserved.</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
