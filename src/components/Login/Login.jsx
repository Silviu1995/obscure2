import React from 'react'
import './Login.scss'
const Login = () => {
  return (
    <div className="loginContainer">
      <div className='loginWrapper'>
        <div className="serverName">Obscure 2</div>
        <div className="loginForm">
            <input 
            className='loginInput'
            type="text"
            placeholder='Account name' 
            />
            <input
            className='loginInput' 
            type="password"
            placeholder='Password'
            />
            <button>Login</button>
            <span>Forgot password ?</span>
        </div>
    </div>
    </div>
    
  )
}

export default Login
