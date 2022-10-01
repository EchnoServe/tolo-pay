
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
  )
}

const Section = styled.section`
.walletToWallet{
    display: flex;
    min-height: 100vh;
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
          text-decoration: 2.5px underline #46833c;
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
      border: 2px solid #9dc297;
    }
  
    .option:hover{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #46833c;
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
      color: #00fcb6;
      cursor: pointer;
    }
    
    button {
      background: #46833c;
      color: white;
      cursor: pointer;
      background-image: linear-gradient(to bottom right, #46833c, #9fcb98);
    }
    
    button:hover{
      background-image: linear-gradient(to bottom right, #285f1f, #7ab671);
    }
   
    
    button:disabled {
      cursor: default;
    }
  }
  
  
  
`;

export default WalletToWallet