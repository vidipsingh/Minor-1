// SignIn.jsx
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import { useAuth0 } from "@auth0/auth0-react";
import SignUpImage from '../data/images/sign-up-image.jpg';

const SignIn = ({ setColorBlindness }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen">
      <Header2 setColorBlindness={setColorBlindness} />
      <div className="flex justify-center h-full">
        <div className="lg:w-[50%] bg-gray500">
          <img src={SignUpImage} alt="Sign In Image" className='w-full object-cover h-full '/>
        </div>
        <div className="w-full pl-[10%] lg:w-[40%] mt-[5%] h-[80%] border lg:border-none border-black">
          <h1 className="font-semibold text-lg mt-[5%]">Sign In Page</h1>
          <div className="flex flex-col lg:justify-center lg:items-center gap-[5%] mt-[3%]">
            {
              isAuthenticated ? 
              (<button onClick={(e) => logout()}>Logout</button>) :
              (<button 
                className="flex items-center gap-[0.5rem] text-lg border border-black pl-[0.5rem] pr-[0.5rem] rounded-md text-purple600" 
                onClick={(e) => loginWithRedirect()}
              >
                <FaGoogle /> Continue with Google
              </button>)
            }
            
            {/* OR Separator */}
            <h1 className="flex items-center justify-center mt-[3%]"><FiMinus /> OR <FiMinus /></h1>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <label>User name or email address</label>
              <input
                type="email"
                required
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

              {/* Submit Button */}
              <div> 
                <button type="submit" 
                        className='bg-purple600 bg-black my-2 hover:bg-purple-600 text-white pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-md'>
                        Sign in
                </button>

                {/* Link to Sign Up */}
                <h1>Don't have an account? 
                  <Link to="/sign-up" className="underline cursor-pointer hover:text-purple700"> Sign up</Link>
                </h1>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>  
  );
};

export default SignIn;