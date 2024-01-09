import React from 'react'
import UseFormHook from './UseFormHook'
import { useForm } from 'react-hook-form'
 import {yupResolver} from "@hookform/resolvers/yup"
 import * as yup from "yup"

const YupIntegration = () => {
   
  const schema=yup.object({
    username:yup.string().required("username is required"),
    email:yup.string().email("Email format is invalid").required("Email is required"),
    channel:yup.string().required("Channel is required"),
  })
  const form=useForm({
     defaultValues:{
      username:"",
      email:"",
      channel:"",
     },

  resolver:yupResolver(schema)
  });
  const{register,handleSubmit,formState}=form

  const {errors}= formState


  const onSubmit=(data)=>{
    console.log("form is submitted ",data)
  }

  return (
      <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                          
                               <label htmlFor='username'>Username</label>
                               <input  type="text" id="username" {...register("username")}/>
                                <p>{errors.username?.message}</p>

                               <label htmlFor='email'>Email id</label>
                               <input  type="email" id="email" {...register("email")}/>
                               <p>{errors.email?.message}</p>

                               <label htmlFor='channel'>Channel</label>
                               <input  type="text" id="channel" {...register("channel")}/>
                               <p>{errors.channel?.message}</p>
                               <button>Submit</button>
                          
                  </form>
      </div>
  )
}

export default YupIntegration
