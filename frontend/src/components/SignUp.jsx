// SignUp.jsx
import React, { useState } from "react";
import Header1 from "./Header1";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SignUpImage from '../data/images/sign-up-image.jpg';

const SignUp = ({ setColorBlindness }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/register', { email, password })
      .then((result) => {
        navigate('/sign-in');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen">
      <Header1 setColorBlindness={setColorBlindness} />
      {/* Layout similar to SignIn component */}
      <div className="flex justify-center h-full">
        {/* Left Image Section */}
        <div className="lg:w-[50%] bg-gray500">
          <img src={SignUpImage} alt="Sign Up Image" className='w-full object-cover h-full '/>
        </div>

        {/* Right Form Section */}
        <div className="w-full pl-[10%] lg:w-[40%] mt-[5%] h-[80%] border lg:border-none border-black">
          {/* Heading */}
          <h1 className="font-semibold text-lg mt-[5%]">Sign Up Page</h1>

          {/* Form Container */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <label>Email address</label>
            <input
              type="email"
              required
              minLength={8}
              title="Use at least 8 characters with a mix of letters, numbers & symbols."
              className="border border-black w-full h-[35px] rounded-md pl-[0.5rem]"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input */}
            <label>Password</label>
            <input
              type="password"
              required
              minLength={8}
              title="Use at least 8 characters with a mix of letters, numbers & symbols."
              className="border border-black w-full h-[35px] rounded-md pl-[0.5rem]"
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* Password Hint */}
            Use at least 8 characters with a mix of letters, numbers & symbols.

            {/* Submit Button */}
            <div className=""> 
              {/* Submit Button */}
              <button type="submit" 
                        className='bg-purple600 bg-black my-2 hover:bg-purple-600 text-white pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-md'>
                        Sign Up
                </button>

              {/* Link to Login */}
              <h1>Already have an account? {" "}
              <Link to="/sign-in" 
                    className="underline cursor-pointer hover:text-purple700">Log in</Link> 
              </h1>
              
              
            </div>

          </form>

        </div>

      </div>

    </div>  
  );
};

export default SignUp;