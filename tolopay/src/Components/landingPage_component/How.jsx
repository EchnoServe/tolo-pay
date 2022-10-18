import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom'
 
export default function How() {
  return (
    <Container id = 'how'>
    <StepsContainer>
      <Zoom>
    <Section>  
      <div className="container">
        <div className="title">
          <h1>
            <span>How</span> It Works?
          </h1>
        </div>
        <div className="HowItWorks">
          <div className="HowItWork">
            <div className="image">
            <div className="step"><h1>1</h1></div>
            </div>
            <p className="p">Register</p>
            <p>
            Enter the application and create an account according to your data then verify
            </p>
          </div>
          <div className="HowItWork">
            <div className="image">
            <div className="step"><h1>2</h1></div>
            </div>
            <p className="p">Add new card</p>
            <p>
            Add and connect your card to the apps to do your every transaction activity
            </p>
          </div>
          <div className="HowItWork">
            <div className="image">
            <div className="step"><h1>3</h1></div>
            </div>
            <p className="p">Success</p>
            <p>
            If everything was done and connected then your account is ready to use.
            </p>
          </div>
        </div>
      </div>
    </Section>
    </Zoom>
    </StepsContainer>
    </Container> 
  );
}

const Container = styled.div`
margin-bottom: 65px;
margin-top: 100px;

`;



const StepsContainer = styled.div`

display: flex;
height: 100%;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 20px;
justify-content: center;
margin-top: 100px;
`;

const Section = styled.div`
  margin-top: 100px;
  /* margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px; */


  background:  linear-gradient(44.44deg, #D1DEEC 94.18%, #408EF4 7.79%, #D1DEEC 94.18%); 
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;

  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    
    .title {
      position: absolute;
      top: -0.9rem;
      left: 36%;
      padding: 0 1rem;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;

      h1{
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        color: #262a37;
        line-height: 1.4;
      }
      span{
        color: linear-gradient(to right, #08AEE8, #6977fe);;
      }
    }
    .HowItWorks{
      display: flex;
      justify-content: center; 
      gap: 1px;
      margin-top: 3vw;
       

      .HowItWork {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        
        p {
          text-align: center;
          font-size: 15px;
          line-height: 24px;
          color: rgba(38, 42, 55,0.6);
          cursor: pointer;
        }
        .p{
          font-weight: 700;
          font-size: 16px;
          color: #262a37;
        }
         
        .image {
          overflow: hidden;
          width: 5rem;
          max-height: 5rem;
          border-radius: 5rem;
          cursor: pointer;
          background-color: green;
          .step {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            height: 5rem;
            background: linear-gradient(44.44deg, #408EF4 7.79%, #D1DEEC 94.18%); 
          }
        }
      }
      .dots{
        width: 200px;
        height: 100px;
        background-color: black;
        
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .HowItWorks {
        flex-direction: column;
      }
    }
  }
`;
