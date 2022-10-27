import React, { useState } from 'react';
import { CloseButton, Popup, PopupInner } from '../Components/commonStyles';
import ForgotPassword from '../Components/login_components/ForgotPassword';

export const ResetPasswordPages = () => {
  const [ sent, sentStatus ] = useState('');
  const form = <>
        <h2>
          Reset Your ToloPay Password!
        </h2>
        <h4>Enter your email and submit! we will send a reset link to your email.</h4>
        <ForgotPassword sentStatus={sentStatus} />
  </>

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    {
      sent === '' ?
      <>
      {
        sent === 'error' ?
        <Popup onChange={sentStatus}>
          <PopupInner>
            <h2>
              Couldn't find your account
            </h2>
            <p>Please recheck your inputs and try again!</p>
            <CloseButton onClick={() => sentStatus('')} >Close</CloseButton>
          </PopupInner>
          
        </Popup> : ''
      }
        {form}
      </>
      : (
      sent === 'success' ?
      <>
        <h1>We have sent a link to your email.</h1>
        <h3>if you don't see the email then check your spam folder!</h3>
      </>
      : <>
        <small style={{color: 'red'}}>An error ocurred. try again!</small>
        {form}
      </> )
    }  
    </div>
  )
  
}

export default ResetPasswordPages

