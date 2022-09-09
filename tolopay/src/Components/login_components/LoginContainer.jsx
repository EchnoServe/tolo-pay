import React from 'react'
import './LoginContainer.style'
import {primary}from '../../Utils/colors'
import { Heading, Title, AlternatePara, Container, 
    Divider, LoginButton, LoginFormButton, LoginFormInput, 
    LoginOptions, RememberMe, SocialMediaContainer, SocialMediaLogin, Subtitle } from './LoginContainer.style'

const LoginContainer = () => {
  return (
    <Container>
        <Heading>
            <Title style={{fontFamily: 'sans-serif', fontSize: 'xx-large', fontWeight: 'bolder'}}>Login</Title>
            <Subtitle style={{fontFamily: 'sans-serif', fontSize: 'large'}} >Welcome, Let's Log you in to your Acount</Subtitle>
        </Heading>
        
        <SocialMediaContainer>
            <SocialMediaLogin>Sign in with Google</SocialMediaLogin>
            <SocialMediaLogin>Login with Facebook</SocialMediaLogin>
        </SocialMediaContainer>
        <Divider><AlternatePara style={{fontFamily: 'cursive'}}> -- OR --</AlternatePara></Divider>
        <LoginFormButton>
            <form className='login-form'>
                <LoginFormInput type='email' placeholder='Email' />
                <LoginFormInput type='password' placeholder='Password'/>
                
            </form>
            <LoginOptions>
                <RememberMe>
                    <input type={'checkbox'} />
                    <p>Remember Me</p>
                </RememberMe>
                <div className='forgot-password'><a style={{color: primary}}>Forgot Password?</a></div>
            </LoginOptions>
            <LoginButton>Login to Your Account</LoginButton>
        </LoginFormButton>
        
        <div>
            <p>Don't have Account yet? <a>Create Account Now</a></p>
        </div>
        
        
    </Container>
  )
}

export default LoginContainer