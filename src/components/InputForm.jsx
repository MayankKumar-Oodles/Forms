import React, { useState } from 'react';
import {useForm } from 'react-hook-form';
import EmployeeServices from '../services/EmployeeServices';

const InputForm = ({data}) => {

    const form = useForm()
    const {register , formState ,reset, handleSubmit} =form
    const {errors} = formState
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gender: '',
      });
          {
              console.log('edit',data); 
          }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const onSubmit =(data)=>{
        console.log("form is submitted" ,data)

        EmployeeServices.addData(data)
        reset()
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
              value={formData.name}
             
              placeholder='Your Name'
              className="border border-gray-300 p-2 rounded w-full"
               {...register("name",{ onChange: (e) => { handleChange(e); } })}
            />            
      </div>
            

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
      
          placeholder="Your Email"
          className="border border-gray-300 p-2 rounded w-full"
          {...register("email",{ onChange: (e) => { handleChange(e); } })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
           
          placeholder="Your Phone"
          className="border border-gray-300 p-2 rounded w-full"
          {...register("phone" ,{ onChange: (e) => { handleChange(e); } })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
          Gender
        </label>
        <select
          id="gender"
          value={formData.gender}
       
          placeholder="Your Gender"
          className="border border-gray-300 p-2 rounded w-full"
          {...register("gender" ,{ onChange: (e) => { handleChange(e); } })}
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
        Submit
      </button>
    </form>
  );
};

export default InputForm;
