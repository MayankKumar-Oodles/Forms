import React from 'react'
import { useState } from 'react';
import UpdateUserModal from '../modals/UpdateUserModal';

const UpdateUser = ({data}) => {
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
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Update
        </button>
  
        {isModalOpen && <UpdateUserModal closeModal={closeModal} data={data}/>}
      </>
    );
}

export default UpdateUser
