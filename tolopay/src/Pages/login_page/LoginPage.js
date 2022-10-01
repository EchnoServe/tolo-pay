import React, { Component } from 'react';
import LoginContainer from '../../Components/login_components/LoginContainer';
import { LoginPageComponent, Logo} from './LoginPage.style';
import logo from '../../Assets/tolopayLogo.png';
import Navbar from '../../Components/landingPage_component/Navbar';
export default class LoginPage extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <LoginPageComponent>
          
          <LoginContainer />
          
        </LoginPageComponent>
        </>
    )
  }
}
