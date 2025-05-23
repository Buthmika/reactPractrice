import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const[action,setAction]=useState("Sign Up")   
  return (
    <div className='container'>
      <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
      </div>
<div className="inputs">
      <div className="input">
            <img src={user_icon} alt=" "/>
            <input type="text" placeholder='User Name'/>
      </div>
      <div className="input">
            <img src={email_icon} alt=" "/>
            <input type="email" placeholder='Email'/>
      </div>
      <div className="input">
            <img src={password_icon} alt=" "/>
            <input type="password" placeholder='Password'/>
      </div>
</div>
      <div className="frogotPassword">Lost Password <span>Clik Here!</span></div>

      
      

      <div className="submitContainer">
            <div className={action==="Login"?"submit gray":"submit"}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}>Login</div>

      </div>
      
    </div>
  )
}

export default LoginSignup
