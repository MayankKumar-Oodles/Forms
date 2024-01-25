import React, { useContext } from "react";
import { useState } from "react";
import UpdateUserModal from "../modals/UpdateUserModal";
import { AuthContext } from "../context/ AuthStore";

const UpdateUser = ({ data, refDel }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { key } = useContext(AuthContext);
  const openModal = () => {
    if (key) {
      setIsModalOpen(true);
    } else {
      alert("Please Login to update employee details");
    }
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

      {isModalOpen && (
        <UpdateUserModal closeModal={closeModal} data={data} refDel={refDel} />
      )}
    </>
  );
};

export default UpdateUser;
