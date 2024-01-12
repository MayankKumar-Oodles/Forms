import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate();
  return (
     <>
      <div>Home page</div>
      <button onClick={()=>{navigate('order')}}>Place order</button>
     </>
  )
}

export default Home
