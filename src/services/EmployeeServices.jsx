 import { db } from "../firebase/firebase-config";
import {getDocs ,collection  ,addDoc ,doc, updateDoc ,deleteDoc} from "firebase/firestore"

const employeeCollectionRef=collection(db ,"e-crud");

class  EmployeeServices{
  
    getData=()=>{

        return getDocs(employeeCollectionRef)
    }

    addData=(data)=>{
         console.log('adddata ',data);
        return addDoc(employeeCollectionRef , data)
      
    }
    updateData= async (id,updata)=>{
      
        const userdoc=doc(db ,"e-crud",id)
        // console.log("Employee service update data function",updata)
        return  await updateDoc(userdoc,updata);
    }

     deleteData= async (id)=> {
       const userDoc = doc(db, "e-crud", id);
       await deleteDoc(userDoc);
     };
    
 
 }

 export default   new EmployeeServices()