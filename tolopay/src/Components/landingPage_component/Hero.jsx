import React from 'react'
import styled from 'styled-components'
import{Link as LinkR} from 'react-router-dom';
import img from '../../Assets/Image/heroImage.png';
import Fade from 'react-reveal/Fade'
 

export default function Hero() {
  return (
    <>
    
    <HeroContainer id='hero'>
   
      <HeroWrapper>
      
        <HeroRow>
{/* headline column */}
          <Column1>
<Fade left>
          <TextWrapper> 
            <Heading>The new way of money transfer <Span> ToloPay </Span> </Heading>
            <P>pay anything anywhere easly.</P>
            <BtnWrapper>
            <Button to = '/signup'>Create Account</Button>
           </BtnWrapper>
          </TextWrapper>
          </Fade>

          </Column1>

{/* Image column */}

          <Column2>
<Fade right>
          <ImgWrap>
          <Img src={img}></Img>
          </ImgWrap>
          </Fade>
          </Column2>

        </HeroRow>
      </HeroWrapper>
     
     {/* features  */}
<Fade top>
      <Feature>
      <FeatureInfo>
 

        <FeatureIcon className='one'>
        <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="userFriendly">
        <g id="card">
        <rect id="Rectangle 3993" x="29.4175" y="9.80762" width="20.1923" height="28.7179" rx="2.88462" transform="rotate(90 29.4175 9.80762)" fill="white"/>
        <rect id="Rectangle 3994" x="29.4175" y="9.94043" width="5.01478" height="28.5842" rx="2.50739" transform="rotate(90 29.4175 9.94043)" fill="#D6E5FF"/>
        </g>
        <path id="Vector" d="M31.9235 0H18.9393C17.9515 0 17.1484 0.803112 17.1484 1.79091V23.2819C17.1484 24.2697 17.9515 25.0728 18.9393 25.0728H31.9235C32.9113 25.0728 33.7144 24.2697 33.7144 23.2819V1.79091C33.7144 0.803112 32.9113 0 31.9235 0ZM25.4314 21.323C24.813 21.323 24.3121 20.8221 24.3121 20.2037C24.3121 19.5853 24.813 19.0844 25.4314 19.0844C26.0498 19.0844 26.5507 19.5853 26.5507 20.2037C26.5507 20.8221 26.0498 21.323 25.4314 21.323Z" fill="#4C82DE"/>
        </g>
        </svg>
        
        </FeatureIcon>
        <CardHeader>User Friendly</CardHeader>
        <Cardp>Most probably the best dashboard design for your business you can try.</Cardp>

      </FeatureInfo>

      <FeatureInfo>
      <FeatureIcon className='two'>

 

      <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="privacy">
      <g id="user">
      <path id="Vector" d="M4.75 5.21053C4.75 8.08326 6.88117 10.4211 9.5 10.4211C12.1188 10.4211 14.25 8.08326 14.25 5.21053C14.25 2.33779 12.1188 0 9.5 0C6.88117 0 4.75 2.33779 4.75 5.21053ZM17.9444 22H19V20.8421C19 16.3738 15.6845 12.7368 11.6111 12.7368H7.38889C3.31444 12.7368 0 16.3738 0 20.8421V22H17.9444Z" fill="white"/>
      </g>
      <g id="lock">
      <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 9C16.6621 9 15.2621 9.36438 13.9446 9.77C12.5967 10.1825 11.2379 10.6706 10.4389 10.9662C10.1049 11.0912 9.80871 11.3203 9.58446 11.6272C9.36022 11.9342 9.21698 12.3065 9.17122 12.7015C8.44751 18.8574 10.1269 23.4196 12.1644 26.4378C13.0285 27.7288 14.0588 28.8658 15.2208 29.8106C15.6895 30.186 16.1242 30.4734 16.4934 30.67C16.8334 30.8515 17.1989 31 17.5 31C17.8011 31 18.1654 30.8515 18.5066 30.67C18.9517 30.4251 19.3774 30.1376 19.7792 29.8106C20.9413 28.8658 21.9715 27.7288 22.8356 26.4378C24.8731 23.4196 26.5525 18.8574 25.8288 12.7015C25.7831 12.3063 25.6399 11.9338 25.4157 11.6266C25.1914 11.3194 24.8952 11.09 24.5611 10.9649C23.4012 10.5342 22.2323 10.1354 21.0554 9.76863C19.7379 9.36575 18.3379 9 17.5 9ZM17.5 15.875C17.9301 15.8743 18.3466 16.046 18.6757 16.3596C19.0048 16.6733 19.2252 17.1087 19.2979 17.5888C19.3706 18.0689 19.291 18.5626 19.073 18.9825C18.8551 19.4025 18.5129 19.7215 18.1071 19.8831L18.5746 22.6194C18.5917 22.7189 18.589 22.8214 18.5669 22.9197C18.5448 23.0179 18.5038 23.1094 18.4468 23.1876C18.3899 23.2658 18.3183 23.3287 18.2373 23.3719C18.1564 23.4151 18.0679 23.4375 17.9784 23.4375H17.0216C16.9322 23.4373 16.8439 23.4148 16.763 23.3715C16.6822 23.3282 16.6108 23.2652 16.554 23.1871C16.4971 23.1089 16.4562 23.0175 16.4342 22.9193C16.4122 22.8212 16.4096 22.7188 16.4266 22.6194L16.8929 19.8831C16.4871 19.7215 16.1449 19.4025 15.927 18.9825C15.709 18.5626 15.6294 18.0689 15.7021 17.5888C15.7748 17.1087 15.9952 16.6733 16.3243 16.3596C16.6534 16.046 17.0699 15.8743 17.5 15.875V15.875Z" fill="#D87478"/>
      </g>
      </g>
      </svg>

      </FeatureIcon>

      <CardHeader>Privacy Protected</CardHeader>
      <Cardp>Most probably the best dashboard design for your business you can try.</Cardp>

      </FeatureInfo>

      <FeatureInfo>
      <FeatureIcon className='three'>
 

      <svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="fast">
      <g id="transfer">
      <path id="Vector" d="M25.0781 1.92191C24.6375 1.48033 24.6375 0.766299 25.0781 0.329422C25.5187 -0.107455 26.2313 -0.112153 26.6672 0.329422L29.6672 3.33589C29.8781 3.54728 29.9953 3.83383 29.9953 4.13448C29.9953 4.43513 29.8781 4.72168 29.6672 4.93307L26.6672 7.93954C26.2266 8.38111 25.5141 8.38111 25.0781 7.93954C24.6422 7.49796 24.6375 6.78393 25.0781 6.34705L26.1562 5.2666L18 5.25721C17.3766 5.25721 16.875 4.75456 16.875 4.12978C16.875 3.505 17.3766 3.00236 18 3.00236H26.1609L25.0781 1.92191ZM4.92188 17.7059L3.84375 18.7863H12C12.6234 18.7863 13.125 19.2889 13.125 19.9137C13.125 20.5385 12.6234 21.0412 12 21.0412H3.83906L4.91719 22.1216C5.35781 22.5632 5.35781 23.2772 4.91719 23.7141C4.47656 24.151 3.76406 24.1557 3.32812 23.7141L0.328125 20.7123C0.117188 20.5009 0 20.2144 0 19.9137C0 19.6131 0.117188 19.3265 0.328125 19.1151L3.32812 16.1087C3.76875 15.6671 4.48125 15.6671 4.91719 16.1087C5.35313 16.5502 5.35781 17.2643 4.91719 17.7012L4.92188 17.7059ZM4.5 3.00236H15.8391C15.6656 3.34059 15.5625 3.72109 15.5625 4.12978C15.5625 5.47799 16.6547 6.57254 18 6.57254H23.5031C23.3156 7.37113 23.5313 8.24018 24.15 8.86497C25.1016 9.81858 26.6438 9.81858 27.5953 8.86497L28.5 7.95833V18.0347C28.5 19.6929 27.1547 21.0412 25.5 21.0412H14.1609C14.3344 20.7029 14.4375 20.3224 14.4375 19.9137C14.4375 18.5655 13.3453 17.471 12 17.471H6.49688C6.68438 16.6724 6.46875 15.8033 5.85 15.1785C4.89844 14.2249 3.35625 14.2249 2.40469 15.1785L1.5 16.0852V6.00882C1.5 4.35057 2.84531 3.00236 4.5 3.00236ZM7.5 6.00882H4.5V9.01529C6.15469 9.01529 7.5 7.66708 7.5 6.00882ZM25.5 15.0282C23.8453 15.0282 22.5 16.3764 22.5 18.0347H25.5V15.0282ZM15 16.5315C17.4844 16.5315 19.5 14.5115 19.5 12.0218C19.5 9.53203 17.4844 7.51206 15 7.51206C12.5156 7.51206 10.5 9.53203 10.5 12.0218C10.5 14.5115 12.5156 16.5315 15 16.5315Z" fill="white"/>
      </g>
      <g id="speed">
      <path id="Vector_2" d="M29.0459 28.1229C28.8743 28.1219 28.7051 28.0826 28.5507 28.0078C28.3746 27.904 28.2337 27.7497 28.1465 27.5649C28.0592 27.38 28.0295 27.1732 28.0613 26.9713V23.1134L21.8253 27.8811C21.6598 28.0121 21.4605 28.0936 21.2506 28.116C21.0406 28.1384 20.8286 28.1009 20.6392 28.0078C20.4464 27.912 20.2844 27.7641 20.1714 27.5809C20.0584 27.3977 19.9991 27.1865 20 26.9713V13.152C19.9991 12.9368 20.0584 12.7256 20.1714 12.5424C20.2844 12.3592 20.4464 12.2114 20.6392 12.1156C20.8285 12.0218 21.0406 11.9838 21.2507 12.0063C21.4608 12.0287 21.6601 12.1106 21.8253 12.2423L28.0613 17.0042V13.152C28.0307 12.951 28.061 12.7455 28.1482 12.5618C28.2354 12.3781 28.3756 12.2247 28.5507 12.1213C28.74 12.0275 28.9521 11.9896 29.1622 12.012C29.3723 12.0345 29.5716 12.1163 29.7368 12.248L38.5581 19.1577C38.6958 19.2654 38.8071 19.403 38.8837 19.5601C38.9602 19.7173 39 19.8898 39 20.0645C39 20.2393 38.9602 20.4118 38.8837 20.569C38.8071 20.7261 38.6958 20.8637 38.5581 20.9714L29.7368 27.8811C29.539 28.0347 29.2964 28.1196 29.0459 28.1229V28.1229Z" fill="#47BF82"/>
      </g>
      </g>
      </svg>

      </FeatureIcon>
      <CardHeader>Fast Transfer</CardHeader>
      <Cardp>Most probably the best dashboard design for your business you can try.</Cardp>


      </FeatureInfo>

      <FeatureInfo>
      <FeatureIcon className='four'>
 
      <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Lifetime-update">
      <g id="phone">
      <path id="phone_2" d="M17.8378 4H2.16216C0.969595 4 0 4.96959 0 6.16216V32.1081C0 33.3007 0.969595 34.2703 2.16216 34.2703H17.8378C19.0304 34.2703 20 33.3007 20 32.1081V6.16216C20 4.96959 19.0304 4 17.8378 4ZM10 29.7432C9.25338 29.7432 8.64865 29.1385 8.64865 28.3919C8.64865 27.6453 9.25338 27.0405 10 27.0405C10.7466 27.0405 11.3514 27.6453 11.3514 28.3919C11.3514 29.1385 10.7466 29.7432 10 29.7432Z" fill="white"/>
      </g>
      <g id="update">
      <path id="update_2" d="M15.3857 9.42857C16.0143 6.28571 18.8429 3.92857 22.1429 3.92857C24.5 3.92857 26.3857 5.02857 27.6429 6.75714L30.3143 3.61429C28.4286 1.41429 25.4429 0 22.1429 0C16.6429 0 12.0857 4.08571 11.3 9.42857H8L13.5 15.7143L19 9.42857H15.3857ZM30.7857 6.28571L25.2857 12.5714H28.9C28.1143 15.7143 25.4429 18.0714 22.1429 18.0714C19.7857 18.0714 17.9 16.9714 16.6429 15.2429L13.9714 18.2286C15.8571 20.5857 18.8429 22 22.1429 22C27.6429 22 32.2 17.9143 32.9857 12.5714H36.2857L30.7857 6.28571Z" fill="#765A98"/>
      </g>
      </g>
      </svg>


      </FeatureIcon>
      <CardHeader>Lifetime Update</CardHeader>
      <Cardp>Most probably the best dashboard design for your business you can try.</Cardp>

      
      </FeatureInfo>



      </Feature>
      </Fade>
    </HeroContainer>
  
          
    </>
  )
}


