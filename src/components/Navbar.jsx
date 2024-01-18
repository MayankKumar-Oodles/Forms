 import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
     <nav className=" text-2xl bg-blue-500 flex justify-end gap-4 p-4 items-center">
         <NavLink to='/' className="text-white hover:text-gray-300 px-4  ">Employee</NavLink>
         <NavLink to='/user' className="text-white hover:text-gray-300 px-4">User</NavLink>
     </nav>
  )
}

export default Navbar
