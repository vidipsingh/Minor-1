import React, { useState } from "react";
import Header1 from "./Header1";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SignUpImage from '../data/images/sign-up-image.jpg';


const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("Current User", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', { email, password })
      .then((result) => {console.log(result)
        navigate('/sign-in')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen">
      <Header1 />
      <div className="flex justify-center h-full">
        <div className="lg:w-1/2 bg-gray-500">
          <img src={SignUpImage} alt="Sign In Image" className='w-full object-cover h-full '/>
        </div>
        <div className="w-3/4 pl-10 sm:pl-0 sm:w-3/4 lg:w-1/2 mt-2 h-5/6 border lg:border-none border-black">
          <h1 className="w-40 lg:ml-28 md:ml-14 font-semibold text-2xl mt-8">
            Sign Up Page
          </h1>
          <div className="flex flex-col lg:justify-center lg:items-center md:pl-12 xl:pl-1 gap-8 mt-4">
            {
              isAuthenticated ? <button onClick={(e) => logout()}>Logout</button> :
              <button className="flex items-center gap-2 text-sm md:text-xl border border-black xl:pl-12 xl:pr-36 xl:ml-1  lg:ml-10 md:pl-2 md:pr-2 pl-2 pr-8 pt-1 pb-1 rounded-md text-purple-600" onClick={(e) => loginWithRedirect()}>
              <FaGoogle className="text-black" /> Continue with Google
              </button>
            }
            
            {/* <button className="flex items-center gap-2 text-xl border border-black pl-24 pr-24 pt-1 pb-1 rounded-md text-purple-600">
              <FaTwitter className="text-black" /> Continue with Twitter
            </button> */}
          </div>

        <form onSubmit={handleSubmit} >
        <div className="flex flex-col md:ml-14 lg:ml-28 mt-4">
          <h1 className=" ">Email address</h1>
        </div>
        <input
                type="email"
                className="border border-black w-2/3 h-8 rounded-md md:ml-14 lg:ml-28 pl-2"
                onChange={(e) => setEmail(e.target.value)}
              />
        <div className="flex flex-col md:ml-14 lg:ml-28 mt-4">
          <h1 className="">Password</h1>
          
        </div>
        <input
                type="password"
                className="border border-black w-2/3 h-8 rounded-md md:ml-14 lg:ml-28 pl-2"
                onChange={(e) => setPassword(e.target.value)}
              />
              <h1 className="md:ml-14 lg:ml-28 text-xs">Use 8 or more characters with a mix of letters, numbers & symbols</h1>
        <div className="md:ml-14 lg:ml-28 mt-4"> 
        <button className='bg-purple-600 text-white pl-10 pr-10 pt-2 pb-2 rounded-md hover:bg-black'>Sign Up</button>
        <h1>Already have an account? <Link to="/sign-in" className="underline cursor-pointer hover:text-purple-700">Log in</Link></h1>
        </div>
        </form>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