const HeroContainer = styled.div`
 
 margin: 80px;

@media screen and (max-width: 768px){
  padding: 0;
  margin: 90px;

 
} 
`;

const HeroWrapper = styled.div`
display: grid;
height: 100%;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 20px;
justify-content: center;
.d{
  margin-top: 10px;
}

@media screen and (max-width: 768px){
  padding: 0;
  
}

 
`;
 
const HeroRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto , 1fr);
align-items: center;
grid-template-areas: 'col1 col2';
 
@media screen and (max-width: 768px){
  grid-template-areas: 'col1 col1' 'col2 col2';
  margin-bottom: 0;
  margin-top: 55px;
}

`;
 
const Column1 = styled.div`
 
z-index: 1;
padding: 0 15px;
grid-area: col1;

@media screen and (max-width: 768px){
  
  padding: 0;
  
}
 
`;

const Column2 = styled.div`
 
padding: 0 15px;
grid-area: col2;
 
`;

const TextWrapper = styled.div`
margin-top: 0;
max-width: 450px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px){
  
}
`;


 

const Heading = styled.h1`
margin-bottom: 0;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: #262a37;

@media screen and (max-width: 480px){
  font-size: 28px;
}
`;

const P= styled.p`
width: 300px;
margin-top: 5px;
font-size: 17px;
line-height: 1;
font-weight: 100;
color:#999;


