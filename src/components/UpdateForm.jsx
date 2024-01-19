import React, { useState } from 'react';
import {useForm } from 'react-hook-form';
import EmployeeServices from '../services/EmployeeServices';


const UpdateForm = ({data}) => {
    const [formData , setFormData]=useState(data)
     
    const form = useForm({
      defaultValues:formData,
      mode:"onChange",
    })
    const {register ,reset, handleSubmit  } =form

    const onSubmit =(u)=>{
         
        setFormData(u)
        // console.log("Data after update" ,u)
        EmployeeServices.updateData(u.id ,u)
        reset(formData)
       
    }
  
    
  return (
    <form  className="max-w-md mx-auto mt-8" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
              type="text"
              id="name"
              placeholder='Your Name'
              className="border border-gray-300 p-2 rounded w-full"
               {...register("name" , {onChange:(e)=>{e.target.value}})}
            />            
      </div>
            

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
         
          placeholder="Your Email"
          className="border border-gray-300 p-2 rounded w-full"
          {...register("email")}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
      
          placeholder="Your Phone"
          className="border border-gray-300 p-2 rounded w-full"
          {...register("phone" )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
          Gender
        </label>
        <select
          id="gender"
      
          placeholder="Your Gender"
          className="border border-gray-300 p-2 rounded w-full"
          {...register("gender"  )}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateForm;
