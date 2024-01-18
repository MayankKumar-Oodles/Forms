 import { db } from "../firebase/firebase-config";
import {getDocs ,collection  ,addDoc} from "firebase/firestore"

const employeeCollectionRef=collection(db ,"e-crud");

class  EmployeeServices{
  
    getData=()=>{

        return getDocs(employeeCollectionRef)
    }

    addData=(data)=>{
         console.log('adddata ',data);
        return addDoc(employeeCollectionRef , data)
      
    }
    
 
 }

 export default   new EmployeeServices()