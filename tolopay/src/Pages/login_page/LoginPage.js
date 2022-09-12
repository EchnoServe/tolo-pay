import React, { Component } from 'react'
import LoginContainer from '../../Components/login_components/LoginContainer'
import LoginHeading from '../../Components/login_heading/LoginHeading'
import { black } from '../../Utils/colors'
import { LoginPageComponent} from './LoginPage.style'

export default class LoginPage extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <LoginPageComponent>
          <LoginContainer />
          <LoginHeading />
        </LoginPageComponent>
      </div>
      
    )
  }
}
