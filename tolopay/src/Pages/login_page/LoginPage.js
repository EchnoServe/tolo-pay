import React, { Component } from 'react'
import LoginContainer from '../../Components/login_components/LoginContainer'
import { LoginPageComponent } from './LoginPage.style'

export default class LoginPage extends Component {
  render() {
    return (
      <LoginPageComponent>
        <LoginContainer />
      </LoginPageComponent>
    )
  }
}
