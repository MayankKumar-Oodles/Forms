import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase-config";
 
import User from "./User";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[isloggedin , setIsLoggedin]=useState(false)

  const Signinuser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {console.log("Success") , setIsLoggedin(true),
       alert("Logged in Successfully");
    })
      .catch((err) => console.log(err));
  };
   
 
  return (
     <>
     {isloggedin ? (<User/>) :(
        <div className="bg-gray-800 h-screen flex justify-center items-center" >
        <div className="bg-gradient-to-b from-violet-300 to-gray-500  border-none flex  flex-col justify-start items-center py-7 px-5 rounded-2xl">
          <h1 className=" text-red-700 text-3xl font-bold">Login </h1>
          <div className="flex flex-col p-3 gap-2">
            <label
              htmlFor="email"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="border rounded-xl py-2 px-3"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
    
            <label
              htmlFor="password"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter password"
              className="border rounded-xl py-2 px-3"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
    
            <button
              onClick={Signinuser}
              className="border-none  my-2 py-1 bg-red-700 hover:bg-black rounded-xl text-white"
              
            >
              Login
            </button>
          </div>
        </div>
      </div>
     )}
     </>
    
  );
};

export default Signin;
