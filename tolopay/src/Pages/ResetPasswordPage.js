import React from 'react';
import { useParams } from 'react-router-dom';
import PasswordReset from '../Components/login_components/PasswordReset';

export const ResetPasswordPages = () => {

  const { id, token } = useParams();

  console.log(token);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h2>
            Change your Password!
        </h2>
        <h4>Enter a new password.</h4>
        <PasswordReset id={id} token={token}/>
    </div>
  )
  
}

export default ResetPasswordPages

