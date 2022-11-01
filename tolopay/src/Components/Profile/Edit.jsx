import React, { useState,useContext } from "react";
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Context } from "./../../context/Context";
 
 

export default function Edit() {
  const { user } = useContext(Context);
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
    <div>

     <Title>Personal details</Title>
     <Form onSubmit={handleSubmit(onSubmit)}>
     <Input>
     <InputWrap>
     <Label>First Name</Label>
     <input  placeholder= {user?.data.user.name} type='text' 
      className={`form-control ${errors.email && "invalid"}`}
                {...register("firstName", { required: "FirstName is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid input name must only contain letters",
                }})}
                onKeyUp={() => {
                  trigger("firstName");
                }}/>
                  {errors.firstName && (
                <small className="text-danger">{errors.firstName.message}</small>
              )}
     </InputWrap>

     <InputWrap>
     <Label>Last Name</Label>
     <input placeholder='Ibrahim' type='text' 
      className={`form-control ${errors.email && "invalid"}`}
      {...register("lastName", { required: "LastName is Required" ,
      pattern: {
      value: /^[A-Za-z]/,
      message: "Invalid input name must only contain letters",
      }})}
      onKeyUp={() => {
        trigger("lastName");
      }}/>
       {errors.lastName && (
                <small className="text-danger">{errors.lastName.message}</small>
              )}
     </InputWrap>
     </Input> 

     <Input>
     <InputWrap>
     <Label>Phone Number</Label>
     <input  placeholder={user?.data.user.phoneNumber} type='number'
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
     </InputWrap>

     <InputWrap>
     <Label>Email</Label>
     <input placeholder={user?.data.user.email} type='Email'
      className={`form-control ${errors.email && "invalid"}`}
      {...register("email", { required: "Email address is Required" ,
      pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
      }})}
      onKeyUp={() => {
        trigger("email");
      }}/>
      {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
     </InputWrap>
     </Input> 

     <Input>
     <InputWrap>
     <Label>Username</Label>
     <input  placeholder={user?.data.user.userName} type='text' 
     className={`form-control ${errors.user && "invalid"}`}
     {...register("user", { required: "User name is Required",
    })}
    onKeyUp={() => {
      trigger("user");
    }}
     />
      {errors.user && (
                <small className="text-danger">{errors.user.message}</small>
              )}
     </InputWrap>

     <InputWrap>
     <Label>City</Label>
     <input placeholder='Addis Ababa ' type='text'
     className={`form-control ${errors.city && "invalid"}`}
     {...register("city", { required: "City name is Required",
     pattern: {
      value: /^[A-Za-z]/,
      message: "Invalid input name must only contain letters",
      } })}
    onKeyUp={() => {
      trigger("city");
    }}
     />
      {errors.city && (
                <small className="text-danger">{errors.city.message}</small>
              )}
     </InputWrap>
     
     </Input> 
     <BtnWrapper>
     <Button type='submit'>Update</Button>
     </BtnWrapper>

     </Form> 
    </div>
  )
}

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1px;

.invalid {
    border:1px solid red !important;
   }
   input, textarea {
    outline: none !important;
    box-shadow: none !important; 
    
  }

  .text-danger{
  color: red;
}

input{
border: solid #f2f2f2;
-webkit-appearance: none;
-ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px;
border-radius: 3px;
width: 130%;
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

`;

const  InputWrap = styled.div`

display: flex;
flex-direction: column;
gap: 10px;

`;

const Input = styled.div`
margin-top: 10px;
display: flex; 
align-items: flex-start;
gap: 100px;
 

@media screen and (min-width: 320px) and (max-width: 1080px){
  display: block;
  justify-content: center;
  align-items: center;
  width: 300px;
  

  input{
    width: 75%;
  }
}
`;

 

const Title = styled.h1`
  font-size: 15px;
  text-decoration: none;
  font-weight: 600;
  color:rgba(58, 135, 190,0.8);
 
`;

const Label = styled.label`

  font-size: 14px;
  text-decoration: none;
  font-weight: 550;
  color:rgba(41, 75, 90,0.9);

`;

const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 
 `;

const Button = styled.button`

margin-top: 16px;
border-radius: 4px;
border: none;
width: 150px;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 8px 12px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;

&:hover{
  background: rgba(58, 135, 190, 0.7);
}

`;


