import React from 'react'
import UpdateForm from '../components/UpdateForm'
 
const UpdateUserModal = ({closeModal ,data}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Details</h2>
         <UpdateForm data={data}/>
         
        
        <button
          onClick={closeModal}
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default UpdateUserModal
