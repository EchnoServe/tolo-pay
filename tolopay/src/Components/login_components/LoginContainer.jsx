import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
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
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: 300, marginBottom: 15}}>
                <Subtitle style={{fontFamily: font, color: '#46833c', fontSize: 'x-large', fontWeight: 'lighter' }} >
                Login
                </Subtitle>
                <Subtitle style={{color: gray80, fontFamily: font, fontSize: 'medium'}} >
                Enter your email and password
                </Subtitle>
            </div>

        </Heading>

        {/* login form with a submit button */}
        <LoginForm />

        <Divider>
            <AlternatePara style={{fontFamily: font, color: '#333333'}}> OR </AlternatePara>
        </Divider>
        
        <SocialMediaContainer>
            <SocialMediaLogin>
            <FcGoogle style={{marginLeft: 9, fontSize: 27, backgroundColor: 'white', borderRadius: 3}}/>
            <Para style={{fontSize: 15, fontWeight: 'bold', marginLeft: 57}}>Signin with Google</Para>
            </SocialMediaLogin>
            <SocialMediaLogin>
            <FaFacebook style={{marginLeft: 9, fontSize: 27, color: '#3b5998', backgroundColor: 'white', borderRadius: 27}}/>
            <Para style={{fontSize: 15, fontWeight: 'bold' ,marginLeft: 57}}>Login with Facebook</Para>
            </SocialMediaLogin>
        </SocialMediaContainer>
        
    </Container>
  )
}

export default LoginContainer