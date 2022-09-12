import React from 'react'
import { gray80 } from '../../Utils/colors'
import './LoginContainer.style'
import { Heading, AlternatePara, Container, 
    Divider, SocialMediaContainer, SocialMediaLogin, Subtitle, Para } from './LoginContainer.style'
import LoginForm from './LoginForm'

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif"

// Login Box
const LoginContainer = () => {
    
  return (
    <Container>
        <Heading>
            <Subtitle style={{color: gray80, fontFamily: font, fontSize: 'medium'}} >
            Login
            </Subtitle>
        </Heading>
        
        <SocialMediaContainer>
            <SocialMediaLogin><Para style={{fontSize: 15}}>Continue with Google</Para></SocialMediaLogin>
            {/* <SocialMediaLogin><Para style={{fontSize: 15}}>Login with Facebook</Para></SocialMediaLogin> */}
        </SocialMediaContainer>
        <Divider>
            <AlternatePara style={{fontFamily: font}}><span>::before OR ::after</span></AlternatePara>
        </Divider>
        
        {/* login form with a submit button */}
        <LoginForm />
        
        <div>
            <Para >Don't have Account yet? <a href=''>Create Account Now</a></Para>
        </div>
        
        
    </Container>
  )
}

export default LoginContainer