import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'; 
 

export default function Footer() {
  return (
    <FooterContainer>

      
      <FooterWrap>
      <FooterLinkContainer>
        <FooterLinksWrapper>
        <FooterLinkItems>  
          <FooterLinkTitle>ToloPay</FooterLinkTitle>
            <FooterLink to = '/page'>pay anything any where easly</FooterLink>
            <FooterLink to = '/page'>About us</FooterLink>
            <FooterLink to = '/page'>About us</FooterLink>
            <FooterLink to = '/page'>About us</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>  
          <FooterLinkTitle>Features</FooterLinkTitle>
            <FooterLink to = '/page'>Budgeting and Planning</FooterLink>
            <FooterLink to = '/page'>Qr Payment</FooterLink>
            <FooterLink to = '/page'>Trasaction History</FooterLink>
            <FooterLink to = '/page'>Transfer Money</FooterLink>
        </FooterLinkItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
        <FooterLinkItems>  
          <FooterLinkTitle> Resource </FooterLinkTitle>
            <FooterLink to = '/page'>Help center</FooterLink>
            <FooterLink to = '/page'>Guides</FooterLink>
            <FooterLink to = '/page'>Transactions</FooterLink>
            <FooterLink to = '/page'>About us</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>  
          <FooterLinkTitle>Company</FooterLinkTitle>
            <FooterLink to = '/page'>About us</FooterLink>
            <FooterLink to = '/page'>Testimonials</FooterLink>
            <FooterLink to = '/page'>Terms of Service</FooterLink>
            <FooterLink to = '/page'>Privacy Policy</FooterLink>
        </FooterLinkItems>
        </FooterLinksWrapper>
       

      </FooterLinkContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: linear-gradient(44.44deg,  #408EF4 6.6%, #D1DEEC 9.79%, #408EF4 7.79%, #D1DEEC 94.18%); 
  background-size: cover;
	background-attachment: fixed;
  z-index: 11;
  position: relative;
  display: flex;

width: 100%;
`;

const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin-right: auto;
margin-left: auto;

`;

const FooterLinkContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
  padding-top: 32px;
}
`; 

const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
  flex-direction: column;
}
`;

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
  margin: 0;
  padding: 10px;
  width: 100%;
}


`;

const FooterLinkTitle = styled.h1`
font-size: 14px;
margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
  color: #000000e1;
  transition: 0.3s ease-out;
}
`;