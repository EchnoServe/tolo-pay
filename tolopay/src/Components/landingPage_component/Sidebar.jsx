import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll';
import{Link as LinkR} from 'react-router-dom';


export default function Sidebar({isOpen,toggle}) {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick={toggle}>
            <CloseIcon className='icon'/>
        </Icon>
        <SidebarWrapper>
           <SidebarMenu>

            <SidebarLink to = "hero" onClick = {toggle}>
             Home
            </SidebarLink>

            <SidebarLink to = "features" onClick = {toggle}>
             Features
            </SidebarLink>

            <SidebarLink to = "how" onClick = {toggle}>
             How It works
            </SidebarLink>

           </SidebarMenu>

           <SideBtnWrap>
             <SidebarRoute to = "/login" onClick = {toggle}>Login</SidebarRoute> 
        </SideBtnWrap>

           

        </SidebarWrapper>
          
    </SidebarContainer>

  )
}

const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #ffffff;
 
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen }) => (isOpen ? '100%': '0')};
top: ${({isOpen }) => (isOpen ? '0%': '-100')};

@media screen and (min-width: 768px) { 
    display: none;
}
 
`; 

const CloseIcon = styled(FaTimes)`
color: #000;
`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

const SidebarWrapper = styled.div`
color: #fff;
`;

const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(4,80px);
 text-align: center;
 padding-top: 100px;
@media screen and (max-width: 480px){
 grid-template-rows: repeat(4,60px);

}


`;

const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #000;
cursor: pointer;

&:hover{
    color: #408EF4;
    transition: 0.2s ease-in-out;
}
`;

const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

const SidebarRoute = styled(LinkR)`
border-radius: 5px;
background: #46833C;
white-space: nowrap;
color: #CEF5C7;
padding: 16px 64px;
font-size: 16px;
outline: none; 
border: none;
cursor: pointer; 
transition: all 0.2s ease-in-out;
text-decoration: none;


&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}





`;