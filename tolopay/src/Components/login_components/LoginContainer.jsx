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

    const handleClick = social => {

            const response = fetch(`http://localhost:8000/api/v1/users/${social}`)
            .then(response => response.json()).then(result => {
                console.log(result);
            });
  
            console.log(response);
    }
    
  return (
    <Container>
        <Heading>
            <Subtitle style={{fontFamily: font, color: gray80, fontSize: 'x-large', fontWeight: 'lighter', marginBottom: 15}} >Login</Subtitle>
        </Heading>
        
        <SocialMediaContainer>
            {/*login with googl implementation Google */}
            <SocialMediaLogin onClick={handleClick('google')}>
            <FcGoogle style={{marginLeft: 9, fontSize: 27, backgroundColor: 'white', borderRadius: 3}}/>
            <Para style={{fontSize: 15, fontWeight: 'bold', marginLeft: 57}}>Continue with Google</Para>
            </SocialMediaLogin>
            
            {/* <SocialMediaLogin>
            <FaFacebook style={{marginLeft: 9, fontSize: 27, color: '#3b5998', backgroundColor: 'white', borderRadius: 27}}/>
            <Para style={{fontSize: 15, fontWeight: 'bold' ,marginLeft: 57}}>Continue with Facebook</Para>
            </SocialMediaLogin> */}

        </SocialMediaContainer>
        <Divider>
            <AlternatePara style={{fontFamily: font, color: '#333333'}}> OR </AlternatePara>
        </Divider>
        
        {/* login form with a submit button */}
        <LoginForm />
        
        <div>
            <Para >Don't have Account yet? <a href='#d'>Create Account Now</a></Para>
        </div>
        
        
    </Container>
  )
}

export default LoginContainer