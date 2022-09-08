import React, { Component } from 'react'
import LoginContainer from '../../Components/login_components/LoginContainer'
import './login_page.css'

export default class LoginPage extends Component {
  render() {
    return (
      <div className='login-page'>
        <LoginContainer />
      </div>
    )
  }
}