@media screen and (max-width: 480px){
 display: none;
}
`;
const Span = styled.h1`
font-size: 48px;
line-height: 1.1;
font-weight: 700;
color: #395A9B 60%;
cursor: pointer;

@media screen and (max-width: 480px){
  font-size: 28px;
}
`;

 

const ImgWrap = styled.div` 
margin-top: 0;
max-width: 555px;
height: 555px;
 

@media screen and (max-width: 768px){
 height : 250px;
 margin-bottom: 100px;

}
`;

const Img = styled.img`
width: 100%;
height: 90%;
padding-right: 0;

@media screen and (max-width: 768px) {
  margin-top: 30px;
  margin-bottom: 30px;
  height: 100%;
  
  
}
 
`;

 const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 margin-right: 24px;
 `;

 const Button = styled(LinkR)`
 margin-top: 25px;
 border-radius: 4px;
 width: 200px;
 background:  linear-gradient(to bottom right, #08AEE8, #6977fe);
 white-space: nowrap;
 padding: 10px 22px;
 margin-left: 0;
 font-size: 16px;
 font-weight: bold;
 color: #fff;
 outline: none;
 cursor: pointer;
 overflow: hidden;
 position: relative;
 text-decoration: none;
 text-align: center;
 


 &:hover{
  background:  linear-gradient(to bottom right, #41d3fe, #6977fe);
  border-radius: 0;
  transition: all 0.9s ease;
 }
  
 `;

  

