import React from 'react'
import { Title } from './LoginHeading.style'
import { black } from '../../Utils/colors'
import { Heading, Subtitle } from '../login_components/LoginContainer.style'

const LoginHeading = () => {
  return (
    <div style={{border: '1px solid gray', height: '60vh', width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Heading>
            <Title style={{color: black, fontSize: 'xxx-large', fontWeight: 'bolder'}}>
                Welcome Back. 
            </Title>
            <Subtitle>Pay or Get Paid with no Hustle.</Subtitle>
        </Heading> 
    
    </div>
  )
}

export default LoginHeading