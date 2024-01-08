import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
const UseFormHook = () => {

    const form= useForm();
    const {register ,control ,handleSubmit ,formState}=form;
    const {errors}=formState

    const onSubmit=(data)=>{
        console.log("Form is Submitted" ,data);
    }
  return (
    <>
        <div className="form-content">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor='username'>Username</label>
                <input
                 type='text' 
                 id='username'   
                 {...register("username" ,{required:"Username is required"})}/>
                 <p>{errors.username?.message}</p>

                <label htmlFor='email'>email</label>
                <input type='email' id='email'  {...register("email" ,
                 {
                    pattern:{
                    value:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    message:"Invalid email format",
                 },
                 validate:{
                     notadmin:(fieldvalue)=>{
                           return(
                            fieldvalue!=="admin@gmail.com"||"Enter email again"
                           )
                     }
                 }
                 }
                )} />
                 <p>{errors.email?.message}</p>


                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' {...register("channel",{required:"Channel name is required"})}/>
                <p>{errors.channel?.message}</p>


                <button>Submit</button>
               
            </form>
            <DevTool control={control}/>
        </div>
    </>
  )
}

export default UseFormHook
