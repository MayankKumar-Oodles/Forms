import React, { useState } from "react";
import FirebaseServices from "../services/FirebaseServices";
import { useForm } from "react-hook-form";

const SignupModal = ({closeSignupModal}) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
 
  
  const { register, formState, reset ,handleSubmit} = form;
  const { errors } = formState;
  const signupuser= async (data)=>{
            
          //  console.log("signup user data ",data)
              await  FirebaseServices.signup(data.email,data.password).then((value)=>{
                //  console.log(value) 
                 alert("You successfully sign up")
                 reset()
                 
                }).catch((error)=>{
                  // console.log( "error msg",error.message) 
                  alert(error.message);
                  
                 })
                
  }
 
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 h-screen flex justify-center items-center bg-opacity-75">
        <div className="bg-gradient-to-b from-blue-300 to-indigo-500  flex flex-col justify-start items-start py-7 px-5  w-3/6 border-2 border-red-800  shadow-2xl  rounded-2xl">
          <h1 className=" text-red-700 text-3xl font-bold self-center">SignUp </h1>
          <form onSubmit={handleSubmit(signupuser)} className="flex flex-col w-full p-3 gap-2" noValidate>
            <label
              htmlFor="email"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
            
              placeholder="Enter Email"
              className="border rounded-xl py-1 px-3 text-lg"
           
              {...register("email", {
                required: true,
                validate: (email) => {
                  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                  if (regex.test(email)) {
                    return true;
                  } else {
                    return "Invalid Email !";
                  }
                },
              })}
            />
            <p className="text-yellow-900 text-sm " > {errors.email?.message} </p>

            <label
              htmlFor="password"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              
              placeholder="Enter password"
              className="border rounded-xl py-1 px-3 text-lg"
            
              {...register("password", {
                required: true,
                validate: (password) => {
                  var regex =
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                  if (regex.test(password)) {
                    return true;
                  } else {
                    return "Minimum eight characters, at least one letter, one number and one special character";
                  }
                },
              })}
            />
            <p className="text-yellow-900 text-sm ">{errors.password?.message} </p>
            <div className="flex justify-start items-center gap-3">
              <button  type="submit"
                className="border-none text-lg  my-2 py-1 px-2 bg-red-700 hover:bg-black rounded-md text-white"
                 
                
              >
                Signup
              </button>
              <button type="button"
                className="border-none text-lg  my-2 py-1 px-2 bg-red-700 hover:bg-black rounded-md text-white"
                onClick={closeSignupModal}
              >
                Close
              </button>
              </div>
             
           
            
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupModal;




