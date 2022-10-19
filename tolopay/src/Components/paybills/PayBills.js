import React, { useState } from "react";
import styled from "styled-components";
import logo from '../../Assets/pana.png'
import WalletToWallet from "../../Components/walletToWallet/WalletToWallet";
 

function PayBills() {
 
   const [value, setValue] = useState("1")
   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
   }




  return (
    
    <Con>
    <Container>
      <SubContainer>
        <SectionOne>
         

          <ColumnTwo1>
          <Setting >

          <div className='containImg'>
           
           <BtnWrapper>
            <Button>Water Supply</Button>
               </BtnWrapper>
           </div>
           
         

           <div className='containImg'>
          
           <BtnWrapper>
            <Button>Electricity</Button>
               </BtnWrapper>
           </div>
           
          <div className='containImg'>
           
           <BtnWrapper>
            <Button>Education</Button>
               </BtnWrapper>
           </div>
           
         

           <div className='containImg'>
          
           <BtnWrapper>
            <Button>Health</Button>
               </BtnWrapper>
           </div>
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


const Setting = styled.div`
display: grid;
grid-template-columns:auto auto;
grid-template-rows:150px 100px;
justify-content: center;
align-items: center;
  height: 100%;
  background-color: rgba(58, 135, 190,0.1);
  /* margin-bottom: 10px; */
  padding: 10px;
  transition: 0.4s ease-in-out;
  color: #000;

  
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
width: 250px;
background:rgb(58, 135, 190);
white-space: nowrap;
padding: 28px 22px;
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







export default PayBills;