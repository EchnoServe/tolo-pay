import React from 'react'
import './login_container.css'

const LoginContainer = () => {
  return (
    <div className='container'>
        <div className='heading'>
            <p className='title'>Login</p>
            <p className='subtitle'>Login using your email and password</p>
        </div>
        <div className='login-form'>
            <form>
                <input type='email' />
                <input type='password' />
                
            </form>
            <button className='login-button'>Login</button>
            
        </div>
        <p> or </p>
        <div>
            <button className='social-media-login'>Continue with Google</button>
        </div>
    </div>
  )
}

export default LoginContainer