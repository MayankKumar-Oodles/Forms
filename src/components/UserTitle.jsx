import React from 'react'
import AddUser from './AddUser'
import UserManagment from './UserManagment'
 

const UserTitle = ({isloggedin}) => {
  return (
    <div className= ' border-2 p-3 bg-gray-100 flex justify-between'>
            <UserManagment/>
           <AddUser isloggedin={isloggedin}/>
    </div>
  )
}

export default UserTitle
