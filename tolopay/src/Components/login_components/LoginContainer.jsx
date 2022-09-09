import React from 'react'
import './login_container.css'

const LoginContainer = () => {
  return (
    <div className='container'>
        <div className='heading'>
            <p className='title' style={{fontFamily: 'sans-serif', fontSize: 'x-large', fontWeight: 'bolder'}}>Login to Your Acount</p>
            <p className='subtitle' style={{fontFamily: 'sans-serif', fontSize: 'smaller'}} >Use your Social Media</p>
        </div>
        
        
        <div className='social-media-container'>
            <button className='social-media-login'>Continue with Google</button>
            <button className='social-media-login'>Continue with Facebook</button>
        </div>
        <div className='divider'><p className='alternate-para' style={{fontFamily: 'cursive'}}> -- OR --</p></div>
        <div className='login-form-button'>
            <form className='login-form'>
                <input className='input-form' type='email' placeholder='someone@example.com' />
                <input className='input-form' type='password' />
                
            </form>
            <div className='login-options'>
                <div className='remember-me'>
                    <input type={'checkbox'} />
                    <p>Remember Me</p>
                </div>
                <div className='forgot-password'><a>Forgot Password?</a></div>
            </div>
            <button className='login-button'>Login</button>
        </div>
        
        <div>
            <p>Don't have Account yet? <a>Create Account Now</a></p>
        </div>
        
        
    </div>
  )
}

export default LoginContainer