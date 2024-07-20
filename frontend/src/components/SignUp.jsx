import React, { useState } from "react";
import Header1 from "./Header1";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

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
      <div className="flex h-full">
        <div className="w-1/2 bg-gray-500">
          {/* <img src={SigninImage} alt="Sign In Image" className='w-full object-cover h-full'/> */}
        </div>
        <div className="w-1/2">
          <h1 className="w-40 ml-28 font-semibold text-2xl mt-8">Sign Up</h1>
          <div className="flex flex-col justify-center items-center gap-8 mt-4">
            <button className="flex items-center gap-2 text-xl border border-black pl-24 pr-24 pt-1 pb-1 rounded-md text-purple-600">
              <FaGoogle className="text-black" /> Continue with Google
            </button>
            <button className="flex items-center gap-2 text-xl border border-black pl-24 pr-24 pt-1 pb-1 rounded-md text-purple-600">
              <FaTwitter className="text-black" /> Continue with Twitter
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col pl-28 mt-12">
              <h1 className=" ">Email address</h1>
            </div>
            <input
                type="email"
                className="border border-black w-2/3 h-8 rounded-md ml-28"
                onChange={(e) => setEmail(e.target.value)}
              />
            <div className="flex flex-col pl-28 mt-4">
              <h1 className="">Password</h1>
             
              <h1 className="text-xs font-medium">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </h1>
            </div>
            <input
                type="password"
                className="border border-black w-2/3 h-8 rounded-md ml-28"
                onChange={(e) => setPassword(e.target.value)}
              />

            <div className="pl-28 mt-4">
              <button
                to="/sign-in"
                className="bg-purple-600 text-white pl-10 pr-10 pt-2 pb-2  rounded-md"
              >
                Sign Up
              </button>
              <h1>
                Already have an account?{" "}
                <Link to="/sign-in" className="underline cursor-pointer">
                  Login
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
