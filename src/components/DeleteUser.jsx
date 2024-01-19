import React from 'react'
import { useState } from 'react';
import DeleteUserModal from '../modals/DeleteUserModal';
import EmployeeServices from '../services/EmployeeServices';
 

const DeleteUser = ({id}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
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
  
        {isModalOpen && <DeleteUserModal closeModal={closeModal} id={id}/>}
      </>
    );
}

export default DeleteUser


// className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"