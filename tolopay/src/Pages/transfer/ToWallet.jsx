
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import React, { useState } from "react";
// import "./styles.css";

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
         
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Title >wallet to wallet</Title>
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
                 className={`  ${errors.message && "invalid"}`}
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
   
    </Section>        
  )
}
 
const Section = styled.section`
.form{
height: 400px;
width: 450px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 10px;
align-items: center;

.invalid {
  border:1px solid red !important;
 }
 input, textarea {
  outline: none !important;
  box-shadow: none !important; 
  
}

.required{
  color: red;
}

.text-danger{
  color: red;
}
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
      
    
     .option{
     border: solid rgba(58, 135, 190,0.3);
     background: #f2f2f2;
     padding: 9px;
     border-radius: 3px;
     width: 70%;
 
    }

    .option:hover{
      border: solid rgb(58, 135, 190) ;
      transition: border 0.3s ease;
    }
  
    .option:focus{
      border: solid rgb(58, 135, 190) ;
      transition: border 0.3s ease;
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
 
 input{
  border: solid rgba(58, 135, 190,0.3);
  -webkit-appearance: none;
  -ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px;
border-radius: 3px;
width: 70%;
outline: none;
}

.inputMargin{
  margin-bottom: 10px;
}

input:focus::placeholder{
  color: transparent; 
}

input:focus::placeholder{
  color: #f2f2f2;
  transition: color 0.3s ease;
}

input:focus{
  border: solid rgb(58, 135, 190) ;
  transition: border 0.3s ease;
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
border-radius: 4px;
border: none;
width: 70%;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 10px 12px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
    }
    
    button:hover{
      background-image: linear-gradient(to bottom right, rgb(58, 135, 190), #71a6b6);
    }
   
    button:disabled {
      cursor: default;
    }
 
  
}
  
`;

const Title = styled.h1`
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  color:rgb(41, 75, 90);
  margin-bottom: 5px;
 
`;

export default WalletToWallet
