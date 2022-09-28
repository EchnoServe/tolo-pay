import React, {useState} from 'react';
import { FcGoogle } from 'react-icons/fc';
import { gray80 } from '../../Utils/colors';
import './LoginContainer.style';
import { Heading, AlternatePara, Container,
    Divider, SocialMediaContainer, SocialMediaLogin, Subtitle, Para } from './LoginContainer.style';
import { Loading } from "../commonStyles";
import LoginForm from './LoginForm';

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif"

// Login Box
const LoginContainer = () => {

    // Loading Bar States
    const [loading, setLoading] = useState(false);
    const handleLoading = value => {
        setLoading(value);
    }

    //fetching user logged with google
    const fetchAuthUser = () => {
        fetch("http://localhost:8000/api/v1/users/loginsocial")
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(err => console.log(`errors: ${err}`))
    }

    // api call to server redirect to login with google
    const handleClick = async social => {
        setLoading(true);
        const googleLoginUrl = "http://localhost:8000/api/v1/users/google";
        const newWindow = window.open(googleLoginUrl, "_blank", "width: 400, height: 600");
        const timer = setInterval(checkWindow, 500)

        function checkWindow() {
            if (newWindow.closed) {

                console.log('success message timeout');
                clearInterval(timer);
                fetchAuthUser();
                setLoading(false);
            }
            
             
        }
        
        
    }
    
  return (
    <Container>
    {
        loading ? 
        <Loading >
            <div className='loaderBar'></div>
        </Loading>
        : ''
    }
        
        <Heading>
            <Subtitle style={{fontFamily: font, color: gray80, 
            fontSize: 'x-large', fontWeight: 'lighter', marginBottom: 15}} >Login</Subtitle>
        </Heading>
        
        <SocialMediaContainer>
            {/*login with googl implementation Google */}
            <SocialMediaLogin 
                        onClick={() => handleClick('google')}
            >
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
        <LoginForm onChange={handleLoading}/>
        
        <div>
            <Para >Don't have Account yet? <a href='#d'>Create Account Now</a></Para>
        </div>
        
        
    </Container>
  )
}

export default LoginContainer