import React from 'react';
import ForgotPassword from '../Components/login_components/ForgotPassword';

export const ResetPasswordPages = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>
            Reset Your Password!
        </h1>
        <ForgotPassword />
    </div>
  )
  
}

export default ResetPasswordPages

