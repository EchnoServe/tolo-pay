import React, { Component } from 'react';
import LoginContainer from '../../Components/login_components/LoginContainer';
import { LoginPageComponent, Logo} from './LoginPage.style';
import logo from '../../Assets/tolopayLogo.png';

export default class LoginPage extends Component {
  render() {
    return (
        <LoginPageComponent>
          <Logo>
              <img src={logo} alt="tolopay logo" style={{width: 160, height: 50, padding: 10}}/>
          </Logo>
          <LoginContainer />
          
        </LoginPageComponent>
      
    )
  }
}
