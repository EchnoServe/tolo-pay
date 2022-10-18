import React from 'react';
import PasswordReset from '../Components/login_components/PasswordReset';

export const ResetPasswordPages = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h2>
            Change your Password!
        </h2>
        <h4>Enter a new password.</h4>
        <PasswordReset />
    </div>
  )
  
}

export default ResetPasswordPages

