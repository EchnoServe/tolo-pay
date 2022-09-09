import React from 'react'
import { gray80, primary } from '../../Utils/colors'
import './LoginContainer.style'
import { Heading, Title, AlternatePara, Container, 
    Divider, SocialMediaContainer, SocialMediaLogin, Subtitle, Para } from './LoginContainer.style'
import LoginForm from './LoginForm'

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif"
const LoginContainer = () => {
    
  return (
    <Container>
        <Heading>
            <Title style={{color: primary, fontFamily: font, fontSize: 'x-large', fontWeight: 'bolder'}}>
            Welcome back, 
            </Title>
            <Subtitle style={{color: gray80, fontFamily: font, fontSize: 'medium'}} >
            Let's Log you in to your Acount
            </Subtitle>
        </Heading>
        
        <SocialMediaContainer>
            <SocialMediaLogin><Para style={{fontSize: 15}}>Sign in with Google</Para></SocialMediaLogin>
            <SocialMediaLogin><Para style={{fontSize: 15}}>Login with Facebook</Para></SocialMediaLogin>
        </SocialMediaContainer>
        <Divider>
            <AlternatePara style={{fontFamily: font}}> -- OR -- </AlternatePara>
        </Divider>
        
        <LoginForm />
        
        <div>
            <Para >Don't have Account yet? <a>Create Account Now</a></Para>
        </div>
        
        
    </Container>
  )
}

export default LoginContainer