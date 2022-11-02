import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PasswordReset from '../Components/login_components/PasswordReset';
import { CloseButton, Popup, PopupInner } from '../Components/commonStyles';

export const ResetPasswordPages = () => {

  const { id, token } = useParams();
  const [error, errorState] = useState('');


  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    {
        error === 'error' ?
        <Popup onChange={errorState}>
          <PopupInner>
            <h2>
              {error}
            </h2>
            <p>Please recheck your inputs and try again!</p>
            <CloseButton onClick={() => errorState('')} >Close</CloseButton>
          </PopupInner>
          
        </Popup> : ''
      }
        <h2>
            Change your Password!
        </h2>
        <h4>Enter a new password.</h4>
        <PasswordReset id={id} token={token} onChange={errorState}/>
    </div>
  )
  
}

export default ResetPasswordPages

