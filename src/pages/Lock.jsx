import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/lock.scss"


const Lock = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("")

  const handleLock = () => {
    console.log(password);
    if (password === "masala") {
      navigate("/home");
    }
  }
  return (
    <div className='lockPage'>
      <div className='lockUI'>
        <h1>Please enter the password </h1>
        <div className='inputContainer'>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
          <button type="button" value="submit" onClick={() => handleLock()} > Unlock </button>
        </div>
      </div>
    </div >
  )
}

export default Lock