import React, { useState } from 'react';
import {useForm } from 'react-hook-form';
import EmployeeServices from '../services/EmployeeServices';


const UpdateForm = ({data}) => {
    const [formData , setFormData]=useState(data)
     
    const form = useForm({
      defaultValues:formData,
      mode:"onChange",
    })

    const changeDefaultValues = () => {
      const newDefaultValues = {
        name: '',
        email: '',
        phone: '',
        gender: '',
      }
      form.reset(newDefaultValues)
    }
    const {register , handleSubmit ,formState} =form
    const {errors} = formState
     
    
    const onSubmit =(u)=>{
         
        setFormData(u)
        console.log("Data after update" ,u)
        EmployeeServices.updateData(u.id ,u)
        changeDefaultValues()
       
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
               {...register("name" , { required:true,
                minLength: {
                value: 3,
                message: "At least 3 characters ",
              },

              maxLength: {
                value: 30,
                message: "cannot exceed 30 characters",
              },
              
              validate: (name) => {
                var regex =
                  /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
                if (regex.test(name)) {
                  return true;
                } else {
                  return "Invalid name !";
                }
              },})}
            />    
            <p className='text-yellow-900'>{errors.name?.message} </p>        
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
          {...register("email" ,{  required:true,
            
            validate: (email) => {
            var regex =
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (regex.test(email)) {
              return true;
            } else {
              return "Invalid Email !";
            }
          },})}
        />
        <p className='text-yellow-900'>{errors.email?.message} </p>
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
          {...register("phone" ,{ required:true,
            validate: (num) => {
              const pattern = new RegExp(/^\d{1,10}$/);
              if (!pattern.test(num)) return "Invalid Entry !";
            },
          })}
        />
        <p className='text-yellow-900'>{errors.phone?.message} </p>
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
          Gender
        </label>
        <select
          id="gender"
      
          placeholder="Your Gender"
          className="border border-gray-300 p-2 rounded w-full"
          {...register("gender" ,{
            required:'Gender is required'
          } )}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <p className='text-yellow-900'>{errors.gender?.message} </p>
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
