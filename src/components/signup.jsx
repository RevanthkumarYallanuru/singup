import React, { useState } from 'react'
import "./Signup.css"

const Signup = () => {
    const [action,setaction]=useState("Sign up")
  return (
    <div className='container'>
        <div className="box">
            <div className="headding">
                {action}
            </div>
            <div className="underline"></div>
           {action==="Sign up"? <div className="inputfield">
                <input type="text" placeholder='Name' required="True" />
            </div>:<div></div>}
            <div className="inputfield">
                <input type="email" placeholder='Email' required />
            </div>
            <div className="inputfield">
                <input type="password" placeholder='Password' required />
            </div>
            {action==="Login"?<div className="forget">
                forget password? <span>Click here !</span>
            </div>:<div></div>}
        <div className="submitsection">
            
            <div className={action==="Sign up"? "sub" : "subgray"} onClick={()=>{setaction("Sign up") }}>Signup</div>
            <div className={action==="Login"? "log" : "loggray"} onClick={()=>{setaction("Login") }}>Login</div>
        </div>

        </div>
       
      
    </div>
  )
}

export default Signup
