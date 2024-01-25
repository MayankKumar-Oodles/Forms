import React from 'react'
import EmpManagment from './EmpManagment'
import AddEmployee from './AddEmployee'

const Title = ({refDel}) => {
  return (
    <div className= ' border-2 p-3 bg-gray-100 flex justify-between'>
          <EmpManagment/>
          <AddEmployee refDel={refDel}/>
    </div>
  )
}

export default Title
