import React, { useContext, useState } from 'react';
import AddUserModal from '../modals/AddUserModal';
import { AuthContext } from '../context/ AuthStore';

const AddUser = () => {
  const {auth}=useContext(AuthContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if(auth){
      setIsModalOpen(true)
    }
    else{
      alert("Please log in to add a user")
    }
     
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

