import React, { useState } from "react";
import styled from "styled-components";
import logo from '../../Assets/qr2.jpg'
import Send from "./Send";
import Recieve from "./Recieve";


function Qrcode() {
   
  const [ active, setActive] = useState("picture"); 

  return (
    
    <Con>
    <Container>
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Profile> 

            <div className='containImg'>
           
            <BtnWrapper>
             <Button onClick={()=> setActive("Send")}>Send Money</Button>
                </BtnWrapper>
            </div>
            
            <div className='containImg'>
           
            <BtnWrapper>
             <Button onClick={()=> setActive("Recieve")}>Recieve Payment</Button>
                </BtnWrapper>
            </div>

            <div className='containImg'>
           
            
            </div>

            </Profile>
          
          </ColumnOne1>

          <ColumnTwo1>
             <Setting>

            {active === "picture" && <img src={logo} alt="Logo" />}
            {active === "Send" && <Send/>}
            {active === "Recieve" && <Recieve/>}
            
            
             </Setting>
          </ColumnTwo1>
        </SectionOne> 
      </SubContainer>
    </Container>
    </Con>
  );
}

const Container = styled.div`
  width: 90%;
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  /* border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem; */
  margin: 1rem 4rem 1rem 4rem;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const Con = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: black; */

`;

const SubContainer = styled.div`
  /* margin: 0.5rem 0; */
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const Profile = styled.div`
display:flex;
flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100%;
  width: 18rem;
  background-color: rgba(58, 135, 190,0.1);
  color: #000;
  transition: 0.4s ease-in-out;

  p{
          font-size: 14px;
          text-decoration: none;
          font-weight: 400;
        
        }
 
 


 

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
    .containImg{  

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            padding-bottom: 25px;
            padding-top: 15px;
            margin-top: 5px;
            margin: 0;
    }

`;


const Setting = styled.div`
display: flex;
justify-content: center;
align-items: center;
  height: 100%;
  background-color: rgba(58, 135, 190,0.1);
  /* margin-bottom: 10px; */
  padding: 10px;
  transition: 0.4s ease-in-out;
  color: #000;

  img{ 
    height: 400px
  }

  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin-top: 1rem;
  }
`;


const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 margin-left: 5px;
 `;

const Button = styled.button`
margin-top: 16px;
border-radius: 4px;
border: none;
width: 200px;
background:rgb(58, 135, 190);
white-space: nowrap;
padding: 20px 22px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
`;







export default Qrcode;