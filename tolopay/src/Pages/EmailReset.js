import React, { useState } from 'react';
import ForgotPassword from '../Components/login_components/ForgotPassword';

export const ResetPasswordPages = () => {
  const [ sent, sentStatus ] = useState(false);

  return (
    
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    {
      !sent ?
      <>
        <h2>
            Reset Your ToloPay Password!
        </h2>
        <h4>Enter your email and submit! we will send a reset link to your email.</h4>
        <ForgotPassword sentStatus={sentStatus} />
      </>
      : 
      <>
        <h1>We have sent a link to your email.</h1>
        <h3>if you don't see the email then check your spam folder!</h3>
      </>
    }  
    </div>
  )
  
}

export default ResetPasswordPages

