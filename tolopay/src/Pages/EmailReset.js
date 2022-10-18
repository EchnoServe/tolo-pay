import React from 'react';
import ForgotPassword from '../Components/login_components/ForgotPassword';

export const ResetPasswordPages = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h2>
            Reset Your ToloPay Password!
        </h2>
        <h4>Enter your email and submit! we will send a reset link to your email.</h4>
        <ForgotPassword />
    </div>
  )
  
}

export default ResetPasswordPages

