import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import User from "./pages/User";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
 
const App = () => {
 
  return (
    <>  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes> 
      
    </>
  );
};

export default App;
