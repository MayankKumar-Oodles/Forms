import React from 'react'
import {useNavigate} from 'react-router-dom'
const Orderpage = () => {
   
  const navigate=useNavigate()
  return (
    <div>
          order is confirmed
          <button onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  )
}

export default Orderpage
