
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./styles.css";

const WalletToWallet = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }; 

  return (
    <Con>
    <Container>
      <SubContainer>
        <SectionOne>

          <ColumnTwo1>
          <Setting >

          <Section>
    <div className="walletToWallet">
        <form className="moneyTransfer" onSubmit={handleSubmit(onSubmit)}>
            <h3 >wallet to wallet</h3>
            <input
                placeholder="Customer Phone Nmber"  
                className={`form-control ${errors.phone && "invalid"}`}
                 {...register("phone", { required: "Phone  number is Required",
                 pattern: {
                   value: /^\s*(?:\+?(\d[09]))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
                   message: "Invalid phone number",
                 },
                })}
                onKeyUp={() => {
                 trigger("phone");
               }}/>
                     {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            <input
                placeholder="Amount"
                className={`form-control ${errors.amount && "invalid"}`}
                {...register("amount", { required: "Amount is Required",
                pattern: {
                  value: /^([1-9][0-9]*)$/,
                  message: "Invalid Amount",
                },
               })}
               onKeyUp={() => {
                trigger("amount");
              }}/>
                    {errors.amount && (
               <small className="text-danger">{errors.amount.message}</small>
             )}
            
            <select className="option" id="remark" required>
                 <option value="" selected hidden>Remark</option>
                 <option value="option 1">option1</option>
                 <option value="option 2">option2</option>
                 <option value="option 3">option3</option>

            </select> 
               
            <input 
               placeholder="Password"
               type='password'
                 className={`form-control ${errors.message && "invalid"}`}
                 {...register("message", { required: "Password is Required",
                })}
                onKeyUp={() => {
                 trigger("message");
               }}
               />
               {errors.message && (
                 <small className="text-danger">{errors.message.message}</small>
               )}
            <button
                className="btn"
                type="submit">Transfer</button>
        </form>
    </div>
    </Section>
                </Setting> 
             
          </ColumnTwo1>
        </SectionOne> 
      </SubContainer>
    </Container>
    </Con>
   
  )
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
display: flex;
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
const Section = styled.section`
.walletToWallet{
    display: flex;
    min-height: 80vh;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  
    .moneyTransfer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
  
      h3{
          text-align: center;
          text-decoration: 2.5px underline rgb(58, 135, 190);
          text-underline-offset: 8px;
          
      }
  
      .option {
          color: gray;
      }
      option {
          border: 2px;
          color: #000000;
      }
      
    }
    
    .option{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid rgb(58, 135, 190);
    }
  
    .option:hover{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid rgb(58, 135, 190);
    }
    
    .form-field{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #9dc297;
    }
  
    .form-field:hover{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #46833c;
    }
  
    .btn{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: none;
    }
    
    
    
    input {
      background: white;
      padding: 15px;
      margin: 10px 0px;
      width: 400px;
    }
    
    .pass-wrapper {
      position: relative;
      display: flex;
      margin-bottom: 14px;
    }
    
    i {
      position: absolute;
      top: 38%;
      right: 16%;
    }
    i:hover {
      color: rgb(58, 135, 190);
      cursor: pointer;
    }
    
    button {
      background: rgb(58, 135, 190);
      color: white;
      cursor: pointer;
      background-image: linear-gradient(to bottom right, rgb(58, 135, 190), rgb(137, 175, 202));
    }
    
    button:hover{
      background-image: linear-gradient(to bottom right, rgb(58, 135, 190), #71a6b6);
    }
   
    input{
      border-color:rgb(58, 135, 190);
    }
    
    button:disabled {
      cursor: default;
    }
  }
  
  
  
`;

export default WalletToWallet

