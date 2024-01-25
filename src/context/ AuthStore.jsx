 import { createContext, useEffect, useState } from "react"
 import FirebaseServices from "../services/FirebaseServices";
 
 export const AuthContext = createContext(0);

 const  AuthStore = (props) => {

  const [key, setKey] = useState()


  useEffect(() => {
     FirebaseServices.stateChanged((user) => {
      if (user) {
        // console.log("user wala accesstoken", user)
        setKey(user.accessToken)
        
      } else {
      
        setKey(false)
        return null;
      }
    });
  }, []);
    
   return (
    <AuthContext.Provider value={{key , setKey}}>
        {props.children}
      </AuthContext.Provider>
   )
 }
 
 export default  AuthStore
 