const Feature = styled.div`

margin-top: 100px;
margin-bottom: 50px;
display: flex;
gap: 20px;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 20px;


@media screen and (max-width: 768px){
  transition: all 0.9s ease;
  display: flex;
  flex-direction: column; 
  padding: 0;
  margin-top: 5px;
  margin-bottom: 5px;

} 


`;

const FeatureInfo = styled.div`

display: flex;
flex-direction: column;
align-items: center;
height: 230px;
width: 280px;
background-color: #F4F8FC;
border-radius: 30px;
padding: 20px;
gap: 20px;
box-sizing: border-box;
 
&:hover{
  
    transition: all 0.9s ease;
  	box-shadow: 0 0 32px 8px #dfdfdf;
    background-color: #fafeff;
    
    .one,.two,.three,.four{

    border-radius: 50%;
    transition: all 0.9s ease;
    
    }
  }




`;

const FeatureIcon = styled.div`

width: 85px;
height: 85px;
display: flex;
align-items: center;
justify-content: center;

border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
color: #fff;

&.one{ 
  background: linear-gradient(44.44deg, #408EF4 7.79%, #D1DEEC 94.18%); 

}
&.two{
  background: linear-gradient(44.44deg, #D87478 7.79%, #FDEBE5 94.18%); 

 
}
&.three{
  background: linear-gradient(44.44deg, #47BF82 7.79%, #E3F8D9 94.18%); 

  
}
&.four{
  background: linear-gradient(44.44deg, #765A98 7.79%, #CEBCCC 94.18%); 
}

`;

const CardHeader = styled.h4`

font-size: 18px;
font-weight: 700;
color: #262a37;
line-height: 1.2;

`;

const Cardp = styled.p`

font-size: 13.5px;
font-weight: 400;
color: #716c80;
text-align: center;
line-height: 1.4;

`;