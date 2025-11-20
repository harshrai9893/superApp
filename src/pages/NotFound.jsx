import React from 'react'
import { useNavigate } from 'react-router-dom'

export  const NotFound = () => {
    const navigate= useNavigate();
  return (
    <div>
      <h1>404 not found</h1> 
      <p>sorry, the page you are looking for does not exist.</p> 
      <button onClick={()=>navigate("/")}>take me back</button>
    </div>
  )
}

