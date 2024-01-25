import React from 'react'
import InputForm from '../components/InputForm'
 
const AddUserModal = ({closeModal ,refDel}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg w-5/12 flex flex-col  ">
        <h2 className="text-2xl font-bold mb-4 ">Add Employee Details</h2>
         <InputForm closeModal={closeModal} refDel={refDel}/>
        
        <button
          onClick={closeModal}
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded   self-end"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default AddUserModal
