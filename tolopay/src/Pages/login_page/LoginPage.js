
import React, { useState } from 'react';
import LoginContainer from '../../Components/login_components/LoginContainer';
import { LoginPageComponent, Logo} from './LoginPage.style';
import logo from '../../Assets/tolopayLogo.png';
import { CloseButton, Popup, PopupInner } from '../../Components/commonStyles';
const LoginPage = () => {


  const [error, errorState] = useState('');
  
    return (
      <>
      <Logo>
        <img src={logo} alt='tolopay logo' style={{width: 150, height: 70}} />
      </Logo>
      {
        error !== '' ?
        <Popup onChange={errorState}>
          <PopupInner>
          <>
          <h2>
              {error}
            </h2>
            <p>Please check your connectivity or inputs!</p>
          </>   
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <CloseButton onClick={() => errorState('')} >Close</CloseButton>
            </div>
          </PopupInner>
          
        </Popup> : ''
      }
        
        <LoginPageComponent>
          
          <LoginContainer onChange={errorState} />
          
        </LoginPageComponent>
        </>
    ) 
}

export default LoginPage

