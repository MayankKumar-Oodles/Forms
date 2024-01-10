import React, { useState } from 'react'
import { useForm,useFieldArray} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

 const Formtask = () => {
  const form =useForm({
    defaultValues:{
        skills:[{number:""}],
    }
  })
  const {register , handleSubmit ,control ,formState}=form;
  const{errors ,isValid ,isSubmitted}=formState

  const {fields,append ,remove}=useFieldArray({
    name:"skills",
    control
    
})

const [newdata, setNewData]=useState();
const [newSkill, setNewSkill]=useState([]);
   
  

const onSubmit=data=>{
    
     setNewData(data);
     /* setNewSkill(data.skills) */
     const newSkillData= data.skills
     console.log(newSkillData)
     setNewSkill(newSkillData)
 
  
 }
     
       
   return (
     <div className='form-content-box'>
             <form  >
                     <label htmlFor='name'>Name:</label>
                     <input type="text" id='name'  placeholder='Enter name'
                      {...register("name" ,{ 

                        pattern:{
                            value:/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
                            message:"Invalid name"
                        },
                        
                      }
                    
                     )}
                     />
                     <p>{errors.name?.message}</p>

                     <label htmlFor='email'>Email:</label>
                     <input type="text" id='email' placeholder='Enter Email'
                     {...register("email" ,  
                     {
                        pattern:{
                            value:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            message:"Invalid email format",
                         },
                     }
                    )}
                     />
                      <p>{errors.email?.message}</p>

                     <label htmlFor='position'>Position:</label>
                     <input type="text" id='position' placeholder='Enter position' 
                     {...register("position" ,
                     {
                        pattern:{
                            value:/^[a-zA-Z\-]+$/,
                            message:"Invalid position",
                        
                             }
                   }
                    )}
                     />
                      <p>{errors.position?.message}</p>

                     <label htmlFor='salary'>Salary:</label>
                     <input type="text" id='salary' placeholder='Enter salary'
                      {...register("salary"  , 
                      {

                        pattern:{

                            value:/^(?!0+(?:\.0+)?$)[0-9]+(?:\.[0-9]+)?$/,
                            message:"Invalid salary",

                        }
                      
                      }
                     )}
                     />
                     <p>{errors.salary?.message}</p>

                     <label htmlFor="gender">Gender:</label>
                      <select {...register("Gender")} id="gender">
                         <option value="Male">Male</option>
                         <option value="Female">Female</option>
                      </select>

                     <label htmlFor='skills'>Skills:</label>
                     {/* <input type="text" id='skills' placeholder='Enter skills'
                     {...register("skills")}
                     />
                     */}
                    {
                    fields.map((field,index)=>{

                        return(
                            <div key={field.id}>
                                <input
                                type="text"
                                placeholder='Enter skills'
                                id='skills' 
                                {...register(`skills.${index}.number` ,{required:"Atleast one skill is required"},)}
                                />

                                {
                                    index>0 &&
                                    (<button  type="button" className='remove'
                                    onClick={()=>remove(index)}>remove</button>)
                                 }
                              </div>

                           
                        )
                    })
                 }
                 <button type="button"className='add' onClick={()=>append({number:""})}>Add</button>
                    

                     <label htmlFor='address'>Address:</label>
                      <textarea  id='address' placeholder='Enter address'
                      {...register("address" , { 
                        pattern:{
                            value:/^[a-zA-Z0-9\s,.'-]{3,}$/,
                            message:"Invalid Address format",
                      }})}
                      />
                        <p>{errors.address?.message}</p>

                     <label htmlFor='phone'>Phone</label>
                     <input type="text" id='phone'  placeholder='Enter phone'
                     {...register("phone"  ,
                     {
                        pattern:{
                            value:/^[0-9 ]+$/,
                            message:"Invalid phone number"
                        }
                     })}
                     />
                     <p>{errors.phone?.message}</p>

                     <button type="button" className='empbtn' disabled={!formState.isValid} onClick={handleSubmit(onSubmit)}>Add Employeee</button>

             </form>
                         {

                            //  console.log("new data" , newdata)
                             /* console.log("skill data",newdata.skills[0].number) */
                             
                             newSkill.map((e)=>{
                              console.log(e.number)
                             })

                         }
               
               <section>
                    
 
               {formState.isSubmitted? ( 
                    <div className='display-data'>
                      <p>Name:{newdata.name}</p>
                      <p>Email:{newdata.email}</p>
                      <p>Position:{newdata.position}</p>
                      <p>Salary:{newdata.salary}</p>
                      <p>Gender:{newdata.Gender}</p>
                      <p>Skills: {
                                  newSkill.map(e=><span>{e.number} ,</span>)
                                } </p>
                       <p>Address:{newdata.address}</p>         
                       <p>Phone:{newdata.phone}</p>          
                    </div>
                                 ) : (
                      <p>.</p>
                    )}   
                    
                               
                 
               </section>
             <DevTool control={control}/>
     </div>
   )
 }
 
 export default Formtask