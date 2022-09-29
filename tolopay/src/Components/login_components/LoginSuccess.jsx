import React, { useEffect } from 'react'

const LoginSuccess = () => {

    useEffect(() => {
        setTimeout(() => {
            window.close();
        }, 1500);
    }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Login Successfule</h1>
        <h3>Wait for seconds to redirect to your profile.</h3>
    </div>
  )
}

export default LoginSuccess