import React from 'react'
import { useForm ,useFieldArray} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
const UseFormHook = () => {

    const form= useForm({
        defaultValues:{
            username:"Rajan",
            email:"raman@gmail.com",
            channel:"",
            social:{
                twitter:"",
                facebook:"",
            },
            phoneNumber:["",""],
            phNumber:[{number:""}], 
            age:0,
            Dob:new Date(),
            mode :"onSubmit",
            
        }
    });

    
    const {register ,control ,handleSubmit ,formState ,watch ,getValues ,setValue ,reset}=form;
    const {errors,touchedFields,dirtyFields ,isDirty , isValid}=formState

    console.log({touchedFields,dirtyFields ,isDirty ,isValid});

    const {fields,append ,remove}=useFieldArray({
        name:"phNumber",
        control
        
   })

   const handleGetValue=()=>{
    console.log("Get value " , getValues())
   }

   const handleSetValue=()=>{
       setValue("username","Mayank kumar",{
        shouldValidate:true,
        shouldDirty:true,
        shouldTouch:true,
       })
   }

   const watchvalue=watch();
   

    const onSubmit=(data)=>{
        console.log("Form is Submitted" ,data);
    }

    const onError =(error)=>{
        console.log("On Error ", error)
    }
  return (
    <>   
        <div className="form-content">
            {/* <h1>Watch value :{JSON.stringify(watchvalue)}</h1> */}
            <form onSubmit={handleSubmit(onSubmit,onError)} noValidate>
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

                <label htmlFor='twitter'>Twitter</label>
                <input
                 type='text' 
                 id='twitter'   
                 {...register("social.twitter" ,{ disabled:true})}/>

                 <label htmlFor='facebook'>Facebook</label>
                <input
                 type='text' 
                 id='facebook'   
                 {...register("social.facebook")}/>

                <label htmlFor='primary'>Primary no.</label>
                <input
                 type='number' 
                 id='primary'   
                 {...register("phoneNumber.0")}/>

                <label htmlFor='secondary'>Secondary no.</label>
                <input
                 type='number' 
                 id='secondary'   
                 {...register("phoneNumber.1 ")}/>

                 <div>
                    <label>List of phone Number</label>
                 </div>
                 {
                    fields.map((field,index)=>{
                        return(
                            <div key={field.id}>
                                <input
                                type="text"
                                {...register(`phNumber${index}.number`)}
                                />

                                {
                                    index>0 &&
                                    (<button  type="button" 
                                    onClick={()=>remove(index)}>remove</button>)
                                 }
                              </div>

                           
                        )
                    })
                 }
                 <button type="button" onClick={()=>append({number:""})}>Add</button>

                 <label htmlFor='age'>Age</label>
                <input type='number' id='age' {...register("age",
                 {valueAsNumber:true,required:"Age is required"})}/>
                <p>{errors.age?.message}</p>

                <label htmlFor='dob'>D.O.B</label>
                <input type='date' id='dob' {...register("dob",
                 { valueAsDate:true,required:"dob is required"})}/>
              



                <button disabled={!isDirty || !isValid}>Submit</button>
                 <button onClick={handleGetValue}>Get values</button>
                 <button onClick={handleSetValue}>Set values</button>
                 <button onClick={()=>{reset()}}>reset</button>
               
            </form>
            <DevTool control={control}/>
        </div>
    </>
  )
}

export default UseFormHook
