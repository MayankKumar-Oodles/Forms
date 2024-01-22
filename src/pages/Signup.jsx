import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase-config";
import Signin from "./Signin";


const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const signupuser = async () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      setIsSignup(true), console.log(value);
      alert("you signup successfully");
      alert("You are redirecting to login page");
    });
  };

  return (
    <>
      {isSignup ? (
           <Signin/>
      ) : (
        <div className=" bg-gray-800 h-screen flex justify-center items-center">
          <div className="bg-gradient-to-b from-blue-300 to-indigo-500  flex  flex-col justify-start items-center py-7 px-5 border-none  rounded-xl">
            <h1 className=" text-red-700 text-3xl font-bold">SignUp </h1>
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
                onClick={signupuser}
                className="border-none  my-2 py-1 rounded-xl bg-red-700 hover:bg-black text-white"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
