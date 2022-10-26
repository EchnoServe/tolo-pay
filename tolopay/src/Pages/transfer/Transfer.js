import React, { useState } from "react";
import styled from "styled-components";
import Bills from "./Bills";
import ToBank from "./ToBank";
import ToWallet from "./ToWallet";
 

function Transfer() {
   
const [active, setActive] = useState("ToWallet");
   

  return (
    
    <Con>
    <Container>
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Transfers active={active}> 

            <div className='containImg'>

           <Title>Transfer Options</Title>

           <BtnWrapper>
             <Button className = "towallet" onClick={() => setActive("ToWallet")}>Wallet Transfer</Button>
            </BtnWrapper>

            
            </div>
            
            <div className='containImg'>
            <BtnWrapper>
             <Button className = "paybills" onClick={() => setActive("PayBills")}>Pay Bills</Button>
            </BtnWrapper>
            
            </div>

            <div className='containImg'>
           
            <BtnWrapper>
             <Button className = "tobank" onClick={() => setActive("ToBank")}>Bank Transfer</Button>
            </BtnWrapper>
            </div>

            </Transfers>
          
          </ColumnOne1>

          <ColumnTwo1>
             <Form>
           
             {active === "PayBills" &&   <Bills/>}
             {active === "ToWallet" &&   <ToWallet/>}
             {active === "ToBank" &&   <ToBank/>}  
             </Form>
          </ColumnTwo1>
        </SectionOne> 
      </SubContainer>
    </Container>
    </Con>
  );
}

const Container = styled.div`
  width: 90%;
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
`;

const SubContainer = styled.div`
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

const Transfers = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 100%;
  width: 18rem;
  gap: 40px;
  background-color: rgba(58, 135, 190,0.1);
  color: #000;
  transition: 0.4s ease-in-out;
  border-radius: 4px;
  border: 1px solid rgba(58, 135, 190, 0.3);  
  position: relative;
  .paybills{
    background: ${({active}) => (active === 'PayBills' ? 'rgba(255, 255, 255, 0.7)' : '')};
    color: ${({active}) => (active === 'PayBills' ? 'rgb(58, 135, 190)' : '')};  
    border: ${({active}) => (active === 'PayBills' ? '2px solid  rgba(58, 135, 190, 0.5)' : '')};      
  }

  .towallet{
    background: ${({active}) => (active === 'ToWallet' ? 'rgba(255, 255, 255, 0.7)' : '')};
    color: ${({active}) => (active === 'ToWallet' ? 'rgb(58, 135, 190)' : '')};  
    border: ${({active}) => (active === 'ToWallet' ? '2px solid  rgba(58, 135, 190, 0.5)' : '')};     
  }

  .tobank{
    background: ${({active}) => (active === 'ToBank' ? 'rgba(255, 255, 255, 0.7)' : '')};
    color: ${({active}) => (active === 'ToBank' ? 'rgb(58, 135, 190)' : '')};  
    border: ${({active}) => (active === 'ToBank' ? '2px solid  rgba(58, 135, 190, 0.5)' : '')};   
  }




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
            justify-content: center;
            margin: 0;       
    }
`;


const Form = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(58, 135, 190,0.2);
  padding: 10px;
  transition: 0.4s ease-in-out;
  color: #000;
  border-radius: 4px;
  border: 1px solid rgba(58, 135, 190, 0.3);  

  img{ 
    height: 400px;
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
 `;

const Button = styled.button`
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
border: 2px solid  rgba(58, 135, 190, 0.1); 



&:hover{
  background:rgba(58, 135, 190, 0.7);
  color: #fff;
}

&:active{
  border: 2px solid  rgba(58, 135, 190, 0.5); 
  background:rgba(255, 255, 255, 0.7);
  color: rgb(58, 135, 190);
}

&:focus{
  border: 2px solid  rgba(58, 135, 190, 0.5); 
  background:rgba(255, 255, 255, 0.7);
  color: rgb(58, 135, 190);

}

`;

const Title = styled.h4`
position: absolute;
font-size: 18px;
text-decoration: none;
font-weight: 600;
color:rgb(41, 75, 90);
top: 0px;
margin-top: 20px;
`;





export default Transfer;