import React from 'react'
import Navbar from './components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Employee  from "./pages/Employee"
import User from "./pages/User"
import Title from './components/Title'
const App = () => {
  return (
     <>
     <Navbar/>
     <Routes>
         <Route path ='/' element={<Employee/>}/>
         <Route path='/user' element={<User/>}/>
     </Routes>
     </>
  )
}

export default App
