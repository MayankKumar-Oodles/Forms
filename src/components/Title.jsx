import React from 'react'
import AddUser from './AddUser'
import UserManagement from './UserManagement'

const Title = () => {
  return (
    <div className= ' border-2 p-3 bg-gray-100 flex justify-between'>
          <UserManagement/>
          <AddUser/>
    </div>
  )
}

export default Title
