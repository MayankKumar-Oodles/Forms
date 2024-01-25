import React, { useContext } from 'react'
import { useState } from 'react';
import DeleteUserModal from '../modals/DeleteUserModal';
import EmployeeServices from '../services/EmployeeServices';
import { AuthContext } from '../context/ AuthStore';
 

const DeleteUser = ({id ,  refDel}) => {
    const{key}=useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
     
    const openModal = () => {
      
      if(key){
       setIsModalOpen(true)
      }
      else{
       alert("Please Login to delete employee details")
      }
      
   };
   

    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return ( 
      <>
        <button
          onClick={openModal}
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        >
          Delete
        </button>
  
        {isModalOpen && <DeleteUserModal refDel={refDel} closeModal={closeModal} id={id}/>}
      </>
    );
}

export default DeleteUser


// className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"