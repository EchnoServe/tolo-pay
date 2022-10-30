import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import{Link as LinkR} from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';
import {Link as LinkS} from 'react-scroll';
import logo from '../../Assets/Image/logo-s.png';
import { animateScroll as scroll } from 'react-scroll';


export default function Navbar({toggle , isOpen }) {

    const [navbar, setNavbar] = useState(false);
    


	const changeBackground = () => {
	 if(window.scrollY >= 80){
	  setNavbar(true);
	 }else{
	  setNavbar(false);
	 }
	}

    useEffect(() => {
        window.addEventListener('scroll',changeBackground); 
       
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
  
	



  return (
    <>
     <Nav  navbar = {navbar} >
        <NavbarContainer>
            <NavLogo to = '/' onClick={toggleHome}> <img src={logo} alt="Tolopay logo"  className='logo'/>
           
            
            </NavLogo>
            <MobileIcon onClick={toggle}> {isOpen ? '' : <CgMenuRight />} </MobileIcon>
            <NavMenu>

                <NavItem> 
                <NavLinks   to = 'hero' smooth={true} duration={500} spy={true} exact = 'true' offset={-80} >Home</NavLinks>
                </NavItem>


                <NavItem> 
                <NavLinks to = 'features' smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>Features</NavLinks>
                </NavItem>

                <NavItem> 
                <NavLinks to = 'how' smooth={true} duration={500} spy={true} exact = 'true' offset={-80}>How It works</NavLinks>
                </NavItem>
  
                <NavBtn>
                <NavBtnLink to = '/login'>Login</NavBtnLink>
                </NavBtn>

            </NavMenu>
        </NavbarContainer> 
     </Nav>
     </>
  )
}

const Nav = styled.nav`
background-color: ${({navbar}) => (navbar ? 'white' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}

 
`;

const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 20px;
max-width: 1100px;
`;

const NavLogo = styled(LinkR)`
justify-self: flex-start;
cursor: pointer;
display: flex;
align-items: center;

.logo{
    padding: 10px;
    max-height: 90%;
    max-width: 90%;
}

`;

const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
}
`;

const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
gap: 10px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const NavItem = styled.li`
height: 80px;
`;


const NavLinks = styled(LinkS)`
color: #262a37;
display: flex;
align-items: center;
text-decoration: none;
font-weight: 600;
font-size: 15px;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{  
    border-bottom: 3px solid #93ADCE;
}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
 
@media screen and (max-width: 768px){
    display: none;
}
`;

const NavBtnLink = styled(LinkR)`
width: 100px;
border-radius: 4px;
background: linear-gradient(to bottom right, #08AEE8, #6977fe);
white-space: nowrap;
padding: 10px 22px;
margin-left: 0;
font-size: 13px;
font-weight: bold;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
position: relative;
text-decoration: none;
 

&:hover{

 background:  linear-gradient(to bottom right, #41d3fe, #6977fe);;
  
 border-radius: 0;
 transition: all 0.9s ease;
 
}
`;