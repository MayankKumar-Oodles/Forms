import React from 'react'
import EmployeeServices from '../services/EmployeeServices'
 
 
const DeleteUserModal = ({closeModal  ,id}) => {

  const deleteDataModal=()=>{
       EmployeeServices.deleteData(id)
       closeModal()

  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Do you want to delete data ? </h2>
        
        <button
          onClick={deleteDataModal}
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
        >
          Yes 
        </button>
         
        
        <button
          onClick={closeModal}
          className="mt-4 mx-4 bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
        >
          No
        </button>
      </div>
    </div>
  )
}

export default DeleteUserModal
