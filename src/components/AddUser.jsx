import React, { useState } from 'react';
import AddUserModal from '../modals/AddUserModal';
const AddUser = ({}) => {
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        
      >
        Add User
      </button>

      {isModalOpen && <AddUserModal closeModal={closeModal}/>}
    </>
  );
};

export default AddUser;

