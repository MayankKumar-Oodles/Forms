import React, { useContext, useState } from "react";
import AddUserModal from "../modals/AddUserModal";
import { AuthContext } from "../context/ AuthStore";

const AddEmployee = ({refDel}) => {
  const { key } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const openModal = () => {
    // console.log("auth value in addemployee modal", key);
    if (key) {
      setIsModalOpen(true);
    } else {
      alert("Please log in to add  Employee ");
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
        Add Employee
      </button>

      {isModalOpen && <AddUserModal closeModal={closeModal} refDel={refDel}/>}
    </>
  );
};

export default AddEmployee;
